// //TITLE UNIT TEST

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
let divs;
let h1Tags;
let dispOrSentence;
let changedSentence;
let orSentence;
//Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

//in  beforeEach method, I used jsdom to render my HTML so that I could test against it:
beforeEach(() => {
  dom = new JSDOM(html);
  //get main html tag
  main = dom.window.document.body;
  //get h1tags
  h1Tags = main.querySelectorAll("h1");
  // original sentence h1 tag
  dispOrSentence = h1Tags[3];
  orSentence = "Right You Are! It Is So! If You Think So!";
});

test("original sentence", () => {
  // display original sentence
  dispOrSentence.innerHTML = orSentence;

  expect(dispOrSentence.innerHTML).toBe(orSentence);
});

// TITLE INTEGRATION TEST
// TEST FUNCTION RandomLetter that generates random letters passing param of array and length which will be the length of our noSpacesString

const task4 = require("../task4");
//init empty array to use as arg
var arr = [];
//import length
const length = task4.len;
//spyOn method on task4, funct randomLetter
const addMock = jest.spyOn(task4, "randomLetter");
// result will be randomLetter(arr, length)
const result = addMock(arr, length);

describe("Integration Test", () => {
  it("should return 32 characters", () => {
    expect(result.length).toBe(32);
  });
  it("should return a string character between A-Z", () => {
    //check if value is a String
    expect(typeof result).toBe("string");
    expect(result).toMatch(/[a-z]/i);
  });

  it("should return a changed string", () => {
    //init new const storing string without spaces
    const noSpacesString = orSentence.replace(/\s/g, "");

    //output changed sentence
    let changedString = result;

    let addedSpace = changedString.split("").join(" ");

    expect(addedSpace.length).toBe(63);
    expect(typeof addedSpace).toBe("string");
  });
});
