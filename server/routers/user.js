const express = require("express");
const userController = require("../controllers/user");

const user = (app) => {
  const router = express.Router();
  app.use("/api/user", router);
  router.post("/signUp", userController.signUp);
  router.get("/getFilm", userController.getFilm);
  router.post("/register", userController.register);
  router.post("/comment", userController.addComment);
  router.get("/comment", userController.getComment);
  router.get("/getEpisodeFilm", userController.getEpisodeFilm);
  router.get("/getEpisodeFilm/:id", userController.getEpisodeFilmById);
};

module.exports = user;
