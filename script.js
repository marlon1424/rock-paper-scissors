var playerScore = 0;
var compScore = 0;

function getComputerChoice(){
    let randonNumber = Math.floor(Math.random() * 3) + 1;
    let decison = " ";

    if (randonNumber == 1){
        decison = "rock";
    } else if(randonNumber == 2){
        decison = "paper";
    } else{
        decison = "scissors";
    }
     return decison;
}

function playRound (playerSelection, computerSelection){
   var compSelection = computerSelection.toLowerCase();
   var playSelection = playerSelection.toLowerCase();
   let outcome = " ";

    if (playSelection == "rock" && compSelection == "rock"){
        outcome = `Tie! Play again. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "rock" && compSelection == "scissors"){
        playerScore++;
        outcome = `You win! Rock beats scissors. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "rock" && compSelection == "paper"){
        compScore++;
        outcome = `You lose! Paper beats rock \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "paper" && compSelection == "paper"){
        outcome = `Tie! Play again. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "paper" && compSelection == "rock"){
        playerScore++;
        outcome = `You win! Paper beats rock. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "paper" && compSelection == "scissors"){
        compScore++;
        outcome = `You lose! Scissors beats paper. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "scissors" && compSelection == "scissors"){
        outcome = `Tie! Play again. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else if (playSelection == "scissors" && compSelection == "paper"){
        playerScore++;
        outcome = `You win! scissors beats paper. \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    } else{
        compScore++;
        outcome = `You lose! Rock beats scissors \nYour score: ${playerScore}\nComputer score: ${compScore}`;
    }

    return outcome;

}

function game(){
    
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i + 1}`);
        let playerGuess = prompt("Whats your guess?");
        let compGuess = getComputerChoice();
       console.log(playRound(playerGuess, compGuess));
    }

    if (playerScore > compScore){
        console.log("Congrats! You win the game.")
    } else if (compScore > playerScore){
        console.log("You lose. The computer won this game.")
    } else {
        console.log("The game was tied.")
    }


}

game();
