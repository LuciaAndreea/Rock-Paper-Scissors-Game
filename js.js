/**
 * Function for the random generated number by computer
 */
function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber< 0.33){
        return "rock";
    }else if(randomNumber < 0.66){
        return "paper";
    }else{
        return "scissors";
    }
    
}

/**
 * Function for the user input
 */
function getHumanChoice(){
    let choice = prompt("Enter rock, paper or scissors:").toLowerCase();
    return choice
    }



//declaring the score variables
let humanScore = 0;
let computerScore = 0;


//function to play a round

/**
 * Function to play a round
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 * @returns string
 */
function playRound(humanChoice, computerChoice){
       if(humanChoice=== computerChoice){
        console.log("It's a tie!");
        return;
       }

       if(
        (humanChoice ==="rock" && computerChoice==="scissors") ||
        (humanChoice =="paper" && computerChoice==="rock") ||
        (humanChoice ==="scissors" && computerChoice==="paper")
    )
{
    humanScore++;
    console.log("You won! "+ humanChoice +" defeats "+computerChoice);
}else{
    computerScore++;
    console.log("You lost!" +computerChoice+" defeats "+humanChoice);
}

}

for(let i =0;i<5;i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("The score is: "+humanScore+" for you");
    console.log("And "+computerScore+" for computer");
}