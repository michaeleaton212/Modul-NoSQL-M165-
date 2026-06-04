# Logisches MongoDB-Modell - Fitnessstudio

## Verschachtelungen im Modell

### address in members
In der Collection `members` ist `address` als eingebettetes Objekt modelliert. Es enthaelt die Felder `street`, `city` und `zip`. Die Adresse gehoert fachlich direkt zu einem Mitglied und wird typischerweise gemeinsam mit dem Mitgliedsdokument gelesen.

### schedule in courses
In der Collection `courses` ist `schedule` als Array von eingebetteten Objekten modelliert. Jedes Element enthaelt `dayOfWeek` und `startTime` und bildet damit einen Kurstermin ab. Der Stundenplan ist ein fester Bestandteil des Kurses und wird zusammen mit den Kursstammdaten benoetigt.

## Begruendung Embedding vs. Referenzierung

- `address` in `members`: Eingebettet, weil Adresse immer zusammen mit Mitglied abgefragt wird.
- `schedule` in `courses`: Eingebettet, weil Stundenplan fester Bestandteil des Kurses ist.
- `trainerId` in `courses`: Referenz, weil Trainer-Daten sich aendern und separat verwaltet werden.
- `bookings` als eigene Collection: Referenzen auf `members` und `courses`, weil es eine N:N-Beziehung mit eigenen Attributen (`bookingDate`, `status`, `paymentAmount`) ist.
- `courseIds` in `equipment`: Array von Referenzen, weil ein Geraet mehreren Kursen zugeordnet sein kann.

## Strukturueberblick der Collections

- `members`: Mitgliedsstammdaten mit eingebettetem `address`-Objekt.
- `trainers`: Trainerstammdaten inkl. `certifications` als String-Array.
- `courses`: Kursdaten mit Referenz auf Trainer (`trainerId`) und eingebettetem `schedule`-Array.
- `bookings`: Verbindungscollection zwischen Mitgliedern und Kursen mit eigenen Buchungsattributen.
- `equipment`: Geraetedaten mit Mehrfachzuordnung zu Kursen ueber `courseIds`.
