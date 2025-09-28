// CJS
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shaktimaan_app',
  password: '' //enter password of connection created in mysql
});

// try {
//   // query with parameterized input
//   connection.query(q, [data], (err, result) => { // users data to be entered within square brackets
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// // end connection
// connection.end();

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    // query with parameterized input
    connection.query(q, (err, result) => { // users data to be entered within square brackets
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("database error");
  }
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});