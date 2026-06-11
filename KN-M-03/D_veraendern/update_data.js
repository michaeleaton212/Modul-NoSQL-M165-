db = db.getSiblingDB('gym_management');

// Aktualisiert die Mitgliedschaft eines bestimmten Mitglieds ueber seine _id.
db.members.updateOne(
  {
    _id: new ObjectId("507f1f77bcf86cd799439031")
  },
  {
    $set: {
      membershipType: "Premium Plus"
    }
  }
);

// Aktualisiert mehrere Buchungen ohne _id per ODER-Bedingung auf den Status paid.
db.bookings.updateMany(
  {
    $or: [
      {
        status: "pending"
      },
      {
        status: "confirmed"
      }
    ]
  },
  {
    $set: {
      status: "paid"
    }
  }
);

// Ersetzt ein komplettes Equipment-Dokument durch neue Werte.
db.equipment.replaceOne(
  {
    name: "Spin Bike X7"
  },
  {
    name: "Spin Bike X7",
    category: "Cardio",
    purchaseDate: new Date("2025-02-10T00:00:00.000Z"),
    condition: "excellent",
    courseIds: [
      new ObjectId("507f1f77bcf86cd799439051"),
      new ObjectId("507f1f77bcf86cd799439052")
    ]
  }
);
