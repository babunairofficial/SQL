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

let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)"; //storing the query in a variable
let user = ["1", "1_newsuperhero", "nsh@gmail.com", "nsh"]; //array to store the placeholder values

try {
  connection.query(q, user, (err, result) => {
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