
//rusty
let computerScore = 0;
let playerScore = 0;

 
    function playerChoice(){

        let playerSelection = prompt("Please pick rock, paper or scissors");
        return playerSelection.toLowerCase();
            
        }

    function computerPlay() {

        const items = ['rock', 'paper', 'scissors'];
        return items[Math.floor(Math.random()*items.length)];
        
        } 
    

    function singleRound(playerChoice, computerPlay){
    

        if (playerChoice == "rock" && computerPlay == "paper") {
                computerScore++
            return "Oh no, paper beats rock!";
        } else if (playerChoice == "rock" && computerPlay == "rock") {

            return "Whoops, looks like rock vs rock AKA a tie";
        } else if (playerChoice == "rock" && computerPlay == "scissors") {
                playerScore++
            return "Nice, rock beats scissors";
        } else if (playerChoice == "paper" && computerPlay == "rock") {
                playerScore++
            return "Wow! paper beats rock!"; 
        } else if (playerChoice == "paper" && computerPlay == "paper") {
        
            return "Uhhh... paper v paper is a tie";
        } else if (playerChoice == "paper" && computerPlay == "scissors") {
                computerScore++
            return "OHNO scissors beat ur paper";
        } else if (playerChoice == "scissors" && computerPlay == "rock") {
                computerScore++
            return "Oh no! rock beats ur scissors";
        } else if (playerChoice == "scissors" && computerPlay == "scissors") {

            return "scissors vs scissors, thats a tie";
        } else if (playerChoice == "scissors" && computerPlay == "paper") {
                playerScore++
            return "Wow, your scissors beats paper";
        }   
    }

    /* Not a needed function
    function playCounter(playerChoice, computerPlay) {

        if (playerChoice == "rock" && computerPlay == "paper") {
            return computerScore == computerScore++
        } else if (playerChoice == "rock" && computerPlay == "scissors") {
            return playerScore == playerScore++ 
        } else if (playerChoice == "paper" && computerPlay == "rock") {
            return playerScore == playerScore++
        } else if (playerChoice == "paper" && computerPlay == "scissors") {
            return computerScore == computerScore++
        } else if (playerChoice == "scissors" && computerPlay == "paper") {
            return playerScore == playerScore++
        } else if (playerChoice == "scissors" && computerPlay == "rock") {
            return computerScore == computerScore++
        }
    }
*/

/*function game(singleRound) {
    
    console.log(singleRound(playerChoice(), computerPlay()));
    
    
    console.log(singleRound(playerChoice(), computerPlay()));
    

    console.log(singleRound(playerChoice(), computerPlay()));
    
   
    console.log(singleRound(playerChoice(), computerPlay()));
    
    
    console.log(singleRound(playerChoice(), computerPlay()));

    or (i = 0; i <= 5; i++){

    console.log(singleRound(playerChoice(), computerPlay()));

}
} 
*/ 



    function gameEnd(playerScore, computerScore){
        if (playerScore > computerScore) {
            result = "Wow, you won!";
            return result
        } else if (playerScore < computerScore) {
            result = "WOWOWOW, u lost";
            return result
        } else {
            result = "A tie! Wow!";
            return result
        }
    }
    console.log(game(singleRound));
    console.log("Your opponent got a total score of " + computerScore);
    console.log("You got a total score of " + playerScore);
    
    console.log(gameEnd(playerScore, computerScore));
    
    
    
        
            //*Applcation will randomly generate an opponents 
            //choice for rock paper scissors by picking between the three choices
        //*and play that against an inputted answer from the user. 
       // it will evaluate the values , afterwhich, it will return the resul
    
       const container = document.querySelector('#container');

       const content = document.createElement('div');
       content.classList.add('content');
       content.textContent = 'This is the glorious text-content';

       container.appendChild(content);

       const idea = document.querySelector(".rockPaperScissors");

       const red = document.createElement("p");
       red.classList.add("redStyle");
       red.textContent = "Hey, I am red";
       red.style.color = "red";
       idea.appendChild(red);