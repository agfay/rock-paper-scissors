console.log("Hello World") 

function getHumanRoll () {
    let humanChoice = prompt("Enter your roll (rock, paper, scissors):");
    return(humanChoice);
}
function getComputerRoll () {
    let computerRoll = Math.trunc(3 * Math.random());
    if (computerRoll == 0) {
    return("rock")
    } else if (computerRoll == 1) {
    return("paper")
    } else if (computerRoll == 2) {
    return("scissors")
    } else {
    return("error in computerRoll")
    };
}



function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    console.log("You choose " + humanChoice);
    console.log("Computer chooses " + computerChoice);

    if(humanChoice == computerChoice){
        console.log("Tie");
        return(0);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "rp") {
        console.log("You lose");
        return(2);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "rs") {
        console.log("You win");
        return(1);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "pr") {
        console.log("You win");
        return(1);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "ps") {
        console.log("You lose");
        return(2);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "sr") {
        console.log("You lose");
        return(2);
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "sp") {
        console.log("You win");
        return(1);
    } else {
        return("error in playRound")
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    for(let i=0; i < 5; i++) {
       let outcome = playRound(getHumanRoll(), getComputerRoll());
       
       if (outcome == 1) {
        humanScore++;
       } else if (outcome == 2) {
        computerScore++;
       } else {
        continue;
       }
    }

    return([humanScore, computerScore]);
}

let [a,b] = playGame();
console.log("Human score: " + a);
console.log("Computer score: " + b);