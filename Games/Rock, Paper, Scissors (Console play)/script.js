    // Function for automatic computer output
    let computerPlay = function() {
    // Variables
    let computer_move;
    let number = Math.random(); //Generates random number to aid in random move

    // Computer's random move
    if (number <= 0.33) {
        computer_move = "ROCK"; // Computer plays ROCK
    }
    else if (number > 0.33 && number <= 0.66) {
        computer_move = "PAPER"; // Computer plays PAPER
    }
    else if (number > 0.66) {
        computer_move = "SCISSORS"; //Computer plays SCISSORS
    }
    return computer_move;
    }   // End of computerPlay() function

    // Function for one game round
    let playRound = function(playerSelection, computerSelection) {
    // Variables
    let game_results;

    // User's input made case insensitive
    playerSelection = playerSelection.toUpperCase();

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

    return game_results=parseInt(game_results); // Returns respective value that represents final results
    } // End of playRound() function

    // Game Play (finally)
    let game = function() {
    console.log("Let's play ROCK, PAPER, SCISSORS! :D");
    
    // Variables to keep track of game moves and scores
    let human_move;
    let computer_move;
    let human_score = 0;
    let computer_score = 0;
    
    // Play 5 rounds
    for(let i = 1; i < 6; i++) {
    console.log(`******** ROUND ${i} ********`);
    
    // User and copmputer play one round
    human_move = prompt("ROCK, PAPER, SCISSORS?");
    computer_move = computerPlay();
    playRound(human_move, computer_move); 
    
    // Score update and display after each round
    if (playRound(human_move, computer_move) == -1) {
        console.log(`It's a tie! ${human_move} and ${computer_move}!`);
    } 
    else if (playRound(human_move, computer_move) == 0) {
        computer_score = computer_score + 1; 
        console.log (`You lose round ${i}! ${computer_move} beats ${human_move}!`);
    }
    else if (playRound(human_move, computer_move) == 1) {
        human_score = human_score + 1; 
        console.log (`You win round ${i}! ${human_move} beats ${computer_move}!`);
    }
    console.log(`Player: ${human_score} | Computer: ${computer_score}`);
    console.log(" ");

    // At the end of round 5, display the final results
    if (i == 5) {
        if (human_score > computer_score) {
            console.log(`YOU ARE THE WINNER! Here, have a cookie! :)`);
        }    
        else if (human_score < computer_score) {
            console.log(`Awww you LOST! Try again next time! :(`);
        }       
        else if (human_score == computer_score) {
            console.log(`It's a TIE! WIN-WIN! :D`);
        }  
    }
   
    } // End of 5 rounds of game    
    } // End of game() function

    // Finally play the game
    game();