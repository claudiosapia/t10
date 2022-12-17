const express = require("express");
const app = express();

const ejs = require("ejs");

app.use("/public", express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.set("views", __dirname + "/public/views");

app.get("/", (req, res) => {
  res.render("index");
  console.log("index");
});

app.get("/task1", function (req, res) {
  res.render("task1");
});

app.get("/task2", function (req, res) {
  res.render("task2");
});

app.get("/task3", function (req, res) {
  res.render("task3");
});

app.get("/task4", function (req, res) {
  res.render("task4");
});

app.get("/task5", function (req, res) {
  res.render("task5");
});

app.get("/task6", function (req, res) {
  res.render("task6");
});

app.get("/task7", function (req, res) {
  res.render("task7");
});

app.get("/task8", function (req, res) {
  res.render("task8");
});

app.get("/task9", function (req, res) {
  res.render("task9");
});

//require fs to include the File System module
const fs = require("fs");
//init object color to write on file colors-2.json for our task 10
let colors = {
  red: "red",
  yellow: "yellow",
  orange: "orange",
  green: "green",
  blue: "blue",
  pink: "pink",
};
//function that creates file, write colors json elems on it and close file
function saveToFile(data, outFile) {
  var writeFile;
  try {
    //test a block of code for errors.
    writeFile = fs.openSync(outFile, "w");
    fs.writeSync(writeFile, data);
    fs.close(writeFile);
    callback(null, outFile);
  } catch (err) {
    // handle the error.
    console.log(
      "\n[" + "] Error: Unable to save " + outFile + "\n" + err + "\n"
    );
  }
}
//stringify data convert data to JSON string
let data = JSON.stringify(colors);

app.get("/task10", function (req, res) {
  //invoke function to handle file colors1.json
  saveToFile(data, "colors1.json");
  //write file that we will read via our task 10.js
  res.render("task10");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started on port 3000");
});
