# Abgabe KN-M-02 - Gym-Management

Diese Abgabe enthaelt die vollstaendige Loesung zur Schulaufgabe KN-M-02 mit dem Thema Fitnessstudio / Gym-Management.

## Ordnerstruktur und Inhalte

### A_konzeptionell
- `A_konzeptionell/ER-Diagramm.drawio`  
  Konzeptionelles ER-Diagramm mit den Entitaeten Mitglied, Kurs, Trainer, Geraet und Buchung sowie den geforderten Beziehungen und Kardinalitaeten.
- `A_konzeptionell/erklaerung.md`  
  Beschreibung der Entitaeten, Beziehungen und Begruendung der N:N-Beziehung.

### B_logisch
- `B_logisch/logisches-modell.drawio`  
  Logisches MongoDB-Diagramm mit Collections, Feldtypen, eingebetteten Strukturen und Referenzen.
- `B_logisch/erklaerung.md`  
  Begruendung fuer Embedding vs. Referenzierung und Erklaerung der Verschachtelungen.

### C_mongodb
- `C_mongodb/create_collections.js`  
  MongoDB-Script zum Erstellen der Collections ohne JSON-Schema.
- `C_mongodb/README.md`  
  Kurzanleitung zur Ausfuehrung mit `mongosh` und Hinweis zum Datenbankkontext.

## Qualitaetskontrolle

- Alle geforderten Dateien wurden erstellt und in den richtigen Unterordnern abgelegt.
- Beide `.drawio`-Dateien wurden als valides XML geprueft.
