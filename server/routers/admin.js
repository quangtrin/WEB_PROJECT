import express from "express";
import adminController from "../controllers/admin.js";

const admin = (app) => {
  const router = express.Router();
  app.use("/api/admin", router);
  router.post("/addEpisode", adminController.addEpisode);
  router.post("/addFilm", adminController.addFilm);
  router.get("/autoUpdateFilm/:passwordUpdate", adminController.autoUpdateFilm);
};

export default admin;
