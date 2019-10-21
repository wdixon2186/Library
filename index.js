const express = require("express");
const hbs = require("hbs");
const booksController = require("./controllers/myBooks.js");
const movieController = require("./controllers/myMovies.js");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.use("/assets", express.static("public"));
app.get("/", (req, res) => {
  res.redirect("/movies");
});
app.use("/books", booksController);
app.use("/movies", movieController);

// app.listen(2700, () => console.log("We have lift off on port 2700"))

app.set("port", process.env.PORT || 2701);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

module.exports = app;
