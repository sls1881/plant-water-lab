import { compareNumbers } from './utils.js';

// import functions and grab DOM elements
const numInput = document.getElementById('num-input');

const numButton = document.getElementById('num-button');

const highLowSpan = document.getElementById('high-low');

const guessesRemainingSpan = document.getElementById('guesses-remaining');

const resetButton = document.getElementById('reset-button');

// initialize state
let guessesRemaining = 4;

let answerNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
numButton.addEventListener('click', () => {
    //Decrement # of guesses
    guessesRemaining--;

    const userGuess = numInput.valueAsNumber;

    messageOutput(userGuess);

    numGuessesRemaining(guessesRemaining);

});

resetButton.addEventListener('click', () => {

    numButton.style.display = '';
    guessesRemaining = 4;
    guessesRemainingSpan.textContent = '';
    numInput.value = '';
    numButton.disabled = false;
    answerNumber = Math.ceil(Math.random() * 20);
    highLowSpan.textContent = '';
    resetButton.style.display = 'none';

});

function numGuessesRemaining() {
    if (guessesRemaining > 0) {
        guessesRemainingSpan.textContent = `You have ${guessesRemaining} guesses remaining`;
    } else if (guessesRemaining <= 0) {
        guessesRemainingSpan.textContent = "You're all out of turns. You lose.";
    }
}

function messageOutput(userGuess) {
    if (compareNumbers(userGuess, answerNumber) === 0) {
        highLowSpan.textContent = "You're correct!";
        guessesRemainingSpan.style.display = 'none';
        numButton.style.display = 'none';
    }

    if (compareNumbers(userGuess, answerNumber) === -1) {
        highLowSpan.textContent = `Your guess is too low.`;
    } else if (compareNumbers(userGuess, answerNumber) === 1) {
        highLowSpan.textContent = 'Your guess is too high.';
    }
}

