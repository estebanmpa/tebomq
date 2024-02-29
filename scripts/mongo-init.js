db.createUser({
    user: "tebomquser",
    pwd: "tebomqpass",
    roles: [{ role: "readWrite", db: "tebomqdb" }]
});