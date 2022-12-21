const mysql = require("mysql");
const userModel = require("../models/user");

var connect = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "04112002",
  database: "main",
});

const userController = {
  signUp: async (req, res) => {
    const { account, password } = req.body;
    await userModel.signUp(connect, account, password, (err, data) => {
      if (err) console.log(err);
      else if (data[0] != null) {
        res.json({
          login: true,
          id: data[0].idLoginUser,
          userName: data[0].userName,
        });
      } else res.json({ login: false });
    });
  },
  register: async (req, res) => {
    const { account, password, userName, avatarUrl } = req.body;
    await userModel.register(
      connect,
      account,
      password,
      userName,
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
