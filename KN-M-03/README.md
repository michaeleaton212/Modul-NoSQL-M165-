# KN-M-03 - MongoDB Aufgaben

## Struktur

- `A_hinzufuegen/insert_data.js`
- `B_loeschen/drop_collections.js`
- `B_loeschen/delete_entries.js`
- `C_abfragen/queries.js`
- `D_veraendern/update_data.js`

## Was manuell gemacht werden muss

1. `mongosh` starten.
2. Skripte bei Bedarf in dieser Reihenfolge ausfuehren:
   - Daten einfuegen:
     - `load("KN-M-03/A_hinzufuegen/insert_data.js")`
   - Abfragen testen:
     - `load("KN-M-03/C_abfragen/queries.js")`
   - Updates testen:
     - `load("KN-M-03/D_veraendern/update_data.js")`
   - Einzelne Eintraege loeschen:
     - `load("KN-M-03/B_loeschen/delete_entries.js")`
   - Collections komplett loeschen:
     - `load("KN-M-03/B_loeschen/drop_collections.js")`
3. Bei `delete_entries.js` und `update_data.js` die Platzhalter-ObjectIds bei Bedarf mit echten IDs aus der eigenen Datenbank ersetzen.
