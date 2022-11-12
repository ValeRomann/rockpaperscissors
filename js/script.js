function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) return "Nobody's win";
    
    if ((playerSelection === 'Paper' && computerSelection === 'Scissors') ||
       (playerSelection === 'Rock' && computerSelection === 'Paper') ||
       (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return "You Lose! " + computerSelection + " beats " + playerSelection; ;
    }
    return "You Win! " + playerSelection + " beats " + computerSelection;
}

let playerSelection = prompt("Input Rock or Paper or Scissors");

console.log(playRound(playerSelection, getComputerChoice()));