import { compareNumbers } from './utils.js';

// import functions and grab DOM elements
const numInput = document.getElementById('num-input');

const numButton = document.getElementById('num-button');

const highLowSpan = document.getElementById('high-low');

const guessesRemainingSpan = document.getElementById('guesses-remaining');

const result = document.getElementById('compare');

// initialize state
let guessesRemaining = 4;

let answerNumber = (Math.ceil(Math.random()) * 20);

// set event listeners to update state and DOM
numButton.addEventListener('click', () => {
    console.log(answerNumber);
    console.log(numInput);
    //Decrement # of guesses
    guessesRemaining--;

    guessesRemainingSpan.textContent = `You have ${guessesRemaining} guesses remaining`;

    const userGuess = numInput.valueAsNumber;

    if (compareNumbers(userGuess, answerNumber) === 0) {
        result.textContent = "You're correct!";
    }

    if (compareNumbers(userGuess, answerNumber) === -1) {
        highLowSpan.textContent = `Your guess is too low.`;
    } else if (compareNumbers(userGuess, answerNumber) === 1) {
        highLowSpan.textContent = 'Your guess is too high.';
    }

});

