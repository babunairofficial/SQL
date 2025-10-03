// CJS
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shaktimaan_app',
  password: '' //enter password of connection created in mysql
});


//Home Route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    // query with parameterized input
    connection.query(q, (err, result) => { // users data to be entered within square brackets
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("database error");
  }
});



//Show Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => { // users data to be entered within square brackets
      if (err) throw err;
      
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("database error");
  }
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});