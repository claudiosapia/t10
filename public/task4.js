"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //get html h1 tags
  let dispOrSentence = document.getElementById("originalSentence");
  let changedSentence = document.getElementById("changedSentence");

  // original sentence
  const orSentence = "Right You Are! It Is So! If You Think So!";
  // display original sentence
  dispOrSentence.innerHTML = orSentence;

  //init new const storing string without spaces
  const noSpacesString = orSentence.replace(/\s/g, "");

  //generate random letters passing param of length which will be the length of our noSpacesString
  const randomLetter = function (array, length) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      //returns the character at the specified index in string.
      array += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return array;
  };
  //output changed sentence
  const length = noSpacesString.length;
  let changedString = randomLetter(length);

  changedSentence.innerHTML = changedString;

  let addedSpace = changedString.split("").join(" ");
  //add spaces to changed string button
  const button = document.getElementById("addSpaces");
  button.addEventListener("click", function () {
    changedSentence.innerHTML = addedSpace;
  });

  //remove spaces to changed string button
  const removeS = document.getElementById("removeS");
  removeS.addEventListener("click", function () {
    changedSentence.innerHTML = changedString;
  });
});
// function sum(x, y) {
//   return x + y;
// }

//EXPORT FOR TESTING -- had to copy code below as I used DOMContentLoaded due to JEST giving errors due to dom content not loaded

// original sentence
const orSentence = "Right You Are! It Is So! If You Think So!";
const noSpacesString = orSentence.replace(/\s/g, "");
//output changed sentence
const len = noSpacesString.length;

const randomLetter = function (array, length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    //returns the character at the specified index in string.
    array += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return array;
};

module.exports = { randomLetter, noSpacesString, len };
