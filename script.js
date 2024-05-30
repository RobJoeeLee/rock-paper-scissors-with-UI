const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultMessage = document.getElementById("result-message");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
       resultMessage.textContent = "It's a tie!"
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
       resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        announceWinner();
    }
}

function announceWinner(){
    if (humanScore === 5) {
        resultMessage.textContent = "Congratulations! You won the game!";
    } else if(computerScore === 5){
        resultMessage.textContent = "Sorry, the computer won the game!";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function addEventListeners(){
    rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

addEventListeners();