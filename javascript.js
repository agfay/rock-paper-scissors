console.log("Hello World") 

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

function getHumanRoll () {
    let humanChoice = prompt("Enter your roll (rock, paper, scissors):");
    return(humanChoice);
}

console.log(getComputerRoll());
console.log(getHumanRoll());