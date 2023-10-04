const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
const tokenVerify = require("../middlewear/jwtVerify");
const verifyToken = require("../middlewear/jwtVerify");

//Test Routes
router.get("/", controller.test);
router.get("/user", controller.user);
router.get("/news", controller.data);
router.get("/api/auth", verifyToken, controller.home);

//Signup
router.post("/user/create", controller.testPost);
//Login
router.post("/login/auth", controller.loginPost);
//Process fav
router.post("/add/fav", controller.addFav);
//Delete fav
router.post("/remove/fav", controller.removeFav);

module.exports = router;
