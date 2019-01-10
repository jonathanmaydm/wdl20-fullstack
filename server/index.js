require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();

app.listen(process.env.EXPRESS_PORT || 5050, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
