const task5 = require("../task5");
//init max score to use in unit test
const maxScore = 200;
const students = task5.students;
// TITLE UNIT TEST

//calc percentage of marks dividing  n. of correct answers by 200 wich is the maximum possible score multipling result by 100.
test("calcPercentageMark function", () => {
  const addMock = jest.spyOn(task5, "calcPercentageMark");
  // result will be  calcPercentageMarc(Math.floor(Math.random() * (maxScore - 60) + 60))
  const result = addMock(Math.floor(Math.random() * (maxScore - 60) + 60));
  expect(typeof result).toBe("number");
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(100);
});

//TITLE INTEGRATION TEST

//test randomMarks () that loops through students, generates random marks, convert in percentage using calcPercentageMark()

test("randomMarks function", () => {
  //spyOn method on task5, funct randomLetter
  const addMock = jest.spyOn(task5, "randomMarks");
  // result will be randomMarks(min) which is 60
  const result = addMock(60);
  //expect function to have been called
  expect(addMock).toHaveBeenCalled();
  //loop through function and check that...
  for (let i = 0; i < students.length; i++) {
    expect(typeof students[i][2]).toBe("number");
  }
});

test("marks", () => {
  const marks = task5.marks;

  //loop through object and check that...
  for (const prop in marks) {
    expect(typeof marks[prop]).toBe("number");
    expect(marks[prop]).toBeLessThanOrEqual(10);
    expect(marks[prop]).toBeGreaterThanOrEqual(0);
  }
});

//TITLE SYSTEM TEST

describe("students' marks over 70", () => {
  it("should return sorted marks", () => {
    //loop through students to check if mark is >= 70%
    for (let i = 0; i < students.length; i++) {
      students.sort(function (a, b) {
        return b[2] - a[2];
      });
      //sort students by percentage from high to low
      let sortedStudents = students.sort(function (a, b) {
        return b[2] - a[2];
      });

      expect(sortedStudents[0][2]).toBeGreaterThanOrEqual(sortedStudents[1][2]);

      expect(sortedStudents[1][2]).toBeGreaterThanOrEqual(sortedStudents[2][2]);
      expect(sortedStudents[2][2]).toBeGreaterThanOrEqual(sortedStudents[3][2]);
      expect(sortedStudents[3][2]).toBeGreaterThanOrEqual(sortedStudents[4][2]);
      expect(sortedStudents[4][2]).toBeGreaterThanOrEqual(sortedStudents[5][2]);
    }
  });
});
//Functional requirements:

// configure jsdom,  explicitly imported it in  test file,

const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task4.ejs"),
  "utf8"
);

let dom;
let main;
let div;
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:

beforeEach(() => {
  dom = new JSDOM(html);
  //get main html tag
  main = dom.window.document.body;
  //get h1tags
  div = document.createElement("div");
  // original sentence h1 tag
});

test("original sentence", () => {
  // display original sentence
  div.className = "container text-center";

  expect(div.className).toBe("container text-center");
});
