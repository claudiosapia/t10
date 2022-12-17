function randomLetter(length) {
  let array = [];
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < length; i++) {
    array += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return array.toUpperCase(); //make sure letters are uppercases
}
//create list of letters using function, split letters will create array with split elements, then sorted
let lettersList = randomLetter(35);
let sortedList = lettersList.split("").sort();
//create div element
let div = document.createElement("div");

//1. Display random letters,
//2. Display random letters, split "," and sorted
//3. Display element in middle of sorted list

div.innerHTML = `<h2 class='text-primary'>Random letters unsorted: </h2><br>
<h1>${lettersList}</h1><br><h2 class='text-danger'> Random letters, sorted A-Z:</h2><br>
<h1>${sortedList}</h1> <br>
<h2 class='text-success'>Display Element in middle of sorted list: </h2><br>
<h1>${sortedList[Math.round((sortedList.length - 1) / 2)]}</h1>`; //return element in mid of sortedList
document.body.appendChild(div);
