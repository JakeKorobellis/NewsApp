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
  try {
    //Hashing the users password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    //Creating new user through User model
    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      fav_news: [],
      password: hash,
    });

    //Saving user to Database
    const saveUser = newUser.save();

    //Success Status sent back
    res.json({ status: 200, text: "User Added" });
  } catch (err) {
    //Error Status Sent back
    res.json({ status: 500, text: "User Signup Failed", error: err });
  }
});
//Login Post
exports.loginPost = asynchandler(async (req, res) => {
  //Searching for users account via email
  const hasAccount = await User.findOne({ email: req.body.email });

  if (hasAccount == null) {
    //If no account is found
    res.json({ status: 500, account: false });
  } else {
    //Compare passwords using bcrypt
    bcrypt.compare(req.body.password, hasAccount.password, (err, result) => {
      if (result) {
        //if the result is valid, sign a JWT Token
        jwt.sign({ user: hasAccount }, process.env.JWTKEY, (err, token) => {
          if (err) {
            //Check for any errors
            return res.json({ status: 500, account: false, user: null });
          } else {
            //No error, send user info back
            return res.json({
              token: token,
              account: true,
            });
          }
        });
      } else {
        //Error - send error message
        return res.json({ status: 500, account: false, user: null });
      }
    });
  }
});

// TO-DO
// Check the users fav news article length, dont let more than 20

exports.addFav = asynchandler(async (req, res) => {
  // Get the current user
  const current_user = await User.findOne({ _id: req.body.id });

  //Validate Request
  if (current_user.fav_news.length > 0) {
    //Comparing what is already stored to prevent duplicates
    for (let i = 0; i < current_user.fav_news.length; i++) {
      if (current_user.fav_news[i].headline == req.body.headline) {
        //If there is a duplicate, alert duplicate
        res.json({
          status: 200,
          action: "You have already saved this article",
          headline: "You have already saved this article",
        });
        return;
      }
    }

    //No duplicate, update the current users favs by appending to the end
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({
      status: 200,
      action: "Succes! Article Saved",
    });
    return;
  } else {
    //If th euser has no current saved articles, save it
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({
      status: 200,
      action: "Succes! Article Saved",
    });
  }
});

// User auth to make sure they are signed in
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

//Remove faviorite route
exports.removeFav = asynchandler(async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.body.user }, //Filter is the user
      { $pull: { fav_news: { headline: req.body.headline } } }
    );

    const current_user = await User.findOne({ _id: req.body.user });

    res.json({
      status: 200,
      action: "Article Removed Sucessfully",
      authData: current_user,
    });
  } catch (error) {
    res.json({
      status: 500,
      action: "Internal Error",
    });
  }
});

exports.getNews = asynchandler(async (req, res) => {
  const current_user = await User.findOne({ _id: req.body._id });
  res.json({
    status: 200,
    authData: current_user,
  });
});
