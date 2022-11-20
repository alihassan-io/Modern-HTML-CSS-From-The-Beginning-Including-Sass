/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector(".game-content"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    userInput = document.getElementById("value"),
    submitBtn = document.getElementById("submit"),
    message = document.querySelector(".message");

// Assigning UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Event Listener for user submit
submitBtn.addEventListener("click", function () {
    // Input value
    let userGuess = parseInt(userInput.value);

    // Validating User Input
    if (isNaN(userGuess) || userGuess < min || userGuess > max) {
        // Resetting input field
        userInput.value = "";

        // User input is not valid
        userInput.style.borderColor = "red";
        setMessage(`Please enter number between ${min} and ${max}`, "red");
    } else {
        // Input is valid
        userInput.style.borderColor = "#888";

        if (userGuess === winningNum) {
            // Game End-User win
            gameEnd(true, `${winningNum} is correct, YOU WIN!`);
        } else {
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                // Game End-User loose
                gameEnd(false, `Game over, You lose. Correct number was ${winningNum}`);

            } else if (guessesLeft > 0) {
                // Resetting input field
                userInput.value = "";
                // Game Continue-User loose
                setMessage(`${userGuess} is not correct, Attempts left: ${guessesLeft}`, "red");
            }
        }
    }
})

// Event Listener for Play Again (Event Delegation)
game.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("play-again")) {
        window.location.reload();
    }
})

// Function for show user a message
function setMessage(displayThis, color) {
    message.textContent = displayThis;
    message.style.color = color;
}

// Game End
function gameEnd(win, displayThis) {
    let color;
    win === true ? color = "green" : color = "red";
    userInput.disabled = true;
    userInput.style.borderColor = color;
    setMessage(displayThis, color);
    playAgain();
}

// Play Again
function playAgain() {
    submitBtn.className = "play-again";
    submitBtn.value = "Play Again";
}

// Generate Random Number
function getRandomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}