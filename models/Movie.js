const mongoose = require("../db/connection");

const MovieSchema = new mongoose.Schema({
  title: String,
  writer: String,
  director: String,
  year: Number,
  genre: String,
  worthTheWatch: Boolean,
  bluRay: Boolean,
  dvd: Boolean,
  picture: String
});

module.exports = mongoose.model("Movie", MovieSchema);
