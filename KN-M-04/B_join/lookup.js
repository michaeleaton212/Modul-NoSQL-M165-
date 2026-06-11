// KN-M-04 - Join/Lookup Beispiele
// MongoDB $lookup zum Verknuepfen von Collections

db = db.getSiblingDB('gym_management');

// ==========================================
// 1. $lookup von Bookings zu Members
// ==========================================
// Verknuepft Buchungen mit den entsprechenden Mitgliederdaten
// Zeigt Buchungsinformationen zusammen mit Vorname, Nachname und Membershiptyp
console.log("\n=== 1. Bookings mit Member-Details (via $lookup) ===");
printjson(db.bookings.aggregate([
  { $lookup: {
    from: "members",
    localField: "memberId",
    foreignField: "_id",
    as: "memberDetails"
  } },
  { $unwind: "$memberDetails" },
  { $project: {
    _id: 0,
    bookingDate: 1,
    status: 1,
    paymentAmount: 1,
    memberFirstName: "$memberDetails.firstName",
    memberLastName: "$memberDetails.lastName",
    membershipType: "$memberDetails.membershipType"
  } }
]).toArray());

// ==========================================
// 2. $lookup von Courses zu Trainers
// ==========================================
// Verknuepft Kurse mit den entsprechenden Trainerdaten
// Filtert nach Kursen mit Preis > 20
// Zeigt Kursname, Preis und Trainerdaten sortiert nach Preis (absteigend)
console.log("\n=== 2. Kurse mit Trainer-Details, Preis > 20 (via $lookup) ===");
printjson(db.courses.aggregate([
  { $lookup: {
    from: "trainers",
    localField: "trainerId",
    foreignField: "_id",
    as: "trainerDetails"
  } },
  { $unwind: "$trainerDetails" },
  { $match: { pricePerSession: { $gt: 20 } } },
  { $project: {
    _id: 0,
    name: 1,
    pricePerSession: 1,
    trainerFirstName: "$trainerDetails.firstName",
    trainerLastName: "$trainerDetails.lastName",
    specialization: "$trainerDetails.specialization"
  } },
  { $sort: { pricePerSession: -1 } }
]).toArray());
