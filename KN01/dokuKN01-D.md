# KN01 - Aufgabe D: Rechte und Rollen

## Schritt 1: Falscher authSource Fehler
![Verbindungsfehler falscher authSource](./screenshots/d-wrong-authsource-error.png)
Ich habe absichtlich authSource=local verwendet. Dadurch sucht MongoDB den Benutzer in der falschen Datenbank und die Anmeldung scheitert. Das zeigt, wie wichtig der richtige authSource ist.

## Schritt 2: Benutzer Skript
```javascript
use Eaton;
db.createUser({
  user: "leser",
  pwd: "LeserPass.1",
  roles: [{ role: "read", db: "Eaton" }]
});
use admin;
db.createUser({
  user: "schreiber",
  pwd: "SchreiberPass.1",
  roles: [{ role: "readWrite", db: "Eaton" }]
});
```
Mit dem Skript erstelle ich zwei Benutzer mit unterschiedlichen Rechten. leser darf nur lesen, schreiber darf lesen und schreiben. So kann ich die Wirkung von Rollen direkt zeigen.

## Schritt 3: Benutzer 1 - Nur Lesen
![Benutzer 1 Login](./screenshots/d-user1-login.png)
Hier sieht man, dass der Benutzer leser sich anmelden kann.

![Benutzer 1 liest Daten](./screenshots/d-user1-read.png)
Der Benutzer leser kann die Dokumente sehen, also lesen.

![Benutzer 1 Schreibfehler](./screenshots/d-user1-write-error.png)
Beim Einfuegen kommt ein Fehler, weil leser keine Schreibrechte hat. Das ist genau der Sinn der read Rolle.

## Schritt 4: Benutzer 2 - Lesen und Schreiben
![Benutzer 2 Login](./screenshots/d-user2-login.png)
Hier sieht man die Anmeldung mit schreiber.

![Benutzer 2 liest Daten](./screenshots/d-user2-read.png)
Der Benutzer schreiber kann die Daten lesen.

![Benutzer 2 schreibt erfolgreich](./screenshots/d-user2-write.png)
Das Einfuegen klappt, weil schreiber die readWrite Rolle hat.

## Begriffe kurz erklaert
Role: Eine Rolle ist ein Paket von Rechten. read erlaubt nur lesen, readWrite erlaubt lesen und schreiben.
authSource: Die Datenbank, in der MongoDB den Benutzer und das Passwort nachschlaegt.
Rechte: Regeln, was ein Benutzer in der Datenbank tun darf.
Benutzer: Ein Login fuer die Datenbank mit Namen und Passwort.
