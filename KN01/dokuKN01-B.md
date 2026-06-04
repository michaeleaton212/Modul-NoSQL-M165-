# KN01 - Aufgabe B: Erste Schritte GUI

## Schritt 1: Dokument vor dem Einfuegen
![Dokument vor dem Einfuegen](./screenshots/b-dokument-vor-einfuegen.png)
Ich lege eine neue Datenbank und eine Collection an und tippe ein Beispiel-Dokument ein, druecke aber noch nicht auf Insert. Das ist der Moment, in dem man gut sieht, welche Felder ich erfasse und wie die Werte zuerst als normale Strings und Zahlen erfasst werden.

## Schritt 2: Compass nach Datumstypanpassung
![Compass mit Datenbank Collection und Dokument](./screenshots/b-compass-nach-aenderung.png)
Nach dem Einfuegen oeffne ich das Dokument und aendere den Typ von geburtsdatum auf Date. So speichert MongoDB das Datum als echten Datumstyp und nicht als Text. Ich sehe Datenbank, Collection und Dokument, also den gesamten Weg vom Container bis zum einzelnen Datensatz.

## Schritt 3: Export JSON
```json
[{"_id":{"$oid":"6a183ee18f44923d25f102d6"},"adresse":"Musterstrasse 1","groesse":180,"geburtsdatum":{"$date":"2000-01-15T00:00:00.000Z"}}]
```
Der Export zeigt, wie MongoDB das Datum speichert: nicht als reinen String, sondern als spezielles $date Feld. Ausserdem sehe ich die _id, die MongoDB automatisch vergibt. Das ist die eindeutige ID des Dokuments.

## Schritt 4: Erklaerung Datumstyp
Wenn ich ein Datum direkt korrekt einfuegen will, nutze ich MongoDB Extended JSON:
{ "geburtsdatum": { "$date": "2000-01-15T00:00:00.000Z" } }

JSON kennt nur String, Number, Boolean, Array, Object und null. Ein Datum als String bleibt deshalb ein String. Extended JSON erweitert das mit speziellen Schluesseln wie $date und sagt damit klar, welcher Typ gemeint ist.

Dasselbe Thema gibt es bei Integer vs Double, ObjectId und Timestamp. Ohne Extended JSON muss ich die Typen nachtraeglich in Compass korrigieren.

## Begriffe kurz erklaert
Datenbank: Ein Container fuer Collections.
Collection: Eine Sammlung von Dokumenten, vergleichbar mit einer Tabelle, aber ohne fixes Schema.
Dokument: Ein einzelner Datensatz im JSON-Format.
Feld: Ein einzelner Wert im Dokument, z.B. adresse oder geburtsdatum.
ObjectId: Eine automatisch erzeugte eindeutige ID fuer jedes Dokument.
