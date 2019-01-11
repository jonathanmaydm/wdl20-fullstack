require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();
const authController = require("./authController");

app.use(json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");
});

app.post("/auth/login", authController.login);
app.post("/auth/signup", authController.signup);
app.get("/auth/me", authController.me);

app.listen(process.env.EXPRESS_PORT || 5050, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
