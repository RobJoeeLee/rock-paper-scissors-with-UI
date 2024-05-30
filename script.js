function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice(){
    let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        userInput = prompt ("Invalid choice! Please enter either rock, paper, or scissors:").toLowerCase();
    }
    return userInput;
}

function playGame(){

    humanScore = 0;
    computeScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computeScore++;
        }
    }
    
    for(let i = 0; i < 5; i++){

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("Human Score " + humanScore);
    console.log("Computer Score " + computeScore);
}

playGame();