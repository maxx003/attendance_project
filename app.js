const express = require("express");
require("dotenv").config;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

const url = `mongodb+srv://theresmariafrancis:<Passwordincorrect>@cluster0.csqxkqj.mongodb.net/`;

app.get("/", (req, res) => {
  res.render("login");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.log(`Error connecting to the database: ${err}`);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Successfully connected to ${PORT}`);
});
