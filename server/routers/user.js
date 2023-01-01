const express = require("express");
const userController = require("../controllers/user");

const user = (app) => {
  const router = express.Router();
  app.use("/api/user", router);
  router.post("/signUp", userController.signUp);
  router.get("/", userController.getThongTin);
  router.post("/register", userController.register);
  router.post("/comment", userController.comment);
};

module.exports = user;
