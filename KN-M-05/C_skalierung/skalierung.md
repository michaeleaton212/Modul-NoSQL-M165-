# Skalierung in MongoDB

## Replication vs Sharding

### Replication
Replication bedeutet dass dieselben Daten auf mehreren Servern (Nodes) gespiegelt werden. Ein Primary-Node nimmt Schreiboperationen entgegen, Secondary-Nodes erhalten Kopien der Daten. Faellt der Primary aus, wird automatisch ein Secondary zum neuen Primary. Replication dient hauptsaechlich der Hochverfuegbarkeit und Datensicherheit.

### Sharding (Partitionierung)
Sharding bedeutet dass die Daten auf mehrere Server aufgeteilt werden. Jeder Server hat nur einen Teil der Daten. Dies wird verwendet wenn die Datenmenge zu gross fuer einen einzelnen Server ist. Sharding dient hauptsaechlich der horizontalen Skalierung bei sehr grossen Datenmengen.

### Unterschied
| | Replication | Sharding |
|---|---|---|
| Zweck | Hochverfuegbarkeit | Skalierung bei grossen Datenmengen |
| Daten | Vollstaendige Kopie auf jedem Node | Jeder Node hat nur einen Teil |
| Vorteil | Ausfallsicherheit, Leseleistung | Sehr grosse Datenmengen moeglich |
| Nachteil | Kein Gewinn bei Datenmenge | Komplexer aufzusetzen |

## Empfehlung fuer unsere Firma

Unsere Applikation verwendet MongoDB fuer ein Gym-Management-System. Die Datenmenge ist ueberschaubar (Members, Courses, Bookings, Equipment). Das System muss jedoch immer verfuegbar sein da Buchungen und Mitgliederverwaltung kritisch sind.

**Empfehlung: Replication (Replica Set)**

Ein Replica Set mit einem Primary und zwei Secondary Nodes wird empfohlen. Begruendung:
- Die Datenmenge rechtfertigt kein Sharding
- Hochverfuegbarkeit ist wichtig fuer den Betrieb
- Bei Ausfall des Primary uebernimmt automatisch ein Secondary
- Leseanfragen koennen auf Secondary Nodes verteilt werden

**Quellen:**
- https://www.mongodb.com/docs/manual/replication/
- https://www.mongodb.com/docs/manual/sharding/
