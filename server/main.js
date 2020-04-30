//libraries
const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");

// constants
const port = process.env.PORT || 3000;

//asignments
const app = express();
app.use("/data", express.static(__dirname.concat("/data")));
app.use(logger("dev"));

// app assignment
app.use(express.json());

//db
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "@nagraj",
  port: 5432,
});

//port listening
app.listen(port, function () {
  console.log("MySelf app requests are beeing listening on port =>", port);
});





