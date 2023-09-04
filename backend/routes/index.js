const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.test);
router.get("/user", controller.user);
router.get("/news", controller.data);

router.post("/user/create", controller.testPost);

module.exports = router;
