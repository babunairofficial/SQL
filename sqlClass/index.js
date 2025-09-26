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


//using faker to create and add random data to query
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let data = [];
for(let i=0; i<=100; i++) {
  data.push(createRandomUser()); //100 fake users data using faker
}

try {
  // query with parameterized input
  connection.query(q, [data], (err, result) => { // users data to be entered within square brackets
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

// end connection
connection.end();