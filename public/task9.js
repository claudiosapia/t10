//target h4 tags to display max and min value elements of array
let displayMax = document.getElementById("max");
let displayMin = document.getElementById("min");

//target button
const button = document.querySelector("#getInput");

//target h1 tag to display occurences
let showOccurences = document.getElementById("occurences");
//target h1 tag to display user input
let showInput = document.getElementById("showInput");

//1. Fills an array with 20 random integers between 1 and 10. -TASK
let array = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 10 + 1)
);

// target div and span tag so it is possible to display highlighted number of array which correspond to user input and occurence .
let highlightDiv = document.getElementById("highlightDiv");
let span = document.getElementById("highlightSpan");

//display random array of numbers
let randomNumbers = document.getElementById("randomNumbers");

//... converts array to distinct variables and send them to the function Math.max
let max = Math.max(...array);
let min = Math.min(...array);

//2. display min and max values   -TASK
displayMax.innerHTML = `the maximum value is: ${max}`;
displayMin.innerHTML = `the minimum value is: ${min}`;

//3. display array of numbers   -TASK
randomNumbers.innerHTML = ` <h1 class='display-4 text-primary'>The random numbers of the array are:</h1> <br><h1 class='display-4'> ${array} </h1>  <br>`;
// count occurences of array elements function
const countOccurence = function (arr, val) {
  //we pass arr and val which will be compared with elem if === we add 1 to accumulator to count occurences
  return arr.reduce((acc, elem) => {
    return val === elem ? acc + 1 : acc;
  }, 0); //we start from elem 0
};

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

//target button for on click event
button.addEventListener("click", function () {
  //4. get input value of user from form TASK -
  let input = Number(document.getElementById("input").value);
  // display input- user chosen number
  let linearS = linearSearch(array, input);
  //display user input value and index in array using linear search
  showInput.innerHTML = `<h1 class='display-4 text-primary'>your chosen number is: </h1><h1 class ='display-4 text-success'>${input}, index No. ${linearS} of the array</h1><br>`;
  // trigger countOcc function to find occurences and display them
  let occurences = countOccurence(array, input);
  showOccurences.innerHTML = `<h1 class='display-4 text-primary'>the total number of occurences in the array for your chosen number are </h1><br><h1 class ='display-4 text-success'> ${occurences} </h1>`;

  //loop through array elements
  for (let i = 0; i < array.length; i++) {
    //5. init let text to display array of numbers highlighting 1st occurence -TASK
    // join array, add css class to highlight 1st  element occurence
    let newArr = array
      .join("")
      .replace(input, "<span class='text-danger'>" + input + "</span>");
    //add css class to elem = to user input with bootstrap class to highlight 1st occurrence
    //output result targeting specific html div
    highlightDiv.innerHTML = `<h1 class='display-4 text-primary'> The first occurence of your chosen number is: </h1>
    <h1 class='display-3'> ${newArr}</h1> <br><br>`;
    button.classList.add("hide"); // hide button
  }
});
