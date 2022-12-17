// Implement and test a program to assign grades to exam marks for a class of 15 students, using the following criteria:

// The program requires the highest possible score for an exam, each student’s name (first name and surname) and each student’s mark.

"use strict";
//created array of 15 students and exam score
const students = [
  ["Jarod", "Bird"],
  ["Tymon", "Jeffery"],
  ["Hazel", "Wainwright,"],
  ["Ethel", "Hickman"],
  ["Riyad", "Munro"],
  ["Giovanni", "Armstrong"],
  ["Elsie", "Smith"],
  ["Declan", "Lucero"],
  ["Shaquille", "Hodgson"],
  ["Hareem", "Bain"],
  ["Sebastian", "Papale"],
  ["Cristian", "Larson"],
  ["Nick", "Muller"],
  ["Elise", "Marks"],
  ["Philippe", "Ludacre"],
];

// created object or "record" that will take count of number of marks
const marks = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  fail: 0,
};
//init let grade
let grade;
//max score for exam
let maxScore = 200;

//calc percentage of marks dividing  n. of correct answers by 200 wich is the maximum possible score multipling result by 100.
function calcPercentageMark(answers) {
  return (answers / maxScore) * 100 + 1;
}

// randomMarks () loops through students, generates random marks, convert in percentage using calcPercentageMark()
function randomMarks(min) {
  for (let i = 0; i < students.length; i++) {
    students[i][2] = calcPercentageMark(Math.random() * (maxScore - 60) + 60);
    students[i][2] = Math.floor(students[i][2]);
  }
}
randomMarks(60);

//loop through students to check if mark is >= 70%
for (let i = 0; i < students.length; i++) {
  //sort students by percentage from high to low
  students.sort(function (a, b) {
    return b[2] - a[2];
  });
  //check if percentage of student marks is >=70
  if (students[i][2] >= 70) {
    marks.a++;
    grade = "A";
    //create new div
    let div = document.createElement("div");
    div.className = "container text-center";
    //print students initials,percentage mark, grade
    div.innerHTML = `<strong><h1 class= display-4> ${students[i][0][0]}.${students[i][1][0]}.&nbsp;&nbsp;&nbsp;${students[i][2]}%&nbsp;&nbsp;&nbsp;${grade}</strong></h1>`;
    // append created div to body
    document.body.appendChild(div);
  } else if (students[i][2] >= 60) {
    marks.b++;
    grade = "B";
    //create new div
    let div = document.createElement("div");
    div.className = "container text-center";
    //print students initials,percentage mark, grade
    div.innerHTML = `<strong><h1 class= display-4> ${students[i][0][0]}.${students[i][1][0]}.&nbsp;&nbsp;&nbsp;${students[i][2]}%&nbsp;&nbsp;&nbsp;${grade}</strong></h1>`;
    // append created div to body
    document.body.appendChild(div);
  } else if (students[i][2] >= 50) {
    marks.c++;
    grade = "C";
    //create new div
    let div = document.createElement("div");
    div.className = "container text-center";
    //print students initials,percentage mark, grade
    div.innerHTML = `<strong><h1 class= display-4> ${students[i][0][0]}.${students[i][1][0]}.&nbsp;&nbsp;&nbsp;${students[i][2]}%&nbsp;&nbsp;&nbsp;${grade}</strong></h1>`;
    // append created div to body
    document.body.appendChild(div);
  } else if (students[i][2] >= 45) {
    marks.d++;
    grade = "D";
    let div = document.createElement("div");
    div.className = "container text-center";
    //print students initials,percentage mark, grade
    div.innerHTML = `<strong><h1 class= display-4> ${students[i][0][0]}.${students[i][1][0]}.&nbsp;&nbsp;&nbsp;${students[i][2]}%&nbsp;&nbsp;&nbsp;${grade}</strong></h1>`;
    // append created div to body
    document.body.appendChild(div);
  } else if (students[i][2] < 45) {
    marks.fail++;
    grade = "Fail";
    let div = document.createElement("div");
    div.className = "container text-center";
    //print students initials,percentage mark, grade
    div.innerHTML = `<strong><h1 class= display-4> ${students[i][0][0]}.${students[i][1][0]}.&nbsp;&nbsp;&nbsp;${students[i][2]}%&nbsp;&nbsp;&nbsp;${grade}</strong></h1> `;
    // append created div to body
    document.body.appendChild(div);
  }
}
//display max score, tot number of passes and fails

let div = document.createElement("div");
div.className = "container text-center";
//print students initials,percentage mark, grade
div.innerHTML = `<br><br><br> <h1 class='display-4'> Total number of A passes ${marks.a}
    </h1><h1 class='display-4'> Total number of B passes 
    ${marks.b}
    </h1><h1 class='display-4'> Total number of C passes 
    ${marks.c}
    </h1><h1 class='display-4'> Total number of D passes 
   ${marks.d} 
    </h1><h1 class='display-4'> Total number of Fails 
    ${marks.fail} 
    </h1 class='display-4'></div><br><br>`;

// append created div to body
document.body.appendChild(div);

module.exports = { randomMarks, students, calcPercentageMark, marks };
