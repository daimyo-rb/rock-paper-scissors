function getComputerChoice() {
    // randomly return either 'rock', 'paper', or 'scissors'
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let response = prompt('rock, paper, scissors?');
    if (response.toLowerCase() === 'rock'){
        return 'rock';
    } else if (response.toLowerCase() == 'paper') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let message;
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            message = 'You win! Rock beats scissors';
            humanScore += 1;
        } else if (computerChoice === 'paper'){
            message = 'You lose! Paper covers rock';
            computerScore += 1;
        } else {
            message = "It's a draw! Both chose rock";
        }
    } else if (humanChoice === 'scissors'){
        if (computerChoice === 'scissors') {
            message = "It's a draw! Both chose scissors";
        } else if (computerChoice === 'paper'){
            message = 'You win! Scissors cut paper';
            humanScore += 1;
        } else {
            message = "You lose! Rock beats scissors";
            computerScore += 1;
        }
    } else { // human chose paper
        if (computerChoice === 'scissors') {
            message = 'You lose! Scissors beats paper';
            computerScore += 1
        } else if (computerChoice === 'paper'){
            message = "It's a draw! Both chose paper";
        } else {
            message = "You win! Paper covers rock";
            humanScore += 1;
        }
    }
    
    const outcome = document.querySelector('#outcome');
    outcome.innerText = message;
    const resultsElem = document.querySelector('#results');
    let resultsText = ''
    if (humanScore === 5){
        resultsText = `YOU WIN! ${humanScore} to ${computerScore}`;
    } else if (humanScore === 5) {
        resultsText = `YOU LOSE! ${humanScore} to ${computerScore}`;
    } else {
        resultsText = `You: ${humanScore} Computer: ${computerScore}`;
    }
    resultsElem.innerText = resultsText;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice()); 
});
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});