// outputs a javascript object from the parsed json
fetch("public/colors1.json")
  .then(response => response.json())
  .then(data => {
    //import colors from json file
    let colors = [
      data.red,
      data.blue,
      data.green,
      data.yellow,
      data.orange,
      data.pink,
    ];
    //init play = false to change css bg color when playing
    play = false;

    //init wallet so user can cash out or play when game balance < 0; --NOT REQUIRED TASK EXTRA
    let wallet = 0;
    //let maxRounds= max rounds per game
    let maxRounds = 6;
    //init user winnings
    let wins = 0;
    //init let round to count round number and finish game when > max round
    let round = 0;
    //target div to display winning and round number
    let result = document.getElementById("result");
    //target buttons start, cashout(extra-not required) and tryAgain
    let button = document.getElementById("start");
    let tryAgain = document.getElementById("tryAgain");
    let cashOut = document.getElementById("cashOut");

    //init let play to establish if game on play or not to create change css style to page

    //hide try again button until game ends
    tryAgain.classList.add("hide");
    //START GAME
    //add click event to: start
    button.addEventListener("click", function () {
      play = true;
      //arrayColors will store all of the random colors for each click so we can compare and create logic
      let arrayOfColors = [];
      //decrease maxrounds , at 0 game ends
      maxRounds--;
      //increase round number at every click to check round number
      round++;
      //for each element:
      document.querySelectorAll(".square").forEach(element => {
        //give random bg colors to squares
        // generate random color at each click for each element and assign to elements
        let random = Math.floor(Math.random() * colors.length);
        let randomColor = colors[random];
        //display color name as text on square
        element.textContent = randomColor;
        //display each random bg color on each square
        element.style.backgroundColor = randomColor;
        // push colors to array to create conditions and game logic
        arrayOfColors.push(randomColor);
      });
      if (play === true) {
        document.querySelector(".bg").classList.remove("bg-white");
        document.querySelector(".bg").classList.add("bgPlay");
      } else {
        document.querySelector(".bg").classList.remove("bgPlay");
        document.querySelector(".bg").classList.add("bg-white");
      }
      // if current game balance is < 0
      if (wins < 0) {
        wallet -= 0.5; //withdraw 0.5£ from wallet
        wins += 50; // add 0.5£ to game balance
        let formatScore = parseFloat(wins) / 100; //format let containing winnings
        score = formatScore.toFixed(2); // round up let so we get correct value
      }
      // if wallet <=0 and is not a number display prompt to user so he can topUp
      if (wallet <= 0 || isNaN(wallet)) {
        let askMoney = parseFloat(
          prompt("Please enter a deposit of at least £1 to play", 5)
        );

        //return prompt to user
        function getDeposit() {
          return askMoney;
        }
        //wallet will be = to prompt value or if input ! a numb user will get alert message
        function topUpMoney() {
          wallet = Number(getDeposit());
          if (isNaN(askMoney)) {
            topUpMoney();
          } else {
            alert("Thank You for your deposit of £ " + getDeposit());
          }
        }

        topUpMoney();
      }

      // check if all of the colors match
      if (maxRounds >= 0) {
        if (
          arrayOfColors[0] === arrayOfColors[1] &&
          arrayOfColors[0] === arrayOfColors[2] &&
          arrayOfColors[1] === arrayOfColors[2]
        ) {
          //player win £1
          wins += 100;
          let formatScore = parseFloat(wins) / 100;
          score = formatScore.toFixed(2);
          result.innerHTML = `<p class='lead text-primary'>Your Wallet: <span class=text-danger'> ${wallet}</span></p><br>This is round:<p class='lead text-danger'> ${round}</p>
           Congratulations! The 3 Colors Match! You Won <span class='lead text-danger'>£1 </span>  your game balance is:
           <span class='lead text-danger'> £ ${score}</span>You have:<span class='lead text-danger'> ${maxRounds}  rounds left</span>`;
          // if only 2 colors match
        } else if (
          arrayOfColors[0] === arrayOfColors[1] ||
          arrayOfColors[0] === arrayOfColors[2] ||
          arrayOfColors[1] === arrayOfColors[2]
        ) {
          //increase win by 0.50£
          wins += 50;
          //format winning to display correct value
          let formatScore = parseFloat(wins) / 100.0;
          score = formatScore.toFixed(2);
          //output result keeping track of wallet, winnings, rounds and rounds left
          result.innerHTML = `<p class='lead text-primary'>Your Wallet:<span class='lead text-danger'> ${wallet}</span></p><br>This is round:<p class='lead text-danger'> ${round}</p>
           2 colors match! You Won <span class='lead text-danger'>£0.50 </span> your game balance is:
           <span class='lead text-danger'> £ ${score}</span> You have:<span class='lead text-danger'> ${maxRounds}  rounds left</span>`;
        } else if (
          //if any any of the 3 colours are not === to each other
          arrayOfColors[0] !== arrayOfColors[1] &&
          arrayOfColors[0] !== arrayOfColors[2] &&
          arrayOfColors[1] !== arrayOfColors[2]
        ) {
          wins -= 50; //decrease winnings by 0.50 displaying correct format
          let formatScore = parseFloat(wins) / 100;
          score = formatScore.toFixed(2);
          result.innerHTML = `<p class='lead text-primary'>Your Wallet: <span class='lead text-danger'>  ${wallet} </span> </p><br>This is round:<p class='lead text-danger'> ${round}</p>
           Sorry! You have lost <span class='lead text-danger'> 0.50£! </span> Your game balance is:
           <span class='lead text-danger'> £ ${score}</span> You have:<span class='lead text-danger'> ${maxRounds}  rounds left</span>`;
        }
      }
      // if round lefts ar less or = 0 display final results and messages, hide button start and display button try again
      if (maxRounds <= 0) {
        round = 6;
        maxRounds = 0;
        play = false;
        //chec if play === false to change bg colour
        if (play === false) {
          document.querySelector(".bg").classList.remove("bg-Play");
          document.querySelector(".bg").classList.add("bg-white");
        }
        let formatScore = parseFloat(wins) / 100;
        score = formatScore.toFixed(2);
        result.innerHTML = `<br><br><p class='lead text-primary'> Your Wallet: <span class='lead text-danger'>  ${wallet}</span></p><br><p class='lead text-danger'>This is round: ${round}</p>
         Your total game balance is <span class='lead text-danger'>£${score}</span> You have: <p class='lead text-danger'>${maxRounds} rounds left</p> <p class='lead text-success'>You will carry your current game balance to the next game if you don't wish to Cash Out now.</p>
         <br>`;
        button.classList.add("hide");
        tryAgain.classList.remove("hide");
      }
    });
    //trigger button tryagain to reset game values so user can play again
    tryAgain.addEventListener("click", function () {
      //play = true to change bg colour
      play = true;
      round = 0;
      maxRounds = 6;
      //hide tryagain but and show start button
      button.classList.remove("hide");
      tryAgain.classList.add("hide");
      //target all squares and reset colors and innertxt
      document.querySelectorAll(".square").forEach(element => {
        element.style.backgroundColor = "white";
        element.textContent = "";
      });
      // reset arrayOfColors and display message to user
      arrayOfColors = [];
      result.innerHTML = `<br><br><p class='lead text-success'>You will carry your current game balance to the next game if you don't wish to Cash Out now.</p>
       You have <p class='lead text-danger'>£ ${wallet} in your Wallet:  </p><br>`;
    });

    //trigger cashout button
    cashOut.addEventListener("click", function () {
      let formatScore = parseFloat(wins) / 100;
      score = formatScore.toFixed(2);
      //add winnings to wallet
      wallet += Number(score); //add current game balance to wallet
      //if winnings > 0 display message to user else warn user that wallet was updated due to negative value
      if (score > 0) {
        result.innerHTML = `You have withdrawn <span class='lead text-danger'>  £ ${score}</span> from your total game balance , You have: <p class='lead text-danger'>£ ${wallet} in your wallet</p>`;
        wins = 0;
      } else {
        result.innerHTML = `Your game balance is:<span class='lead text-danger'> ${score} </span> Your wallet has been <span class='lead text-danger'> Updated </span> You have: <p class='lead text-danger'>£ ${wallet} in your wallet</p>`;
      }
    });
  });
