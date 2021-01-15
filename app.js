import { compareNumbers } from './utils.js';

// import functions and grab DOM elements
const numInput = document.getElementById('num-input');

const numButton = document.getElementById('num-button');

const highLowSpan = document.getElementById('high-low');

const correctAnswer = document.getElementById('correct-answer');

const guessesRemainingSpan = document.getElementById('guesses-remaining');

// initialize state
let guessesRemaining = 4;

let answerNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
numButton.addEventListener('click', () => {

    //Decrement # of guesses
    guessesRemaining--;

    const userGuess = numInput.valueAsNumber;


    messageContent(userGuess, answerNumber);
    
    remainingGuesses(guessesRemaining); 

});

function remainingGuesses(guessesRemaining) {

    if (guessesRemaining > 0) {
        guessesRemainingSpan.textContent = `You have ${guessesRemaining} guesses remaining`;
    } else if (guessesRemaining <= 0) {
        guessesRemainingSpan.textContent = "You're all out of turns. You lose.";
        correctAnswer.textContent = `The correct answer was ${answerNumber}.`;
    }
}
function messageContent(userGuess, answerNumber) {
    
    if (compareNumbers(userGuess, answerNumber) === 0) {
        highLowSpan.textContent = "You're correct!";
        guessesRemainingSpan.textContent = 'Congratulations!';
    }

    if (compareNumbers(userGuess, answerNumber) === -1) {
        highLowSpan.textContent = `Your guess is too low.`;
    } else if (compareNumbers(userGuess, answerNumber) === 1) {
        highLowSpan.textContent = 'Your guess is too high.';
    }
}