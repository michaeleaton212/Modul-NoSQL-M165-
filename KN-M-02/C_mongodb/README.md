# MongoDB Collections erstellen

## Script ausfuehren

Fuehre das Script in einer Shell mit `mongosh` aus:

```bash
mongosh < create_collections.js
```

## Hinweis zu `use gym_management;`

Der Befehl `use gym_management;` wechselt zuerst in die Zieldatenbank. Erst danach werden die `createCollection`-Befehle in genau dieser Datenbank ausgefuehrt. Ohne vorherigen Datenbankwechsel koennten die Collections in der falschen (aktuell aktiven) Datenbank erstellt werden.
