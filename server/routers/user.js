const express = require("express");
const User = require("../controllers/User");

const user = (app) => {
    const router = express.Router();
    app.use("/api/user", router);
    router.post("/signUp", User.signUp);
    router.get("/",User.getThongTin);
}

module.exports = user;