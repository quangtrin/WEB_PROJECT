import express from "express";
import likeController from "../controllers/like.js";

const like = (app) => {
  const router = express.Router();
  app.use("/api/like", router);
  router.get("/:commentID/:userID", likeController.getLikeComment);
  router.get("/:commentID", likeController.getLikeComment);
  router.post("/", likeController.likeComment);
};

export default like;
