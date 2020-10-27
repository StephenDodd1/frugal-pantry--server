const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const winston = require("winston");

const app = express();

app.get('/', function (req,res,next) {
  res.send('Hello World!')
})
app.listen(8000,() => {
  console.log('Server is running!')
})