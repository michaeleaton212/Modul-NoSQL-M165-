db = db.getSiblingDB('gym_management');

db.members.deleteOne({ firstName: "David", lastName: "Frei" });

db.bookings.deleteMany({ $or: [ { status: "pending" }, { status: "cancelled" } ] });