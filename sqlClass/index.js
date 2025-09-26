// CJS
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'shaktimaan_app',
  password: '' //enter password of connection created in mysql
});

//a query
try {
  connection.query("SHOW TABLES", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

//Inserting New Data - using placeholders

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)"; //storing the query in a variable
// let user = ["1", "1_newsuperhero", "nsh@gmail.com", "nsh"]; //array to store the placeholder values

// try {
//   connection.query(q, user, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
//bulk insert query using a placeholder for multiple columns

//user data as an array of arrays
let users = [
  ["2", "2_newsuperhero", "nshb@gmail.com", "nshb"],
  ["3", "3_newsuperhero", "nshc@gmail.com", "nshc"]
];


try {
  // query with parameterized input
  connection.query(q, [users], (err, result) => { // users data to be entered within square brackets
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

// end connection
connection.end();

let createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}