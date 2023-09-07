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

//Signup post (Need to update name)
exports.testPost = (req, res) => {
  console.log(req.body);

  /* Need to encrypt the password
  before entering into the DB
  */

  try {
    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
    });

    const saveUser = newUser.save();
    console.log("Sucess");
    res.json({ status: 200, text: "User Added" });
  } catch (err) {
    res.json({ status: 500, text: "User Signup Failed", error: err });
  }
};
//Login Post
exports.loginPost = asynchandler(async (req, res) => {
  const hasAccount = await User.findOne({ email: req.body.email });
  if (hasAccount == null) {
    res.json({ status: 500, account: false });
  } else {
    //Need more conditionals for decrypting and comparing passwords
    console.log(hasAccount);
    res.json({ status: 200, account: true, user: hasAccount });
  }
});
exports.addFav = asynchandler(async (req, res) => {
  // Get the current user
  //Ensure the article is not already stored in the DB

  //if it is in the DB
  //Check if its in the users favs
  //if it is return
  //else add
  //---------------
  //else - add to db
  //Check if its in the users favs
  //if it is return
  //else add

  console.log(req.body);
});
