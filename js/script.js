function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    
    if (playerSelection === computerSelection){ 
        console.log("Nobody's win");
        return 0;
    }
    if ((playerSelection === 'Paper' && computerSelection === 'Scissors') ||
       (playerSelection === 'Rock' && computerSelection === 'Paper') ||
       (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        return -1;
    }
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return 1;
}

function game(roundNum) {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < roundNum; i++) {
        let playerSelection = prompt("Input Rock or Paper or Scissors");
        let currentRound = playRound(playerSelection, getComputerChoice());
        if (currentRound === 1) playerScore++;
        if (currentRound === -1) computerScore++;
    }
    if (playerScore > computerScore) return "You win! Your score: " + playerScore + ", Computer score: " + computerScore;
    if (playerScore < computerScore) return "You lose! Your score: " + playerScore + ", Computer score: " + computerScore;
    return "Nobody's win! Your score: " + playerScore + ", Computer score: " + computerScore;
}


console.log(game(3));