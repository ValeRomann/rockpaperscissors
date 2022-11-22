let body = document.querySelector('body');

let resultDiv = document.createElement('div');
resultDiv.textContent = 'Make Choice';
body.appendChild(resultDiv);

let choicesDisplayDiv = document.createElement('div');
choicesDisplayDiv.setAttribute('class', 'choices-display');
let userChoiceDiv = document.createElement('div');
let computerChoiceDiv = document.createElement('div');
choicesDisplayDiv.appendChild(userChoiceDiv);
choicesDisplayDiv.appendChild(computerChoiceDiv);
body.appendChild(choicesDisplayDiv);

let rockSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M377.1 68.05C364.4 50.65 343.7 40 321.2 40h-13.53c-3.518 0-7.039 .2754-10.53 .8184C284.8 31.33 269.6 26 253.5 26H240c-3.977 0-7.904 .3691-11.75 1.084C216.7 10.71 197.6 0 176 0H160C124.7 0 96 28.65 96 64v49.71L63.04 143.3C43.3 160 32 184.6 32 210.9v78.97c0 32.1 17.11 61.65 44.65 77.12L112 386.9v101.1C112 501.3 122.7 512 135.1 512S160 501.3 160 488v-129.9c-1.316-.6543-2.775-.9199-4.062-1.639l-55.78-31.34C87.72 318.2 80 304.6 80 289.9V210.9c0-12.31 5.281-23.77 14.5-31.39L112 163.8V208C112 216.8 119.2 224 128 224s16-7.156 16-16V64c0-8.828 7.188-16 16-16h16C184.8 48 192 55.17 192 64v16c0 9.578 7.942 16.04 16.15 16.04c6.432 0 12.31-4.018 14.73-10.17C223.3 84.84 228.3 74 240 74h13.53c20.97 0 17.92 19.58 34.27 19.58c8.177 0 9.9-5.584 19.88-5.584h13.53c25.54 0 18.27 28.23 38.66 28.23c.1562 0 .3125-.002 .4668-.0078L375.4 116C388.1 116 400 127.7 400 142V272c0 36.15-19.54 67.32-48 83.69v132.3C352 501.3 362.7 512 375.1 512S400 501.3 400 488v-108.1C430.1 352.8 448 313.6 448 272V142C448 102.1 416.8 69.44 377.1 68.05z"/></svg>';
let paperSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M408 80c-3.994 0-7.91 .3262-11.73 .9551c-9.586-28.51-36.57-49.11-68.27-49.11c-6.457 0-12.72 .8555-18.68 2.457C296.6 13.73 273.9 0 248 0C222.1 0 199.3 13.79 186.6 34.44C180.7 32.85 174.5 32 168.1 32C128.4 32 96.01 64.3 96.01 104v121.6C90.77 224.6 85.41 224 80.01 224c-.0026 0 .0026 0 0 0C36.43 224 0 259.2 0 304.1c0 20.29 7.558 39.52 21.46 54.45l81.25 87.24C141.9 487.9 197.4 512 254.9 512h33.08C393.9 512 480 425.9 480 320V152C480 112.3 447.7 80 408 80zM432 320c0 79.41-64.59 144-143.1 144H254.9c-44.41 0-86.83-18.46-117.1-50.96l-79.76-85.63c-6.202-6.659-9.406-15.4-9.406-23.1c0-22.16 18.53-31.4 31.35-31.4c8.56 0 17.1 3.416 23.42 10.18l26.72 28.69C131.8 312.7 133.9 313.4 135.9 313.4c4.106 0 8.064-3.172 8.064-8.016V104c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152C192 264.8 199.2 272 208 272s15.1-7.163 15.1-15.1L224 72c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v184C272 264.8 279.2 272 288 272s15.99-7.164 15.99-15.1l.0077-152.2c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24v152.2C352 264.8 359.2 272 368 272s15.1-7.163 15.1-15.1V152c0-13.25 10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24V320z"/></svg>';
let scissorsSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M270.1 480h97.92C447.4 480 512 417.1 512 339.7V231.8c0-23.45-6.106-46.73-17.66-67.33l-31.35-55.85C447.5 81.1 417.1 64 385.9 64h-46.97c-26.63 0-51.56 11.63-68.4 31.93l-15.46 18.71L127.3 68.44C119 65.46 110.5 64.05 102.1 64.05c-30.02 0-58.37 18.06-69.41 47.09C15.06 156.8 46.19 194 76.75 204.9l2.146 .7637L68.79 206.4C30.21 209 0 241.2 0 279.3c0 39.7 33.27 72.09 73.92 72.09c1.745 0 3.501-.0605 5.268-.1833l88.79-6.135v8.141c0 22.11 10.55 43.11 28.05 56.74C197.4 448.8 230.2 480 270.1 480zM269.1 432c-14.34 0-26-11.03-26-24.62c0 0 .0403-14.31 .0403-14.71c0-6.894-4.102-14.2-10.67-16.39c-10.39-3.5-17.38-12.78-17.38-23.06v-13.53c0-16.98 13.7-16.4 13.7-29.89c0-9.083-7.392-15.96-15.96-15.96c-.3646 0-.7311 .0125-1.099 .0377c0 0-138.1 9.505-138.7 9.505c-14.32 0-25.93-11.04-25.93-24.49c0-13.28 10.7-23.74 24.1-24.64l163.2-11.28c2.674-.1882 14.92-2.907 14.92-16.18c0-6.675-4.284-12.58-10.65-14.85L92.84 159.7C85.39 156.1 75.97 149.4 75.97 136.7c0-11.14 9.249-24.66 25.97-24.66c3.043 0 6.141 .5115 9.166 1.59l234.1 85.03c1.801 .6581 3.644 .9701 5.456 .9701c8.96 0 16-7.376 16-15.1c0-6.514-4.068-12.69-10.59-15.04l-64.81-23.47l15.34-18.56C315.2 117.3 326.6 112 338.9 112h46.97c14.77 0 28.28 7.719 35.27 20.16L452.5 188c7.531 13.41 11.52 28.56 11.52 43.81v107.9c0 50.91-43.06 92.31-96 92.31H269.1z"/></svg>';

let rockBtn = document.createElement('button');
rockBtn.innerHTML = rockSVG;

let paperBtn = document.createElement('button');
paperBtn.innerHTML = paperSVG;

let scissorsBtn = document.createElement('button');
scissorsBtn.innerHTML = scissorsSVG;

let startBtn = document.createElement('button');
startBtn.setAttribute("class", "start-btn");
body.appendChild(startBtn);
startBtn.style.display = 'none';
startBtn.textContent = 'Start new game';

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

rockBtn.addEventListener('click', (e) => game(rockBtn.innerHTML));
paperBtn.addEventListener('click', (e) => game(paperBtn.innerHTML));
scissorsBtn.addEventListener('click', (e) => game(scissorsBtn.innerHTML));    

let playerScoresDiv = document.createElement('div');
playerScoresDiv.textContent = '';
body.appendChild(playerScoresDiv);

let computerScoresDiv = document.createElement('div');
computerScoresDiv.textContent = '';
body.appendChild(computerScoresDiv);

let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function showChoices(parent, selection) {
    parent.innerHTML = '';
    parent.insertAdjacentHTML('beforeend',selection);
}

function convertSelection(selection) {
    if (selection === rockBtn.innerHTML) return 'Rock';
    if (selection === paperBtn.innerHTML) return 'Paper';
    if (selection === scissorsBtn.innerHTML) return 'Scissors';    
    if (selection === 'Rock') return rockBtn.innerHTML;
    if (selection === 'Paper') return paperBtn.innerHTML;
    if (selection === 'Scissors') return scissorsBtn.innerHTML;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = convertSelection(playerSelection);
        
    if (playerSelection === computerSelection){ 
        resultDiv.textContent = "Nobody's win";
        return 0;
    }
    if ((playerSelection === 'Paper' && computerSelection === 'Scissors') ||
       (playerSelection === 'Rock' && computerSelection === 'Paper') ||
       (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        resultDiv.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        return -1;
    }
    resultDiv.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    return 1;
}

function game(playerSelection) {
    computerSelection = getComputerChoice();
    showChoices(userChoiceDiv, playerSelection);
    showChoices(computerChoiceDiv, convertSelection(computerSelection));

    currentRound = playRound(playerSelection, computerSelection);
    if (currentRound === 1) playerScore++;
    playerScoresDiv.textContent = 'Your score: ' +playerScore;
    if (currentRound === -1) computerScore++;
    computerScoresDiv.textContent = 'Computer score: ' + computerScore;    

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
        currentRound = 0;
        playerScore = 0;
        computerScore = 0;
        startBtn.style.display = 'none';
        rockBtn.style.display = '';
        paperBtn.style.display = ''
        scissorsBtn.style.display = ''; 
        resultDiv.textContent = 'Make choice';
        playerScoresDiv.textContent = 'Your score: ' + playerScore;
        computerScoresDiv.textContent = 'Computer score: ' + computerScore; 
    });

    startBtn.style.display = '';
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none'
    scissorsBtn.style.display = 'none';    
}