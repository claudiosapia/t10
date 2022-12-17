//get div result
const result = document.getElementById("result");
//get inputs from page
let inputVal = document.getElementsByTagName("input");

//function that counts number of do not know answers chosen by user
const countDoNotKnow = function () {
  let doNotKnow = 0;
  for (i = 0; i < inputVal.length; i++) {
    // if radio input is checked
    if (inputVal[i].checked) {
      if (inputVal[i].value === "option4") {
        doNotKnow = doNotKnow + 1;
      }
    }
  }

  // return the value from the rate text field
  let rating = document.querySelector("#rating").value;
  // parse var to integer
  rating = Number(rating);
  // if user enters 11 add one to don't know count
  if (rating === 11) {
    doNotKnow = doNotKnow + 1;
  }

  let totDoNotKnow = Math.max(doNotKnow);

  //display result - how many do not know the user has selected
  return (result.innerHTML =
    "<h4" +
    "Thank you for completing this survey" +
    "</h4>" +
    "<p>" +
    "you have answered Do not Know " +
    totDoNotKnow +
    "\n" +
    "times" +
    "</p>");
};

// reset form and div text
function resetForm() {
  result.innerHTML = "Your feedback is displayed below";
}

//use a record structure to store details of the survey questions
const questions = document.getElementsByTagName("h3");

//init array to push our questions using for loop.
let questionsArray = [];
for (let i = 0; i < questions.length; i++) {
  const element = questions[i];
  questionsArray.push(element);
}
