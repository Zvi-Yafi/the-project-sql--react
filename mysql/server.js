const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "admin",
  database: "project",
});

app.get("/users", function (req, res, next) {
  connection.query("SELECT * FROM users ", function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/todos", function (req, res, next) {
  connection.query("SELECT * FROM todos ", function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/posts", function (req, res, next) {
  connection.query("SELECT * FROM posts ", function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/alboms", function (req, res, next) {
  connection.query("SELECT * FROM alboms ", function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/posts/:postID/comments", function (req, res, next) {
  let postid = req.params.postID;
  connection.query(`SELECT * FROM comments WHERE postID = ${postid}`  , function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/albums/:albomID/photos", function (req, res, next) {
  let albomid = req.params.albomID;
  connection.query(`SELECT * FROM photos WHERE albomID = ${albomid}`  , function (err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.listen(5003, () => {
  console.log("listen");
});

// const list = require("./localization");
// const foods = require("./foods");
// const users = require("../New folder/users");
// const alboms = require("../New folder/albums.json");
// const comments = require("../New folder/comments.json");
// const photos = require("../New folder/photos.json");
// const posts = require("../New folder/posts.json");
// const todos = require("../New folder/todos.json");

// console.log(Object.keys(foods[0]));

// const insert = (raw) => `INSERT INTO photos ( albomId,id, title,url, thumbnailUrl) VALUES ${raw};`;

// const row = (albomId,id, title,url, thumbnailUrl) => {
//   return `( ${albomId}, '${id}', '${title}', '${url}' , '${thumbnailUrl}')`;

// };
// const qury = insert(photos.map((s) => row(...Object.values(s))));

// var sql = "INSERT INTO mytable (name, address) VALUES ?";
// //Make an array of values:
// var values = [
//   ["John", "Highway 71"]
//   ["Peter", "Lowstreet 4"],
//   ["Amy", "Apple st 652"],
//   ["Hannah", "Mountain 21"],
//   ["Michael", "Valley 345"],
//   ["Sandy", "Ocean blvd 2"],
//   ["Betty", "Green Grass 1"],
//   ["Richard", "Sky st 331"],
//   ["Susan", "One way 98"],
//   ["Vicky", "Yellow Garden 2"],
//   ["Ben", "Park Lane 38"],
//   ["William", "Central st 954"],
//   ["Chuck", "Main Road 989"],
//   ["Viola", "Sideway 1633"],
// ];

// connection.query(qury, (error, results, fields) => {
//   if (error) throw error;
//   console.log("results");
// });
