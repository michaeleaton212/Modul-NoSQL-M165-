db = db.getSiblingDB('admin');

try { db.dropUser("gym_writer"); } catch(e) {}
try { db.getSiblingDB('gym_management').dropUser("gym_reader"); } catch(e) {}

db.getSiblingDB('gym_management').createUser({
  user: "gym_reader",
  pwd: "ReaderPass.1",
  roles: [
    { role: "read", db: "gym_management" }
  ]
});

db.createUser({
  user: "gym_writer",
  pwd: "WriterPass.1",
  roles: [
    { role: "readWrite", db: "gym_management" }
  ]
});
