const express = require("express");
require("dotenv").config;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const Student = require("./student.js");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

//middleware (use)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const url = `mongodb+srv://theresmariafrancis:Passwordincorrect@cluster0.csqxkqj.mongodb.net/`;

app.get("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  res.render("login");
});

app.post("/register", (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const user = Student.findOne({ email });
  // check if username already exists.
  //if (user) {
  //res.status(400).send("Username already exists. Please try again.");
  //return;
  //}
  // check if the confirm passord equals the password
  if (password !== confirmPassword) {
    res.status(400).send(" Passwords do not match!");
    return;
  }

  bcrypt.hash(password, 12, (err, hashedPassword) => {
    const user = new Student({
      email: email,
      password: hashedPassword,
    });

    user.save();

    res.redirect("/");
  });
});

app.get("/register", (req, res) => {
  res.render("register");
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
