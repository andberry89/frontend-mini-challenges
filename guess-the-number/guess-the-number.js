'use strict';

(function() {

    function checkGuess(evt) {
        
        evt.preventDefault();
        const guess = Number(userInput.value);
        guesses.push(guess);

        if (guess > val) {
            userMsg.textContent = 'Too high!';
        } else if (guess < val) {
            userMsg.textContent = 'Too low!';
        } else {
            finishGame('You got it!');
            return;
        }

        if (guesses.length == 10) {
            finishGame('You lost! The number was ' + val + '.');
        }

        pastGuesses.textContent = 'Previous Guesses: ' + guesses.join(', ');
        userInput.value = '';
        userInput.focus();

    }

    function startGame(evt) {

        val = Math.floor(Math.random() * 101);
        guesses = [];

        submitBtn.disabled = false;
        userInput.disabled = false;
        startBtn.disabled = true;
        userInput.focus();
    
    }

    function finishGame(msg) {

        userMsg.textContent = msg;
        submitBtn.disabled = true;
        userInput.disabled = true;
        startBtn.disabled = false;
        startBtn.focus();

    }

    let val;
    let guesses = [];
    const form = document.getElementById('form');
    const userInput = document.getElementById('userInput');
    const startBtn = document.getElementById('start');
    const submitBtn = document.getElementById('submit');
    const userMsg = document.getElementById('msg');
    const pastGuesses = document.getElementById('pastGuesses');

    form.addEventListener('submit', checkGuess, false);
    startBtn.addEventListener('click', startGame, false);
    
    startGame();

})();
