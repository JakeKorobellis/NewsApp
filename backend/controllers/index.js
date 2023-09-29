const asynchandler = require("express-async-handler");
require("dotenv").config();
const User = require("../models/user");
const News = require("../models/news");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenVerify = require("../middlewear/jwtVerify");
//Require Models
// Need to render user favs for favs page
exports.test = asynchandler(async (req, res) => {
  res.json({ test: true, success: true });
});

exports.data = asynchandler(async (req, res) => {
  res.json({ test: true, data: true });
});

exports.user = asynchandler(async (req, res) => {
  res.json({ test: true, user: true });
});

//Signup post (Need to update name)
exports.testPost = asynchandler(async (req, res) => {
  console.log(req.body);
  try {
    //Hashing the users password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      fav_news: [],
      password: hash,
    });

    const saveUser = newUser.save();
    console.log("Sucess");
    res.json({ status: 200, text: "User Added" });
  } catch (err) {
    res.json({ status: 500, text: "User Signup Failed", error: err });
  }
});
//Login Post
exports.loginPost = asynchandler(async (req, res) => {
  const hasAccount = await User.findOne({ email: req.body.email });
  if (hasAccount == null) {
    res.json({ status: 500, account: false });
  } else {
    bcrypt.compare(req.body.password, hasAccount.password, (err, result) => {
      if (result) {
        //if the result is valid
        jwt.sign({ user: hasAccount }, process.env.JWTKEY, (err, token) => {
          if (err) {
            return res.json({ status: 500, account: false, user: null });
          } else {
            return res.json({
              token: token,
              account: true,
            });
          }
        });
      } else {
        return res.json({ status: 500, account: false, user: null });
      }
    });
  }
});
exports.addFav = asynchandler(async (req, res) => {
  //Losing Data?

  console.log(req.body);
  // Get the current user
  // ****** Current user needs to be dynamically changed ****
  const current_user = await User.findOne({ email: "jdoe@newsroom.com" });

  //Validate Request
  if (current_user.fav_news.length > 0) {
    //Comparing what is already stored to prevent duplicates
    for (let i = 0; i < current_user.fav_news.length; i++) {
      if (current_user.fav_news[i].headline == req.body.headline) {
        res.json({
          status: 200,
          action: "You have already saved this article",
          headline: "You have already saved this article",
        });
        return;
      }
    }
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({
      status: 200,
      action: "Succes! Article Saved",
    });
    return;
  } else {
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({
      status: 200,
      action: "Succes! Article Saved",
    });
  }
});
//Home
exports.home = asynchandler(async (req, res) => {
  jwt.verify(req.token, process.env.JWTKEY, (err, authData) => {
    if (err) {
      res.json({ status: 403, account: false });
    } else {
      res.json({
        status: 200,
        authData: authData,
        account: true,
      });
    }
  });
});
