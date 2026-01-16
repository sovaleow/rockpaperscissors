let humanScore = 0;
let computerScore = 0;
let playerHealth = 5;
let computerHealth = 5;
let gameOver = false;

function getComputerChoice(){
    // returns random number 0 to 3
    compChoice = Math.floor(Math.random() * 3);
    if(compChoice === 0){ 
        return "rock";

    }else if(compChoice === 1){ 
        console.log("Computer choice is paper");
        return "paper";
    }else{ 
        console.log("Computer choice is scissor");
        return "scissor";
    }
}

function changeOutputDisplayStyle(){
    displayOutput.style.backgroundColor = "firebrick";
    displayOutput.style.borderRadius = "5px";
    displayOutput.style.color = "white";
    displayOutput.style.padding = "10px";
    displayOutput.style.marginTop = "50px";
}

function playRound(humanChoice, computerChoice){
    if(gameOver)return;
    humanChoice = humanChoice.toLowerCase();
    changeOutputDisplayStyle();

    if( //winning conditions
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissor")
    )
    {
        humanScore++;
        computerHealth--;
        updateComputerHealthImage(computerHealth);
        console.log("You win! " + humanChoice + " beats " + computerChoice) ;
        displayOutput.textContent = `You win!  ${humanChoice}  beats ${computerChoice}`
    }else if(
        (humanChoice === "scissor" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "rock")
    )
    {
        console.log("You draw! " + humanChoice + " ties " + computerChoice);
        displayOutput.textContent = `You draw! ${humanChoice} ties ${computerChoice}`
    }
    else {
        computerScore++;
        playerHealth--;
        updatePlayerHealthImage(playerHealth);
        console.log("You lose! " + computerChoice + " beats " + humanChoice) ;
        displayOutput.textContent = `You lose! ${computerChoice}  beats  ${humanChoice}`
    }

}

let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorBtn = document.querySelector(".scissor");
let result = document.querySelector(".result");
let displayPlayerScore = document.querySelector(".playerCount");
let displayComputerScore = document.querySelector(".computerCount");
let restartButton = document.querySelector(".restart");
let roundSelection = document.querySelector(".roundSelection");
let displayOutput = document.createElement("p");
let displayResult = document.createElement("p");
let replayMessage = document.createElement("p");
roundSelection.appendChild(displayOutput);
result.appendChild(displayResult);
result.appendChild(replayMessage);

let playerHearts=[
    document.querySelector(".playerHeart1"),
    document.querySelector(".playerHeart2"),
    document.querySelector(".playerHeart3"),
    document.querySelector(".playerHeart4"),
    document.querySelector(".playerHeart5")
]


let computerHearts = [
    document.querySelector(".computerHeart1"),
    document.querySelector(".computerHeart2"),
    document.querySelector(".computerHeart3"),
    document.querySelector(".computerHeart4"),
    document.querySelector(".computerHeart5")
]

const fullHeartImage = "Images/vecteezy_pixel-love-heart-symbol-icons-design-elements-for_24662465.jpg"
const emptyHeartImage = "Images/vecteezy_pixel-element-in-8-bit-style-isolated-on-white-background_.jpg"
// when playerHealth = 4 , change playerHeart5(index 4)
// when playerHealth = 3, change playerHeart4 and 5 (index 3 and 4)
//when playerHealth = 2, change playerHeart3, 4 and 5 (index 2 3 4 )
//when playerHealth = 1, change playerHeart2, 3 ,4 and 5 (index 1 2 3 4)
//when playerhealth = 0, change playerHeart1, (index 0 1 2 3 4)

function updatePlayerHealthImage(currentHealth){
   for(let i = 0 ; i < playerHearts.length; i++){
    if(i < currentHealth){
        playerHearts[i].setAttribute('src', fullHeartImage)
    }else{
        playerHearts[i].setAttribute('src', emptyHeartImage);
    }
   }
}

function updateComputerHealthImage(currentHealth){
   for(let i = 0 ; i < playerHearts.length; i++){
    if(i < currentHealth){
        computerHearts[i].setAttribute('src', fullHeartImage)
    }else{
        computerHearts[i].setAttribute('src', emptyHeartImage);
    }
   }
}


function updateScore(){
    displayPlayerScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
}

function restartGame(){
    humanScore = 0;
    computerScore = 0;
    playerHealth = 5;
    computerHealth = 5;
    gameOver = false;
    displayPlayerScore.textContent = 0;
    displayComputerScore.textContent = 0;
    replayMessage.textContent = "";
    displayResult.textContent = "";
    displayOutput.textContent = "";
    displayOutput.style = "";
    for(let i = 0; i < 5; i++){
        computerHearts[i].setAttribute('src', fullHeartImage);
        playerHearts[i].setAttribute('src', fullHeartImage);
    }
    console.log("Game restarted!");
}

function changeFinalResultDisplayStyle(){
    displayResult.style.margin = "20px";
    displayResult.style.fontSize = "30px";
}

function checkWinner(){
    if(humanScore === 5 || computerScore === 5){
       changeFinalResultDisplayStyle();
       gameOver = true;
        if(humanScore > computerScore){
            displayResult.textContent = `Congratulations! You are the winner!`;
        }else{
            displayResult.textContent = `Unlucky... You are the loser!`;
        }
        replayMessage.style.textAlign = "center";
        replayMessage.textContent = "Press the restart button to replay."
    }
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


