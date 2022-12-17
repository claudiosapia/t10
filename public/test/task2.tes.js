// configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task2.ejs"),
  "utf8"
);
let dom;
let input;
let doNotKnowValues;
let inputTest;
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:
beforeEach(() => {
  dom = new JSDOM(html);
  form = dom.window.document.body;
  input = form.querySelectorAll("input");
  doNotKnowValues = form.querySelectorAll('input[value="option4"]');
  questions = form.getElementsByTagName("h3");
  //same as variable input- but used for integration testing of function
  inputTest = form.getElementsByTagName("input");
});

test("check there are 48 input elems and 14 do not know options", () => {
  expect(input.length).toBe(48);
  expect(doNotKnowValues.length).toBe(14);
});

test("check number of questions is 15", () => {
  expect(questions.length).toBe(15);
});

// TITLE INTEGRATION TEST

//test FUNCTIONS:

//copy of countDoNotKnow function which increase testDoNotKnow var value, looping through input array elems , if meet following conditions: input is checked and value is optionTest:

const testCountDoNotKnow = function (arrTest) {
  let testDoNotKnow = 0;
  for (let i = 0; i < arrTest; i++) {
    //simulate input to meet conditions
    inputTest[i].checked = true;
    inputTest[i].value = "optionTest";
    // if radio input is checked and value is..
    if (inputTest[i].checked == true) {
      if (inputTest[i].value == "optionTest") {
        testDoNotKnow = testDoNotKnow + 1;
      }
    }
  }
  return Math.max(testDoNotKnow);
};
// this tests that inputs can meet conditions and that function countDoNotKnow would work.
test("function countDoNotKnow after simulating ALL inputs to meet conditions: input.checked = true and value is = optionTest ...what we need", () => {
  //expect
  expect(testCountDoNotKnow(inputTest.length)).toBe(48);
});
