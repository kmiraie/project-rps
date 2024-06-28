function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    if(computerChoice === 0) {
        return "Rock"
    }else if(computerChoice === 1) {
        return "Scissors"
    }else{
        return "Paper"
    }
}

function getHumanChoice() {
    const humanChoice = window.prompt("Enter 'Rock', 'Scissors', or 'Paper'")
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
}

function playGame() {


function playRound(humanChoice, computerChoice) {
    
    
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
    if((humanChoice === 'Rock' && computerChoice === 'Scissors') 
    || (humanChoice === 'Paper' && computerChoice === 'Rock') 
    || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}.`
    }else if(humanChoice === computerChoice) {
        return `It's a tie! Both chose ${computerChoice}.`
    }else{
        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }
}

let humanScore = 0
let computerScore = 0

for(let i=0; i<5; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    console.log(playRound(humanSelection, computerSelection))
}

console.log('Human Score:' + humanScore)
console.log('Computer Score:' + computerScore)

}

playGame()