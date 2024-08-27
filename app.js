// GET computer choice

function getComputerChoice() {
    // SET array of options
    const compOptions = ["rock", "paper", "scissors"];
    // CALC Random number, .floor to make whole number, .random to pull random number, *3 for to set MAX, + 1 to handle .floor rounding down 
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // Make selection and set computerChoice based on random num and set it's string value
    if (computerChoice == 1) {
        computerChoice = compOptions[0];
    } else if (computerChoice == 2) {
        computerChoice = compOptions[1];
    } else if (computerChoice == 3) {
        computerChoice = compOptions[2];
    }
    return computerChoice;
}


// GET humanChoice using prompt method and store that value
function getHumanChoice() {
    let humanChoice = prompt("What is your choice? Rock, Paper, or Scissors");
    return humanChoice;
}


// BEGIN the game
function playGame() {
    // SET the initial scores
    let humanScore = 0;
    let computerScore = 0;

    // FOR 5 rounds, iterate playRound() function
    for (i = 0; i < 5; i++) {
        
        // GET the selections for this round
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // CALL playRound() to get this round
        playRound(humanSelection, computerSelection);
        
        //  BEGIN playround() - 1 round
        function playRound(humanChoice, computerChoice) {
            console.log(humanChoice);
            console.log(computerChoice);
            // IF humanChoice beats computerChoice print win, else lose. Increment scores appropriately.
            if (humanChoice == computerChoice) {
                console.log("Tie! Go again.")
            } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
                humanScore++;
                console.log("Rock beats Scissors! You win!");
            } else if (humanChoice == 'rock' && computerChoice == 'paper') {
                computerScore++;
                console.log("Paper beats Rock! You lose!");
            } else if (humanChoice == 'paper' && computerChoice == 'rock') {
                humanScore++;
                console.log("Paper beats Rock! You win!");
            } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
                computerScore++;
                console.log('Scissors beats Paper! You lose!');        
            } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
                humanScore++;
                console.log('Scissors beats Paper! You win!');
            } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
                computerScore++;
                console.log('Rock beats Scissors! You lose!');
            } else {
                console.log('Something went wrong! Try again.')
            }
        }
    }
    // SHOW the result after comparing the scores
    if (humanScore > computerScore) {
        console.log('You win! With a score of: ' + humanScore + ' to ' + computerScore);
    } else if (humanScore < computerScore) {
        console.log('Sorry, you lose with a score of: ' + humanScore + ' to ' + computerScore + ' Try Again.');
    }
}

playGame();
