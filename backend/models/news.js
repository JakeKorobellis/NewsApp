const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { objectId } = require("mongodb");

//News Model
const NewsSchema = new Schema({
  test: true,
});

module.exports = mongoose.model("News", NewsSchema);
