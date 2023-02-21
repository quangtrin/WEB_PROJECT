import express from "express";
import adminController from "../controllers/admin.js";
import verifyToken from "../middleware/auth.js";
import verifyConfig from "../middleware/auth_config.js";
const admin = (app) => {
  const router = express.Router();
  app.use("/api/admin", router);
  router.post("/login", verifyConfig, adminController.login);
  router.get("/autoUpdateFilm/:passwordUpdate", verifyToken, adminController.autoUpdateFilm);
};

export default admin;
