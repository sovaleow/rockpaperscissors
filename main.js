let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // returns random number 0 to 3
    compChoice = Math.floor(Math.random() * 3);
    if(compChoice === 0){
        console.log("Computer choice is rock");
        return "rock";

    }else if(compChoice === 1){
        console.log("Computer choice is paper");
        return "paper";
    }else{
        console.log("Computer choice is scissor");
        return "scissor";
    }
}

function getHumanChoice(){
    choice = prompt("Choose Rock, Paper or Scissors?", "rock");
    console.log("Human choice is " + choice);
    return choice;
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
        alert("You win! " + humanChoice + " beats " + computerChoice) ;
    }else if(
        (humanChoice === "scissor" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "rock")
    )
    {
        alert("You draw! " + humanChoice + " ties " + computerChoice);
    }
    else {
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice) ;
    }

}

function playGame(){
    for(let i = 0; i < 5; i++){ 
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        alert("Human Score: " + humanScore);
        alert("Computer Score: " + computerScore);
       
    }
    alert("Final Human Score: " + humanScore);
    alert("Final Computer Score: " + computerScore);
    console.log("Final Human Score: " + humanScore);
    console.log("Final Computer Score: " + computerScore);

    if(humanScore > computerScore){
        alert("Congratulations~You are the Winner!");
        console.log("Congratulations~You are the Winner!") ;
    }else{
        alert("Sorry~You are the loser!");
        console.log("Sorry~You are the loser!");
    }
}

let replayBool = true;

while(replayBool){
    playGame();

    replayChoice = prompt("Do you want to play again?", "yes");
    replayChoice = replayChoice.toLowerCase();

    if(replayChoice === "yes"){
        replayBool = true
    }else{
        replayBool = false;
    }
}


