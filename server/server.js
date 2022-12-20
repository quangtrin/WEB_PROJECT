const express = require("express");
const app = express();
const user = require("./routers/user");
const mysql = require("mysql");

var connect = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "04112002",
  database: "main",
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// app.get("/", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThress"] });
// });

user(app);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
