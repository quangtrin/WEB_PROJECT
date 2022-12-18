const mysql = require("mysql");
const userModel = require("../models/user");

var connect = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "04112002",
  database: "main",
});

const User = {
  signUp: (req, res) => {
    userModel.signUp(connect);
  },
  getThongTin: async (req, res) => {
    await userModel.getThongTin(connect, (err, data) => {
      if(err) {
        console.log(err);
      }
      else res.json(data);
    });
  }
};
module.exports = User;
