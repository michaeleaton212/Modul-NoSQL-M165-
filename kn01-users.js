use Eaton;
db.createUser({
  user: "leser",
  pwd: "LeserPass.1",
  roles: [{ role: "read", db: "Eaton" }]
});
use admin;
db.createUser({
  user: "schreiber",
  pwd: "SchreiberPass.1",
  roles: [{ role: "readWrite", db: "Eaton" }]
});
