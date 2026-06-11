// KN-M-04 - Aggregationen Beispiele
// MongoDB Aggregation Framework mit verschiedenen Stages

// Aggregationen: Statt einfachen find() Abfragen haben wir aggregate() verwendet.
// Das erlaubt mehrere Schritte hintereinander zu schalten.
// Wir haben Trainer gefiltert mit zwei $match Stages,
// Kurse gefiltert und sortiert mit $match, $project, $sort,
// und Buchungen gezaehlt pro Status mit $group und $sum.

db = db.getSiblingDB('gym_management');

// ==========================================
// 1. Mehrere $match Stages hintereinander
// ==========================================
// Findet alle Trainer mit mindestens 5 Jahren Erfahrung UND Spezialisierung "Yoga"
// Verwendet mehrere $match Stages statt $and Operator
console.log("\n=== 1. Trainer mit 5+ Jahren Erfahrung UND Spezialisierung Yoga (mehrere $match) ===");
printjson(db.trainers.aggregate([
  { $match: { yearsExperience: { $gte: 5 } } },
  { $match: { specialization: "Yoga" } }
]).toArray());

// ==========================================
// 2. $match, $project und $sort kombiniert
// ==========================================
// Findet Kurse mit Preis > 20, zeigt nur Name, Preis und Dauer, sortiert nach Preis absteigend
console.log("\n=== 2. Kurse mit Preis > 20 (mit $match, $project, $sort) ===");
printjson(db.courses.aggregate([
  { $match: { pricePerSession: { $gt: 20 } } },
  { $project: { _id: 0, name: 1, pricePerSession: 1, durationMinutes: 1 } },
  { $sort: { pricePerSession: -1 } }
]).toArray());

// ==========================================
// 3. $group mit $sum zum Zaehlen
// ==========================================
// Zaehlt die Anzahl der Buchungen pro Status
console.log("\n=== 3. Anzahl Buchungen pro Status (mit $group und $sum) ===");
printjson(db.bookings.aggregate([
  { $group: { _id: "$status", anzahl: { $sum: 1 } } }
]).toArray());

// ==========================================
// 4. $group mit $sum und $avg
// ==========================================
// Gruppiert Mitglieder nach Membershiptyp und berechnet:
// - Anzahl Mitglieder pro Typ
// - Durchschnittliches Geburtsjahr
console.log("\n=== 4. Mitglieder pro Membershiptyp mit durchschnittlichem Geburtsjahr ===");
printjson(db.members.aggregate([
  { $group: { 
    _id: "$membershipType",
    anzahlMitglieder: { $sum: 1 },
    durchschnittlichesGeburtsjahr: { $avg: { $year: "$birthDate" } }
  } }
]).toArray());
