const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const winston = require("winston");
const jsonBodyParser = express.json();

const app = express();
app.post("/api/users/signup", jsonBodyParser, (req, res) => {
  const user = {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    companyType,
    address,
    postal,
    city,
    country,
    state,
    userName,
    password,
    repeatPassword,
  } = req.body;
  let fn = user.firstName
  res.status(200).json({user: `User is ${fn}`})
});
app.get("/api/*", (req, res) => {
  res.json({ ok: true });
});
app.get("*", function (req, res, next) {
  if (req.url === "/") return next();
});
app.get("/", function (req, res, next) {
  res.send("Hello World!");
});
app.listen(8000, () => {
  console.log("Server is running!");
});
