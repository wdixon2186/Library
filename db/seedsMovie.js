const Movie = require("../models/Movie.js");

const movieData = require("./movies.json");

Movie.deleteMany({})
  .then(() => {
    return Movie.insertMany(movieData);
  })
  .then(() => {
    console.log("We have Movies");
    process.exit();
  });
