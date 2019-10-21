const mongoose = require("../db/connection");

const BookSchema = new mongoose.Schema({
  title: String,
  numberOfPages: Number,
  author: String,
  genre: String,
  worthReading: Boolean,
  year: Number,
  hardcover: Boolean,
  paperback: Boolean,
  picture: String
});

module.exports = mongoose.model("Book", BookSchema);
