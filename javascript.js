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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    console.log("You choose " + humanChoice);
    console.log("Computer chooses " + computerChoice);

    if(humanChoice == computerChoice){
        console.log("Tie");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "rp") {
        computerScore++;
        console.log("You lose");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "rs") {
        humanScore++;
        console.log("You win");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "pr") {
        humanScore++;
        console.log("You win");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "ps") {
        computerScore++;
        console.log("You lose");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "sr") {
        computerScore++;
        console.log("You lose");
        return;
    } else if (humanChoice.charAt(0)+computerChoice.charAt(0) == "sp") {
        humanScore++;
        console.log("You win");
        return;
    } else {
        return("error in playRound")
    }
}


const humanSelection = getHumanRoll();
const computerSelection = getComputerRoll();

playRound(humanSelection, computerSelection);