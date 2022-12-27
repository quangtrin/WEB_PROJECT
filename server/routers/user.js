const express = require("express");
const userController = require("../controllers/User");

const user = (app) => {
  const router = express.Router();
  app.use("/api/user", router);
  router.post("/signUp", userController.signUp);
  router.get("/getFilm", userController.getFilm);
  router.post("/register", userController.register);
};

module.exports = user;
