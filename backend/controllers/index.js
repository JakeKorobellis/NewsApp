const express = require("express");
const asynchandler = require("express-async-handler");
require("dotenv").config();
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
