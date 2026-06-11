db = db.getSiblingDB('gym_management');

// Mitglieder mit Premium oder Standard Mitgliedschaft anzeigen, ohne _id in der Ausgabe.
printjson(db.members.find(
  {
    $or: [
      {
        membershipType: "Premium"
      },
      {
        membershipType: "Standard"
      }
    ]
  },
  {
    _id: 0,
    firstName: 1,
    lastName: 1,
    membershipType: 1,
    email: 1
  }
).toArray());

// Trainer mit mindestens 5 Jahren Erfahrung und Spezialisierung Yoga mit _id anzeigen.
printjson(db.trainers.find(
  {
    $and: [
      {
        yearsExperience: {
          $gte: 5
        }
      },
      {
        specialization: "Yoga"
      }
    ]
  },
  {
    _id: 1,
    firstName: 1,
    lastName: 1,
    specialization: 1,
    yearsExperience: 1
  }
).toArray());

// Kurse suchen, deren Name den Teilstring "Yoga" enthaelt.
printjson(db.courses.find(
  {
    name: {
      $regex: "Yoga",
      $options: "i"
    }
  },
  {
    _id: 0,
    name: 1,
    durationMinutes: 1,
    pricePerSession: 1
  }
).toArray());

// Buchungen ab dem 1. Mai 2026 anhand des Datums filtern.
printjson(db.bookings.find(
  {
    bookingDate: {
      $gte: new Date("2026-05-01T00:00:00.000Z")
    }
  },
  {
    _id: 1,
    memberId: 1,
    courseId: 1,
    bookingDate: 1,
    status: 1
  }
).toArray());

// Equipment in gutem oder exzellentem Zustand mit Kategorie ausgeben.
printjson(db.equipment.find(
  {
    condition: {
      $in: [
        "good",
        "excellent"
      ]
    }
  },
  {
    _id: 0,
    name: 1,
    category: 1,
    condition: 1
  }
).toArray());
