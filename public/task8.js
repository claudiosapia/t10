const button = document.querySelector("#btnPwdCheck");
//1. Prompt the user to enter their password that can contain letters and numbers and be at least six characters long.

//init number of attempts max 3 attempts to submit pwd for users
let attempts = 3;

//charChecker is a p displaying message according to what user is typing using fonction below...
charChecker = document.getElementById("characterCheck");

//keydown function to check that format and length of pwd is correct
document.addEventListener("keydown", function (selected) {
  //init let input storing user input value
  let input = document.getElementById("input").value;
  //if pwd is not of right format and length
  if (!selected.key.match(/[A-Za-z0-9]/)) {
    charChecker.innerHTML = `you have selected a non-valid character`; //display message accordingly as user types
  } //enter is disabled to avoid page reload and loss of data
  if (selected.key.match("Enter")) {
    selected.preventDefault();
  } //if pwd is > than 7 chars
  if (input.length >= 7 || !selected.key.match(/[A-Za-z0-9]/)) {
    charChecker.innerHTML = `Please enter a password containing less than 7 characters and that includes only letters and numbers`;
    //display message accordingly as user types
  } else {
    //if pwd < than 7 chars
    charChecker.innerHTML = `Please type your password `;
  }
});

button.addEventListener("click", function () {
  //init local input let
  let input = document.getElementById("input").value;
  //init pwd
  let password = /^[A-Za-z]\w{6,99}/;
  let chosenPwd = "Scotland";
  //  2. If the password is correct, it should display a welcome message
  if (input.match(password) && input === chosenPwd) {
    alert("Correct! Welcome to your profile!");
    charChecker.innerHTML = " Welcome to your profile!";
    attempts = 3; //reset attempts to 3
    return true; //if form is submitted value will be true
  }
  //  else notify the user that their password was entered wrongly
  else if (!input.match(password) || input !== chosenPwd) {
    if (attempts > 1) {
      attempts--; // decrease attempts by 1
      alert(`Wrong Password! You have ${attempts} attempts left`);
      charChecker.innerHTML = `<h1>${attempts} attempts left.</h1><br> <h1 class="text-danger"> Wrong password!, make sure your password format and length are correct</h1><br><br> Hint:<br> Land of the Brave, Glens, Whiskey`; //display  error message and hint
      if (!charChecker.classList.contains("text-danger")) return false; //if form is submitted value will be false
    }
    // after three attempts and let  user receives a suitable message
    else {
      // if attempts < 0
      charChecker.innerHTML = `Too many attempts! Please try again later or contact our support team`;
      button.disabled = true; //disable button
      button.classList.add("hide"); //hide button in case disabled true fails in certain browsers
      return false; //returns false if attempts < 0
    }
  }
});
