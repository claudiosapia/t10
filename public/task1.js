"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //get groupA html table
  const groupA = document.getElementById("grpA");
  //get fastestRunner span
  const fastestRunner = document.getElementById("fastestRunner");
  //get span time
  const time = document.getElementById("time");
  //get table runnersProgressing
  const runnersProgressing = document.getElementById("runners-progressing");

  //init breakpoint const to check runners progressing to next stage
  const breakpoint = 50;

  //init array of runners
  const runners = [
    ["Rita", "Johnson"],
    ["Janet", "Wilson"],
    ["Jane", "Fergus"],
    ["Mary", "Campbell"],
    ["Christine", "Law"],
    ["Pamela", "Crawford"],
    ["Joy", "Victory"],
    ["Victoria", "Phillip"],
  ];
  // generating random values of runners lap times
  const max = 80;
  const min = 35;
  for (let i = 0; i < runners.length; i++) {
    runners[i][3] = Math.random() * (max - min) + min;
    runners[i][3] = Math.floor(runners[i][3]);
    runners[i][2] = Math.random() * (max - min) + min;
    runners[i][2] = Math.floor(runners[i][2]);
  }

  //add groupA runners in table as content looping through arr
  for (let i = 0; i < runners.length; i++) {
    // create a new row
    const newRow = groupA.insertRow();
    for (let j = 0; j < runners[i].length; j++) {
      // create a new cell
      const cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = runners[i][j];
    }
  }

  // filtered runners using .filter targeting time of lap 1 and 2
  const filteredRunners = runners.filter(function (runner) {
    return runner[2] < breakpoint || runner[3] < breakpoint;
  });

  //display fastest runner and lap time
  for (let i = 0; i < filteredRunners.length; i++) {
    fastestRunner.innerHTML =
      filteredRunners[0][0] + " " + filteredRunners[0][1];
    //display filtered runners
    time.innerHTML = filteredRunners[0][2];

    // create a new row
    const newRow = runnersProgressing.insertRow(runnersProgressing.length);
    for (let j = 0; j < filteredRunners[i].length; j++) {
      // create a new cell
      const cell = newRow.insertCell(j);

      // add value to the cell
      cell.innerHTML = filteredRunners[i][j];
    }
  }
});

var elements = {
  breakpoint: 50,
  runners: [
    ["Rita", "Johnson"],
    ["Janet", "Wilson"],
    ["Jane", "Fergus"],
    ["Mary", "Campbell"],
    ["Christine", "Law"],
    ["Pamela", "Crawford"],
    ["Joy", "Victory"],
    ["Victoria", "Phillip"],
  ],

  formula: Math.random() * (80 - 35) + 35,

  add: (num1, num2) => num1 + num2,

  //get groupA html table
  groupA: document.getElementById("grpA"),
  //get fastestRunner span
  fastestRunner: document.getElementById("fastestRunner"),
  //get span time
  time: document.getElementById("time"),
  //get table runnersProgressing
  runnersProgressing: document.getElementById("runners-progressing"),
};
//export elements for jest testing
module.exports = elements;
