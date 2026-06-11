// KN-M-04 - Unterdokumente (Subdocuments) Beispiele
// Arbeit mit eingebetteten Objekten und Arrays in MongoDB

db = db.getSiblingDB('gym_management');

// ==========================================
// 1. Felder des Unterdokuments projizieren
// ==========================================
// Zeigt nur die Stadt und Postleitzahl aus dem address-Unterdokument von Members
// _id wird ausgeblendet
console.log("\n=== 1. Members - Nur Stadt und Postleitzahl (Unterdokument-Felder) ===");
printjson(db.members.find({}, { "address.city": 1, "address.zip": 1, _id: 0 }).toArray());

// ==========================================
// 2. Nach Feldern des Unterdokuments filtern
// ==========================================
// Findet alle Mitglieder die in Zuerich wohnen (address.city = "Zurich")
// Zeigt Vorname, Nachname und Stadt
console.log("\n=== 2. Members aus Zuerich (Filter nach Unterdokument-Feld) ===");
printjson(db.members.find(
  { "address.city": "Zurich" },
  { firstName: 1, lastName: 1, "address.city": 1, _id: 0 }
).toArray());

// ==========================================
// 3. Array mit $unwind verflachen
// ==========================================
// Verflacht das schedule-Array in Courses
// Jeder Schedule-Eintrag wird zu einem separaten Dokument
// Zeigt Kursname, Wochentag und Startzeit
console.log("\n=== 3. Courses mit verflachtem Schedule-Array (via $unwind) ===");
printjson(db.courses.aggregate([
  { $unwind: "$schedule" },
  { $project: { 
    _id: 0,
    name: 1,
    dayOfWeek: "$schedule.dayOfWeek",
    startTime: "$schedule.startTime"
  } }
]).toArray());
