function playerChoice() {                           //welcome function/prompt to start game
    
    let answer = false;

    while(answer == false) {
        let playerChoice = prompt("Pick one - Rock, Paper, or Scissors: ");
        playerChoice = playerChoice.toUpperCase();

        if(playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS") {
            answer = true;
            return playerChoice;
        }
    }
}


function computerPlay () {              //function randomly picks and returns computers value
    
    let randomNum = Math.floor(Math.random() * 3 + 1);
    
    if(randomNum == 1) {
        return "ROCK";
    }
    if(randomNum == 2) {
        return "PAPER";
    }
    if(randomNum == 3) {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {        //function plays one round of tic-tac-toe

    if((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        return "Player Wins! " + playerSelection + " beats " + computerSelection + ".";
    }
    if((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
        return "Computer Wins! " + computerSelection + " beats " + playerSelection + ".";
    }
    if(playerSelection == computerSelection) {
        return "Tie!";
    }
}

(function () {

    console.log("Welcome to Tic-Tac-Toe");
    console.log(".......................");

    for(let i = 0; i < 5; i++) {
        console.log(playRound(playerChoice(), computerPlay()));
    }
})();