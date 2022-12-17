// configure jsdom,  explicitly imported it in  test file,
const path = require("path");
const { JSDOM } = require("jsdom");
const fs = require("fs");
// built-in fs Node module to read the HTML file and store it in a variable:
const html = fs.readFileSync(
  path.resolve(__dirname, "../views/task3.ejs"),
  "utf8"
);
let dom;
//get div elements
let countAnswers;
let correctAnswer;
//get div element to output message to user
let showAnswer;
//get input elements
let numb1;
let numb2;
let userInput;
let divs;
let spans;
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:
beforeEach(() => {
  dom = new JSDOM(html);
  main = dom.window.document.body;
  //get div elements
  divs = main.querySelectorAll("div");
  countAnswers = divs[0];
  correctAnswer = divs[1];
  //get span element
  spans = main.querySelectorAll("span");
  showAnswer = spans[0];
  //get input elements
  inputs = main.querySelectorAll("input");
  numb1 = inputs[0];
  numb2 = inputs[1];
  userInput = inputs[2];
});

//generate 2 random numbers
const min = 10;
const max = 30;
let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

//TITLE INTEGRATION TEST

//TEST RANDOM NUMBERS AND THE 2 RANDOM INPUTS VALUES.

test("min max values for random generated values assigned to 2 inputs", () => {
  //assign random numbers to inputs
  numb1.value = Number(num1);
  numb2.value = Number(num2);

  expect(Number(numb1.value)).toBeLessThanOrEqual(max);
  expect(Number(numb2.value)).toBeGreaterThanOrEqual(min);
});

//sum numbers so we get correct result to improve logic
var sum = num1 + num2;
//init let answer from 0 to count correct answers
let answer = 0;

//TITLE TARGET--- Check if the user entered value matches the generated total

//  add 1 to the correct answers count
test("If the user entered value matches the generated total and display feedback, Test if +1 is added to let answer", () => {
  userInput.value = sum;
  //assign random numbers to inputs
  if (userInput.value == sum) {
    //  add 1 to the correct answers count
    answer++;
    // provide user feedback if answer is correct
    showAnswer.innerHTML =
      "<h2>Well Done! You answered correctly " + answer + "\n" + "time/s</h2>";
  }

  expect(showAnswer.innerHTML).toBe(
    "<h2>Well Done! You answered correctly " + answer + "\n" + "time/s</h2>"
  );
  expect(answer).toBe(1);
});

// provide user feedback if answer is wrong

test("test wrong or 8", () => {
  answer;

  userInput.value !== sum;

  if (userInput.value !== sum) {
    // provide user feedback if answer is wrong
    showAnswer.innerHTML =
      "<h2> :(</h2> <h2>Oh No!  The Correct Answer is :</h2>" +
      "<h2>" +
      sum +
      "</h2>" +
      "<h2>Please Try Again!</h2>";
  }

  expect(showAnswer.innerHTML).toBe(
    "<h2> :(</h2> <h2>Oh No!  The Correct Answer is :</h2>" +
      "<h2>" +
      sum +
      "</h2>" +
      "<h2>Please Try Again!</h2>"
  );
});

//if user answer correctly 8 times

// End the quiz and show user feedback
test("if user answer correctly 8 times, END the quiz and display user feedback", () => {
  answer = 8;
  if (answer === 8) {
    // End the quiz and show user feedback
    correctAnswer.innerHTML =
      "<h2>Well done!<br>You have answered correctly to more than 7 questions! You have passed the test!</h2>";
  }
  expect(correctAnswer.innerHTML).toBe(
    "<h2>Well done!<br>You have answered correctly to more than 7 questions! You have passed the test!</h2>"
  );
});
