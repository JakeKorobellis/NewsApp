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
  //Losing Data?

  console.log(req.body);
  // Get the current user
  const current_user = await User.findOne({ fname: "Admin" });

  //Validate Request
  if (current_user.fav_news.length > 0) {
    for (let i = 0; i < current_user.fav_news.length; i++) {
      if (current_user.fav_news[i].headline == req.body.headline) {
        res.json({ status: 200, action: "Already added" });
        return;
      }
    }
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({ status: 200, action: "Added to Faviorites" });
    return;
  } else {
    current_user
      .updateOne({ fav_news: [...current_user.fav_news, req.body] })
      .exec();
    res.json({ status: 200, action: "Added to Faviorites" });
  }
});
