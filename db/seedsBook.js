const Book = require("../models/Book.js");

const bookData = require("./books.json");

Book.deleteMany({})
  .then(() => {
    return Book.insertMany(bookData);
  })
  .then(() => {
    console.log("We have Books");
    process.exit();
  });
