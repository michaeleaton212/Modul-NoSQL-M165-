db = db.getSiblingDB('gym_management');

db.members.deleteMany({});
db.trainers.deleteMany({});
db.courses.deleteMany({});
db.bookings.deleteMany({});
db.equipment.deleteMany({});

const memberId1 = new ObjectId();
const memberId2 = new ObjectId();
const memberId3 = new ObjectId();
const memberId4 = new ObjectId();

const trainerId1 = new ObjectId();
const trainerId2 = new ObjectId();
const trainerId3 = new ObjectId();

const courseId1 = new ObjectId();
const courseId2 = new ObjectId();
const courseId3 = new ObjectId();
const courseId4 = new ObjectId();

const bookingId1 = new ObjectId();
const bookingId2 = new ObjectId();
const bookingId3 = new ObjectId();
const bookingId4 = new ObjectId();

const equipmentId1 = new ObjectId();
const equipmentId2 = new ObjectId();
const equipmentId3 = new ObjectId();
const equipmentId4 = new ObjectId();

db.trainers.insertOne(
  {
    _id: trainerId1,
    firstName: "Laura",
    lastName: "Keller",
    specialization: "Yoga",
    yearsExperience: 7,
    certifications: [
      "RYT-500",
      "Prenatal Yoga"
    ]
  }
);

db.trainers.insertMany(
  [
    {
      _id: trainerId2,
      firstName: "Marco",
      lastName: "Steiner",
      specialization: "Spinning",
      yearsExperience: 5,
      certifications: [
        "Indoor Cycling Instructor",
        "HIIT Coach"
      ]
    },
    {
      _id: trainerId3,
      firstName: "Nina",
      lastName: "Huber",
      specialization: "Pilates",
      yearsExperience: 9,
      certifications: [
        "Mat Pilates Level 2",
        "Reformer Fundamentals"
      ]
    }
  ]
);

db.members.insertMany(
  [
    {
      _id: memberId1,
      firstName: "Anna",
      lastName: "Moser",
      email: "anna.moser@example.com",
      birthDate: new Date("1992-04-16T00:00:00.000Z"),
      membershipType: "Premium",
      address: {
        street: "Bahnhofstrasse 12",
        city: "Zurich",
        zip: "8001"
      }
    },
    {
      _id: memberId2,
      firstName: "Lukas",
      lastName: "Baumann",
      email: "lukas.baumann@example.com",
      birthDate: new Date("1988-11-03T00:00:00.000Z"),
      membershipType: "Standard",
      address: {
        street: "Seestrasse 44",
        city: "Winterthur",
        zip: "8400"
      }
    },
    {
      _id: memberId3,
      firstName: "Sofia",
      lastName: "Roth",
      email: "sofia.roth@example.com",
      birthDate: new Date("1996-07-22T00:00:00.000Z"),
      membershipType: "Premium",
      address: {
        street: "Alpenweg 7",
        city: "Lucerne",
        zip: "6003"
      }
    },
    {
      _id: memberId4,
      firstName: "David",
      lastName: "Frei",
      email: "david.frei@example.com",
      birthDate: new Date("1990-02-10T00:00:00.000Z"),
      membershipType: "Basic",
      address: {
        street: "Marktgasse 21",
        city: "Bern",
        zip: "3011"
      }
    }
  ]
);

db.courses.insertMany(
  [
    {
      _id: courseId1,
      name: "Morning Yoga",
      description: "Vinyasa flow for flexibility and balance.",
      maxCapacity: 18,
      durationMinutes: 60,
      pricePerSession: 25.0,
      trainerId: trainerId1,
      schedule: [
        {
          dayOfWeek: "Monday",
          startTime: "07:30"
        },
        {
          dayOfWeek: "Wednesday",
          startTime: "07:30"
        }
      ]
    },
    {
      _id: courseId2,
      name: "Power Spinning",
      description: "High-intensity cycling workout with intervals.",
      maxCapacity: 20,
      durationMinutes: 50,
      pricePerSession: 22.5,
      trainerId: trainerId2,
      schedule: [
        {
          dayOfWeek: "Tuesday",
          startTime: "18:00"
        },
        {
          dayOfWeek: "Thursday",
          startTime: "18:00"
        }
      ]
    },
    {
      _id: courseId3,
      name: "Pilates Core",
      description: "Core stability and posture-focused training.",
      maxCapacity: 16,
      durationMinutes: 55,
      pricePerSession: 24.0,
      trainerId: trainerId3,
      schedule: [
        {
          dayOfWeek: "Monday",
          startTime: "17:30"
        },
        {
          dayOfWeek: "Friday",
          startTime: "12:15"
        }
      ]
    },
    {
      _id: courseId4,
      name: "Evening Yoga",
      description: "Relaxing yoga class for recovery and mobility.",
      maxCapacity: 15,
      durationMinutes: 45,
      pricePerSession: 20.0,
      trainerId: trainerId1,
      schedule: [
        {
          dayOfWeek: "Tuesday",
          startTime: "19:15"
        },
        {
          dayOfWeek: "Thursday",
          startTime: "19:15"
        }
      ]
    }
  ]
);

db.bookings.insertMany(
  [
    {
      _id: bookingId1,
      memberId: memberId1,
      courseId: courseId1,
      bookingDate: new Date("2026-05-15T09:00:00.000Z"),
      status: "confirmed",
      paymentAmount: 25.0
    },
    {
      _id: bookingId2,
      memberId: memberId2,
      courseId: courseId2,
      bookingDate: new Date("2026-05-16T10:30:00.000Z"),
      status: "pending",
      paymentAmount: 22.5
    },
    {
      _id: bookingId3,
      memberId: memberId3,
      courseId: courseId3,
      bookingDate: new Date("2026-05-18T14:15:00.000Z"),
      status: "confirmed",
      paymentAmount: 24.0
    },
    {
      _id: bookingId4,
      memberId: memberId4,
      courseId: courseId4,
      bookingDate: new Date("2026-05-20T16:45:00.000Z"),
      status: "cancelled",
      paymentAmount: 0.0
    }
  ]
);

db.equipment.insertMany(
  [
    {
      _id: equipmentId1,
      name: "Yoga Mat Pro",
      category: "Yoga",
      purchaseDate: new Date("2024-03-12T00:00:00.000Z"),
      condition: "excellent",
      courseIds: [
        courseId1,
        courseId4
      ]
    },
    {
      _id: equipmentId2,
      name: "Spin Bike X7",
      category: "Cardio",
      purchaseDate: new Date("2023-09-05T00:00:00.000Z"),
      condition: "good",
      courseIds: [
        courseId2
      ]
    },
    {
      _id: equipmentId3,
      name: "Pilates Ring",
      category: "Pilates",
      purchaseDate: new Date("2025-01-21T00:00:00.000Z"),
      condition: "excellent",
      courseIds: [
        courseId3
      ]
    },
    {
      _id: equipmentId4,
      name: "Resistance Band Set",
      category: "Functional",
      purchaseDate: new Date("2024-11-08T00:00:00.000Z"),
      condition: "good",
      courseIds: [
        courseId2,
        courseId3
      ]
    }
  ]
);
