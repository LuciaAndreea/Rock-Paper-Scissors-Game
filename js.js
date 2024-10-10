/**
 * Function for the random generated number by computer
 */
function getComputerChoice(){
    const choices = ["Rock" , "Paper" , "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    
}



//function to play a round

/**
 * Function to play a round
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 * @returns string
 */
function playRound(humanChoice, computerChoice){
      const resultDisplay = document.querySelector("#result-display");
      resultDisplay.textContent="";

      const playerChoiceText = document.createElement("p");
      playerChoiceText.textContent = `Player chose: ${humanChoice}`;
      resultDisplay.appendChild(playerChoiceText);

      const computerTextChoice = document.createElement("p");
      computerTextChoice.textContent = `Computer chose: ${computerChoice}`;
      resultDisplay.appendChild(computerTextChoice);

      const resultText = document.createElement("p");
       if(humanChoice === computerChoice){
        resultText.textContent=("It's a tie!");
       }

       else if(
        (humanChoice ==="Rock" && computerChoice==="Scissors") ||
        (humanChoice =="Paper" && computerChoice==="Rock") ||
        (humanChoice ==="Scissors" && computerChoice==="Paper")
    ){
        resultText.textContent="You win";
        
    }else{
        resultText.textContent = "Computer wins";
        
    }
resultDisplay.appendChild(resultText);

}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");


 buttonRock.addEventListener("click" ,() =>{
    const computerChoice = getComputerChoice();
    playRound("Rock" , computerChoice);
 });

 buttonPaper.addEventListener("click", () =>{
    const computerChoice = getComputerChoice();
    playRound("Paper" , computerChoice);
 });

 buttonScissors.addEventListener("click", () =>{
    const computerChoice = getComputerChoice();
    playRound("Scissors", computerChoice);
 })





