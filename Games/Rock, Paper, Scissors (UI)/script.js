let human_play;
let computer_play;
const buttons = document.querySelectorAll('button');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
let results_box = document.getElementsByClassName('item2-2')[0];
let show_human_score = document.getElementById('human-score');
let show_computer_score = document.getElementById('computer-score');
let playerSelection;
let computerSelection;
let game_results;
let human_score = 0;
let computer_score = 0;

// FUNCTIONS 
// Function for automatic computer output
let computerPlay = function() {
let computer_move;
let number = Math.random(); //Generates random number between 0~1 

// Computer's random move
if (number <= 0.33) {
    computer_move = "ROCK"; 
}
else if (number > 0.33 && number <= 0.66) {
    computer_move = "PAPER"; 
}
else if (number > 0.66) {
    computer_move = "SCISSORS"; 
}
return computer_move;
}   // End of computerPlay() function

// Function for one game round
let playRound = function() {

computerSelection = computerPlay();
console.log(`Computer: ${computerSelection}`);
console.log(`Player: ${playerSelection}`);

// Returns a -1 if there is a tie, a 0 if there is a loss and a 1 if there is a win
switch (playerSelection){
    case "ROCK": // If the user played ROCK
        if (computerSelection == "ROCK") {          // And the computer played the same as the user
            game_results = -1;                      // Display that it is a tie
        } 
        else if (computerSelection == "PAPER") {    // And the computer played PAPER, display user as loser
            game_results = 0; 
        }
        else if (computerSelection == "SCISSORS") { // And the computer played SCISSORS, display user as winner
            game_results = 1;
        }
        break;
    case "PAPER": // If the user played PAPER
        if (computerSelection == "PAPER") {         // And the computer played the same as the user
            game_results = -1;                      // Display that it is a tie
        } 
        else if (computerSelection == "SCISSORS") { // And the computer played SCISSORS, display user as loser
            game_results = 0;
        }
        else if (computerSelection == "ROCK") {     // And the computer played ROCK, display user as winner
            game_results = 1;
        }
        break;
    case "SCISSORS": // If the user played SCISSORS
        if (computerSelection == "SCISSORS") {      // And the computer played the same as the user
            game_results = -1;                      // Display that it is a tie
        } 
        else if (computerSelection == "ROCK") {     // And the computer played ROCK, display user as loser
            game_results = 0; 
        }
        else if (computerSelection == "PAPER") {     // And the computer played PAPER, display user as winner
            game_results = 1; 
        }
        break;
    }   

// Score update and display after each round
if (game_results == -1) {
    results_box.textContent = `It's a tie! ${playerSelection} and ${computerSelection}! :)`;
} 
else if (game_results == 0) {
    computer_score++; 
    results_box.textContent = `AWWW! ${computerSelection} beats ${playerSelection}! :(`;
}
else if (game_results == 1) {
    human_score++; 
    results_box.textContent = `YES! ${playerSelection} beats ${computerSelection}! :)`;
}
show_computer_score.textContent = `COMPUTER: ${computer_score}`;
show_human_score.textContent = `PLAYER: ${human_score}`;

console.log(`Player: ${human_score} | Computer: ${computer_score}`);
console.log(" ");      

// If game is over, stop game and display final results
if (isGameOver() == true) {
    buttons.forEach((button) => {
        button.removeEventListener('click', playRound);
    });    
    return gameOver();
}// End of while game is over
} // End of playRound() function

// Check if game is over
let isGameOver = function(){
if (human_score == 5 || computer_score == 5){return true;} 
else{return false;}
}

//  Display final results after game is over
let gameOver = function () {    
if (human_score > computer_score){results_box.textContent = "CONGRATULATIONS, YOU WIN! :D";}
else if (human_score < computer_score){results_box.textContent = "SORRY, YOU LOSE! D:";}
else {results_box.textContent = "IT'S A TIE! :D";}
}

let game = function () {    
if (isGameOver() == false) {
// Click button to make selection in game
    buttons.forEach((button) => {
        button.addEventListener('click', playRound)
    });
    isGameOver();
} // End of while game is not over
} //End of game() function

// Play Game
game();

// Check which button is clicked
function isClicked(whichOne) {
    if(whichOne == "rock"){playerSelection = "ROCK";}
    if(whichOne == "paper"){playerSelection = "PAPER";}
    if(whichOne == "scissors"){playerSelection = "SCISSORS";}
}




