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

        if (playerScore >= 5){
            outcome = `You win the game!`;
        } else if (compScore >= 5){
            outcome = ` You lose. The computer won`;
        }
    

    return outcome;

}

function game(){

    
    let compGuess = getComputerChoice();

        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector('.scissors');

        const results = document.querySelector('.results');
        const scoreLabel = document.createElement("div");
        scoreLabel.setAttribute('style', 'color: green;')
        results.appendChild(scoreLabel);
        const resultLabel = document.createElement("div");
        resultLabel.setAttribute('style', 'color: green;');
        results.appendChild(resultLabel);
        

            rockBtn.addEventListener('click', () => {
                playerGuess = "rock";
            scoreLabel.textContent = (playRound(playerGuess, compGuess));
            });

            paperBtn.addEventListener('click', () => {
                playerGuess = "paper";
                scoreLabel.textContent = (playRound(playerGuess, compGuess));
            });

            scissorsBtn.addEventListener('click', () => {
                playerGuess = "scissors";
                scoreLabel.textContent = (playRound(playerGuess, compGuess));
            });

            

}


    game();


