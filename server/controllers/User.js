const mysql = require("mysql");
const userModel = require("../models/user");
require("dotenv").config({ path: ".env" });
var connect = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

const userController = {
  signUp: async (req, res) => {
    const { account, password } = req.body;
    await userModel.signUp(connect, account, password, (err, data) => {
      if (err) console.log(err);
      else if (data[0] != null) {
        res.json({
          login: true,
          id: data[0].userID,
          userName: data[0].userName,
        });
      } else res.json({ login: false });
    });
  },
  register: async (req, res) => {
    const { account, password, userName, dateOfBirth, avatarUrl } = req.body;
    await userModel.register(
      connect,
      account,
      password,
      userName,
      dateOfBirth,
      avatarUrl,
      (err, data) => {
        if (err) console.log(err);
        else res.json({ register: data });
      }
    );
  },
  getThongTin: async (req, res) => {
    await userModel.getThongTin(connect, (err, data) => {
      if (err) {
        console.log(err);
      } else res.json(data);
    });
  },
};
module.exports = userController;
