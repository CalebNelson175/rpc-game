

let computerScore = 0;

let playerScore = 0;

            

function computerPlay() {
    const items = ['Rock', 'Paper', 'Scissors'];
    return items[Math.floor(Math.random()*items.length)];
         
    } 

    function playerChoice() {
        let playerSelection = prompt("Please pick rock, paper or scissors");
        return playerSelection
    }


    console.log(playerChoice());
    console.log(computerPlay());

    
    
    
    function singleRound(playerChoice, computerPlay){
    if (playerChoice == "Rock" && computerPlay == "Paper") {
    
        return "Oh no, paper beats rock!";
    } else if (playerChoice == "Rock" && computerPlay == "Rock") {

        return "Whoops, looks like rock vs rock AKA a tie";
    } else if (playerChoice == "Rock" && computerPlay == "Scissors") {

        return "Nice, rock beats scissors";
    } else if (playerChoice == "Paper" && computerPlay == "Rock") {

        return "Wow! Paper beats rock!"; 
    } else if (playerChoice == "Paper" && computerPlay == "Paper") {
        
        return "Uhhh... Paper v paper is a tie";
    } else if (playerChoice == "Paper" && computerPlay == "Scissors") {

        return "OHNO scissors beat ur paper";
    } else if (playerChoice == "Scissors" && computerPlay == "Rock") {

        return "Oh no! ROck beats ur scissors";
    } else if (playerChoice == "Scissors" && computerPlay == "Scissors") {

        return "Scissors vs scissors, thats a tie";
    } else if (playerChoice == "Scissors" && computerPlay == "Paper") {

        return "Wow, your scissors beats paper";
    }   } 
    
    
    
    
    function playCounter(playerChoice, computerPlay) {

        if (playerChoice == "Rock" && computerPlay == "Paper") {
            return computerScore == computerScore + 1
        } else if (playerChoice == "Rock" && computerPlay == "Scissors") {
            return playerScore == playerScore + 1 
        } else if (playerChoice == "Paper" && computerPlay == "Rock") {
            return playerScore == playerScore + 1
        } else if (playerChoice == "Paper" && computerPlay == "Scissors") {
            return computerScore == computerScore + 1
        } else if (playerChoice == "Scissors" && computerPlay == "paper") {
            return playerScore == playerScore + 1
        } else if (playerChoice == "Scissors" && computerPlay == "Rock") {
            return computerScore == computerScore + 1
        }


    }
    console.log(playCounter(playerChoice, computerPlay));
    
    /*function game (playerScore, computerScore) {

        for ([i = 0]; [playerScore < 5 && computerScore < 5]; [i++]); {
            
            return playerChoice();
            
        }
        
    }

    
     console.log(game(playerScore, computerScore)); */

    function gameEnd(){
        if (playerScore > computerScore) {
            result = "Wow, you won!";
        } else {
            result = "WOWOWOW, u lost"
        
    } }
    
    /* if rock*/ 
    
        
            //*Applcation will randomly generate an opponents 
            //choice for rock paper scissors by picking between the three choices
        //*and play that against an inputted answer from the user. 
       // it will evaluate the values , afterwhich, it will return the resul
    