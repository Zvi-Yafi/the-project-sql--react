const mysql = require("mysql2");
const express = require("express");
const app = express();


const list = require("./localization");
const foods = require("./foods");



let connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "admin",
  database: "mydb",
});

const insert = (raw) =>
  `INSERT INTO foods ( name, img, cal, price) VALUES ${raw};`;

const row = (name, img, cal, price) => {
  return `('${name}', '${img}', '${cal}', ${price})`;
};

const qury = insert(foods.map((s) => row(...Object.values(s))));

// connection.query(qury, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

app.listen(5003, () => {
  console.log("listen");
});
