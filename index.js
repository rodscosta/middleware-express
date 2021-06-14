const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(logger);

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
});

app.get("/users", logger, (req, res) => {
  console.log("Users Page");
  res.send("Users Page");
});

function logger(req, res, next) {
  console.log("LoG");
  next();
}

app.listen(5000);