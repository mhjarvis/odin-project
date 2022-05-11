// Variables used to keep score

let playerScore = 0;
let computerScore = 0;

// Function picks computers choice (randomly)
function computerPlay () {
    
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

// Function plays one round of the game
function playRound(playerSelection, computerSelection) {

    if((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        playerScore += 1;
        return "Player Wins! " + playerSelection + " beats " + computerSelection + ".";
    }
    if((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
        computerScore += 1;
        return "Computer Wins! " + computerSelection + " beats " + playerSelection + ".";
    }
    if(playerSelection == computerSelection) {
        return "Tie!";
    }
}

// Function checks for winner (first to 5)
function checkForWinner() {
    
    if(playerScore == 5) {
        window.alert("YOU WIN!");
        computerScore = 0;
        playerScore = 0;
        updateResponse("Make your choice!" , 0, 0);
    };
    if(computerScore == 5) {
        window.alert("COMPUTER WINS");
        computerScore = 0;
        playerScore = 0;
        updateResponse("Make your choice!", 0, 0);
    };


}

// Function updates webpage output
function updateResponse(info, playerScore, computerScore) {             //function outputs results to #response div

    const response = document.getElementById("response");
    const playerScr = document.getElementById("player-score");
    const computerScr = document.getElementById("computer-score");

    response.textContent = info;
    playerScr.textContent = playerScore;
    computerScr.textContent = computerScore;

    checkForWinner();
}

/* Query Selectors and Event Listeners */

const rock_btn = document.querySelector('#rock-btn');
const paper_btn = document.querySelector('#paper-btn');
const scissors_btn = document.querySelector('#scissors-btn');

rock_btn.addEventListener('click', () => {
    updateResponse(playRound("ROCK", computerPlay()), playerScore, computerScore);
});

paper_btn.addEventListener('click', () => {
    updateResponse(playRound("PAPER", computerPlay()), playerScore, computerScore);
});

scissors_btn.addEventListener('click', () => {
    updateResponse(playRound("SCISSORS", computerPlay()), playerScore, computerScore);
});

/* Outdated function used for testing */
function playerChoice() {
    
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