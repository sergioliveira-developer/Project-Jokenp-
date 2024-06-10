


const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


//ENUM → para guardar palavras em repetição no código e evitar erros de digitação.
const GAME_CHOICES = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

/* 
humanScoreNumber → Camel Case
GAME_OPTIONS → Snake Case 
*/
let scoreHumanNumber = 0;
let scoreMachineNumber = 0;

const playHuman = (humanChoices) => {
    playTheGame(humanChoices, playMachine())
}

const playMachine = () => {
    const choices = [GAME_CHOICES.ROCK, GAME_CHOICES.PAPER, GAME_CHOICES.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices [randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.textContent = "Equality"
    }

    else if (human === GAME_CHOICES.PAPER && machine === GAME_CHOICES.ROCK ||
        human === GAME_CHOICES.ROCK && machine === GAME_CHOICES.SCISSORS ||
        human === GAME_CHOICES.SCISSORS && machine === GAME_CHOICES.PAPER) {
        result.textContent = "You win!"
        scoreHumanNumber++
        humanScore.textContent = scoreHumanNumber

    }
    else {
        scoreMachineNumber++
        machineScore.textContent = scoreMachineNumber
        result.textContent = "You lost to Alexa!"

    }


}
