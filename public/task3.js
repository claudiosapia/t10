//get div elements
const countAnswers = document.getElementById("countAnswers");
const correctAnswer = document.getElementById("correctAnswer");
//get div element to output message to user
let showAnswer = document.getElementById("showAnswer");
//get input elements
let numb1 = document.getElementById("numb1");
let numb2 = document.getElementById("numb2");
let userInput = document.getElementById("userInput");

//get buttons element
let checkAnswer = document.getElementById("checkAnswer");
let reset = document.getElementById("reset");
//init const min and max to use with random values so they can be displayed on 2 input fields numb1 and numb2
const min = 10;
const max = 30;
//generate 2 random numbers
let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
let num2 = Math.floor(Math.random() * (max - min + 1)) + min;
//assign random numbers to inputs
numb1.value = Number(num1);
numb2.value = Number(num2);
//sum numbers so we get correct result to improve logic
var sum = num1 + num2;
//init let answer from 0 to count correct answers
let answer = 0;
//add click event to btn
checkAnswer.addEventListener("click", function () {
  // Check if the user entered value matches the generated total
  if (userInput.value == sum) {
    //  add 1 to the correct answers count
    answer++;
    // provide user feedback if answer is correct
    showAnswer.innerHTML =
      "<h2>Well Done! You answered correctly " + answer + "\n" + "time/s</h2>";
  } else {
    // provide user feedback if answer is wrong
    showAnswer.innerHTML =
      "<h2> :(</h2> <h2>Oh No!  The Correct Answer is :</h2>" +
      "<h2 class='text-danger'>" +
      sum +
      "</h2>" +
      "<h2>Please Try Again!</h2>";
  }
  //if user answer correctly 8 times
  if (answer === 8) {
    // End the quiz and show user feedback
    correctAnswer.innerHTML =
      "<h2>Well done!<br>You have answered correctly to more than 7 questions! You have passed the test!</h2>";
    checkAnswer.disabled = true;
  }
  userInput.value = "";
  //regenerate 2 random numbers
  num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  //reassign random numbers to inputs
  numb1.value = num1;
  numb2.value = num2;
  sum = num1 + num2;
});

reset.addEventListener("click", function () {
  location.reload();
});
