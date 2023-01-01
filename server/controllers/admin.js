const mysql = require("mysql");
const adminModel = require("../models/admin");
require("dotenv").config({ path: ".env" });
var connect = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

const adminController = {
  addEpisode: async (req, res) => {
    const { filmID, episodeID, url } = req.body;
    await adminModel.addEpisode(
      connect,
      filmID,
      episodeID,
      url,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(data);
      }
    );
  },

  addFilm: async (req, res) => {
    const {
      filmName,
      otherName,
      status,
      point,
      year,
      duration,
      description,
      categoryID,
      url,
    } = req.body;
    await adminModel.addFilm(
      connect,
      filmName,
      otherName,
      status,
      point,
      year,
      duration,
      description,
      categoryID,
      url,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(data);
      }
    );
  },
  addCategory: async (req, res) => {
    const { category } = req.body;
    await adminModel.addCategory(connect, category, (err, data) => {
      if (err) {
        connect.log(err);
        return;
      }
      res.json(data);
    });
  },
};
module.exports = adminController;
