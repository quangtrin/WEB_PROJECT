const express = require("express");
const app = express();
const user = require("./routers/user");
const mysql = require("mysql");
require('dotenv').config({ path: '.env' })
var connect = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

connect.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// app.get("/", (req, res) => {
//   res.json({ users: ["userOne", "userTwo", "userThress"] });
// });
app.use(express.urlencoded());
app.use(express.json());
user(app);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
