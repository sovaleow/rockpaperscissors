let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // returns random number 0 to 3
    compChoice = Math.floor(Math.random() * 3);
    if(compChoice === 0){ //rock
        return "rock";

    }else if(compChoice === 1){ //paper
        console.log("Computer choice is paper");
        return "paper";
    }else{ //scissor
        console.log("Computer choice is scissor");
        return "scissor";
    }
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    //winning conditions
    
    if(
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor")
    )
    {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice) ;
    }else if(
        (humanChoice === "scissor" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "rock")
    )
    {
        console.log("You draw! " + humanChoice + " ties " + computerChoice);
    }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice) ;
    }

}

function checkWinner(){
    if(humanScore === 5 || computerScore === 5){
    if(humanScore > computerScore){
        displayResult.textContent = "Congratulations! You are the winner!";
    }else{
        displayResult.textContent = "Condolences! You are the loser!";
    }
}
}


let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorBtn = document.querySelector(".scissor");
let displayResult = document.querySelector(".result");
let displayPlayerScore = document.querySelector(".playerCount");
let displayComputerScore = document.querySelector(".computerCount");
let restartButton = document.querySelector(".restart");
let roundSelectionDiv = document.querySelector("")
function updateScore(){
    displayPlayerScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    displayPlayerScore.textContent = 0;
    displayComputerScore.textContent = 0;
    displayResult.textContent = "";
    console.log("Game restarted!");
}

rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice())
    updateScore();
    console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    checkWinner();
});

paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    updateScore();
    console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    checkWinner();
});

scissorBtn.addEventListener('click', () =>{
    playRound("scissor", getComputerChoice())
    updateScore();
    console.log(`Player Score: ${humanScore}, Computer Score: ${computerScore}`);
    checkWinner();
}); 

restartButton.addEventListener('click', restartGame);


