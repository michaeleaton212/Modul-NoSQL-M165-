# KN01 - Aufgabe A: Installation

## Schritt 1: Cloud-Init Datei
```yaml
#cloud-config
users:
  - name: ubuntu
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: users, admin
    home: /home/ubuntu
    shell: /bin/bash
    ssh_authorized_keys:
      - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKCuWX/W66sjjNiDNuPpKgYO1xFqDoMJoeo5hz2LDNrF teacher-key-wir
ssh_pwauth: false
disable_root: false
package_update: true
packages:
  - unzip
  - gnupg
  - curl
write_files:
  - path: /home/ubuntu/mongodconfupdate.sh
    content: |
      sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf
  - path: /home/ubuntu/mongodbuser.txt
    content: |
      use admin;
      db.createUser(
        {
          user: "admin",
          pwd: "admin",
          roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWriteAnyDatabase", db: "admin" }
          ]
        }
      );
runcmd:
  - curl -fsSL https://pgp.mongodb.com/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
  - echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
  - sudo apt-get update -y
  - sudo apt-get install -y mongodb-org
  - sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf
  - sudo chmod +x /home/ubuntu/mongodconfupdate.sh
  - sudo /home/ubuntu/mongodconfupdate.sh
  - sudo systemctl enable mongod
  - sudo systemctl start mongod
  - sudo sleep 3
  - sudo mongosh < /home/ubuntu/mongodbuser.txt
  - sudo systemctl restart mongod
```
Ich nutze Cloud-Init, damit der Server beim ersten Start automatisch eingerichtet wird. Das Skript legt den Benutzer an, installiert MongoDB, oeffnet die Verbindung nach aussen und erstellt den Admin-User. So muss ich die Schritte nicht von Hand tippen und habe spaeter immer die gleiche, reproduzierbare Installation.

## Schritt 2: Screenshot Compass Datenbanken
![Compass Datenbanken](./screenshots/a-compass-datenbanken.png)
Auf dem Screenshot sehe ich die Standard-Datenbanken admin, config und local. Das zeigt mir, dass der Server erreichbar ist und Compass die Verbindung aufgebaut hat. admin wird fuer Benutzer und Rechte genutzt, config speichert interne Einstellungen, und local enthaelt lokale Informationen wie z.B. Replikationsdaten.

## Schritt 3: Erklaerung authSource=admin
authSource sagt MongoDB, in welcher Datenbank die Zugangsdaten gesucht werden. Ich melde mich mit dem Benutzer admin an, und dieser Benutzer wurde in der Datenbank admin erstellt. Deshalb muss authSource=admin gesetzt sein. Wenn ich authSource=local nehme, sucht MongoDB im falschen Ort und lehnt die Anmeldung ab.

## Schritt 4: Erklaerung der sed Befehle
Befehl 1: sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf
Ich aendere bindIp von 127.0.0.1 auf 0.0.0.0. 127.0.0.1 bedeutet nur lokale Verbindungen. 0.0.0.0 bedeutet, dass MongoDB auf allen Netzwerkadressen hoert und Compass von aussen zugreifen darf.

Befehl 2: sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf
Hier schalte ich die Anmeldung ein. Ohne authorization: enabled koennte jeder ohne Passwort zugreifen. Mit der Einstellung ist ein Login mit Benutzername und Passwort Pflicht.

## Schritt 5: Screenshot mongod.conf
![mongod.conf mit bindIp und authorization](./screenshots/a-mongod-conf.png)
Der Screenshot beweist, dass die beiden wichtigen Einstellungen aktiv sind: bindIp steht auf 0.0.0.0 und authorization steht auf enabled. Damit ist der Server von aussen erreichbar und gleichzeitig abgesichert.

## Begriffe kurz erklaert
Cloud-Init: Ein Startskript fuer Cloud-Server, das beim ersten Booten automatisch laeuft.
YAML: Ein einfaches Textformat, das wie eingerueckte Listen aussieht und gut lesbar ist.
mongod: Der eigentliche Datenbankdienst, also der Serverprozess von MongoDB.
mongosh: Die Kommandozeile, mit der ich Befehle an MongoDB schicke.
bindIp: Steuert, auf welchen Netzwerkadressen der Server Verbindungen annimmt.
authSource: Die Datenbank, in der MongoDB den Benutzer und das Passwort nachschlaegt.
Role: Eine Rolle ist ein Paket von Rechten, z.B. nur lesen oder lesen und schreiben.
Replica Set: Eine Gruppe von MongoDB-Servern, die sich gegenseitig kopieren, damit bei Ausfall ein anderer uebernimmt.
