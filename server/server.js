import express from "express";
import cors from "cors";
import user from "./routers/user.js";
import admin from "./routers/admin.js";
import * as dotenv from "dotenv";
import fileUpload from "express-fileupload";

import film from "./routers/film.js";
import episodeFilm from "./routers/episodeFilm.js";
import comment from "./routers/comment.js";
import rate from "./routers/rate.js";
import like from "./routers/like.js";
import session from "express-session";
import path from 'path';

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();
const __dirname = path.resolve();

app.use(express.urlencoded());
app.use(express.json());
app.use(session({ secret: "04112002", resave: false, saveUninitialized: true }))
app.use(cors());
app.use(fileUpload());
app.use("/uploads",express.static(path.join(__dirname, 'uploads')))

like(app);
user(app);
admin(app);
film(app);
episodeFilm(app);
comment(app);
rate(app);

app.listen(port, () => {
  console.log("Server started on port 4000");
});
