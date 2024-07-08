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

// function getHumanChoice() {
//     const humanChoice = window.prompt("Enter 'Rock', 'Scissors', or 'Paper'")
//     return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
// }

// function playGame() {


function playRound(event) {
    
    
    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();

    if((humanChoice === 'Rock' && computerChoice === 'Scissors') 
    || (humanChoice === 'Paper' && computerChoice === 'Rock') 
    || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        humanScore++
        alert (`You win! ${humanChoice} beats ${computerChoice}.`)
    }else if(humanChoice === computerChoice) {
        alert (`It's a tie! Both chose ${computerChoice}.`)
    }else{
        computerScore++
        alert (`You lose! ${computerChoice} beats ${humanChoice}.`)
    }

    document.querySelector('#humanScore').innerText = 'Human Score: ' + humanScore;
    document.querySelector('#computerScore').innerText = 'Computer Score: ' + computerScore;

    if(humanScore === 5) {
        alert('You win!')
    }else if(computerScore === 5){
        alert('Computer wins!')
    }

    if(humanScore === 5 || computerScore === 5) {
        humanScore = 0
        computerScore =0
    }
}

let humanScore = 0
let computerScore = 0

// for(let i=0; i<5; i++) {
//     const humanSelection = getHumanChoice()
//     const computerSelection = getComputerChoice()

//     console.log(playRound(humanSelection, computerSelection))
// }



// console.log('Human Score:' + humanScore)
// console.log('Computer Score:' + computerScore)

let rock = document.querySelector('#Rock')
let paper = document.querySelector('#Paper')
let scissors = document.querySelector('#Scissors')

rock.addEventListener('click', playRound)
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound)



// }

// playGame()


