console.log("hello wolrd");

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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                console.log('You win! Rock beats scissors');
                humanScore += 1;
            } else if (computerChoice === 'paper'){
                console.log('You lose! Paper covers rock');
                computerScore += 1;
            } else {
                console.log("It's a draw! Both choice rock");
            }
        } else if (humanChoice === 'scissors'){
            if (computerChoice === 'scissors') {
                console.log("It's a draw! Both chose scissors");
            } else if (computerChoice === 'paper'){
                console.log('You win! Scissors cut paper');
                humanScore += 1;
            } else {
                console.log("You lose! Rock beats scissors");
                computerScore += 1;
            }
        } else { // human chose paper
            if (computerChoice === 'scissors') {
                console.log('You lose! Scissors beats paper');
                computerScore += 1
            } else if (computerChoice === 'paper'){
                console.log("It's a draw! Both chose paper");
            } else {
                console.log("You win! Paper covers rock");
                humanScore += 1;
            }
        }
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore){
        console.log(`Player wins! ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! ${humanScore} to ${computerScore}`);
    } else {
        console.log(`You tie! ${humanScore} to ${computerScore}`);
    }
}