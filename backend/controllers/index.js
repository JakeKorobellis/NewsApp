const asynchandler = require("express-async-handler");
require("dotenv").config();
const User = require("../models/user");
const News = require("../models/news");
//Require Models

exports.test = asynchandler(async (req, res) => {
  res.json({ test: true, success: true });
});

exports.data = asynchandler(async (req, res) => {
  res.json({ test: true, data: true });
});

exports.user = asynchandler(async (req, res) => {
  res.json({ test: true, user: true });
});

exports.testPost = (req, res) => {
  const newUser = new User({
    fname: "jake",
    lname: "koro",
    email: "jdoe@newsroom.com",
    password: "12345678910",
  });

  const saveUser = newUser.save();
  console.log("Sucess");
  res.json({ status: 200, text: "User Added" });
};
