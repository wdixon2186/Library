const express = require("express");
const router = express.Router();

const Books = require("../models/Book.js");

router.get("/", (req, res) => {
  Books.find({}).then(myBooks => {
    res.render("indexBooks", { myBooks });
  });
});

router.get("/newBook", (req, res) => {
  res.render("newBook");
});
router.post("/", (req, res) => {
  Books.create(req.body).then(newBook => {
    res.redirect("/books");
  });
});

router.get("/:id", (req, res) => {
  Books.findOne({ _id: req.params.id }).then(bookName =>
    res.render("showBooks", bookName)
  );
});

router.get("/editBook/:id", (req, res) => {
  Books.findOne({ _id: req.params.id }).then(myBooks => {
    res.render("editBook", { myBooks });
  });
});
router.put("/:id", (req, res) => {
  Books.findByIdAndUpdate({ _id: req.params.id }, req.body).then(myBooks => {
    res.redirect("/books");
  });
});

router.delete("/:id", (req, res) => {
  Books.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/books");
  });
});

module.exports = router;
