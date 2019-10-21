const express = require("express");
const router = express.Router();

const Movies = require("../models/Movie.js");

router.get("/", (req, res) => {
  Movies.find({}).then(myMovies => res.render("indexMovies", { myMovies }));
});

router.get("/newMovie", (req, res) => {
  res.render("newMovie");
});

router.post("/", (req, res) => {
  Movies.create(req.body).then(newMovie => {
    res.redirect("/movies");
  });
});

router.get("/:id", (req, res) => {
  Movies.findOne({ _id: req.params.id }).then(movieName =>
    res.render("showMovies", movieName)
  );
});

router.get("/editMovie/:id", (req, res) => {
  Movies.findOne({ _id: req.params.id }).then(myMovies => {
    res.render("editMovie", { myMovies });
  });
});

router.put("/:id", (req, res) => {
  Movies.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    res.redirect("/movies");
  });
});

router.delete("/:id", (req, res) => {
  Movies.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/movies");
  });
});

module.exports = router;
