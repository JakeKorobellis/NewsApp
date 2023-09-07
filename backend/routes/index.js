const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

//Test Routes
router.get("/", controller.test);
router.get("/user", controller.user);
router.get("/news", controller.data);

//Signup
router.post("/user/create", controller.testPost);
//Login
router.post("/login/auth", controller.loginPost);
//Process fav
router.post("/add/fav", controller.addFav);

module.exports = router;
