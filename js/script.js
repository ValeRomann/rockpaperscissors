let body = document.querySelector('body');

let rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';

let paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';

let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';

let startBtn = document.createElement('button');
body.appendChild(startBtn);
startBtn.style.display = 'none';
startBtn.textContent = 'Start new game';


body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', (e) => game(rockBtn.textContent));
paperBtn.addEventListener('click', (e) => game(paperBtn.textContent));
scissorsBtn.addEventListener('click', (e) => game(scissorsBtn.textContent));    

let resultDiv = document.createElement('div');
resultDiv.textContent = '';
body.appendChild(resultDiv);

let playerScoresDiv = document.createElement('div');
playerScoresDiv.textContent = '';
body.appendChild(playerScoresDiv);

let computerScoresDiv = document.createElement('div');
computerScoresDiv.textContent = '';
body.appendChild(computerScoresDiv);


function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection){ 
        resultDiv.textContent = "Nobody's win";
        //console.log("Nobody's win");
        return 0;
    }
    if ((playerSelection === 'Paper' && computerSelection === 'Scissors') ||
       (playerSelection === 'Rock' && computerSelection === 'Paper') ||
       (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        resultDiv.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        //console.log("You Lose! " + computerSelection + " beats " + playerSelection);              
        return -1;
    }
    resultDiv.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    //console.log("You Win! " + playerSelection + " beats " + computerSelection);
    return 1;
}

function game(playerSelection) {
    
    currentRound = playRound(playerSelection, getComputerChoice());
    if (currentRound === 1) playerScore++;
    playerScoresDiv.textContent = playerScore;
    if (currentRound === -1) computerScore++;
    computerScoresDiv.textContent = computerScore;    

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent =  "You win! Your score: " + playerScore + ", Computer score: " + computerScore;
            startNewGame();
        }
        if (playerScore < computerScore) {
            resultDiv.textContent = "You lose! Your score: " + playerScore + ", Computer score: " + computerScore;
            startNewGame();
        }
        
    }
}

function startNewGame() { 
    
    startBtn.addEventListener('click', function(){
        startBtn.style.display = 'none';
        rockBtn.style.display = '';
        paperBtn.style.display = ''
        scissorsBtn.style.display = ''; 
        currentRound = 0;
        playerScore = 0;
        playerScoresDiv.textContent = playerScore;
        computerScore = 0;
        computerScoresDiv.textContent = computerScore; 
    });

    startBtn.style.display = '';
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none'
    scissorsBtn.style.display = 'none';    
}