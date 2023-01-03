const express = require("express");
const adminController = require("../controllers/admin");

const admin = (app) => {
  const router = express.Router();
  app.use("/api/admin", router);
  router.post("/addEpisode", adminController.addEpisode);
  router.post("/addFilm", adminController.addFilm);
};

module.exports = admin;
