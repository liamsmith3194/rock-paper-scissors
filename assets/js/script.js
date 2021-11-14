
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gestureIcon = this.getAttribute("data-type");
                runGame(gestureIcon);
            }
        });
    }

    runGame("rock");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gestureIcon) {

    if (gestureIcon === "rock") {
        displayRock();
    } else if (gestureIcon === "paper") {
        displayPaper();
    } else if (gestureIcon === "scissors" ) {
        displayScissors();
    } else {
        alert(`Unknown game type: ${gestureIcon}`);
        throw `Unknown game type: ${gestureIcon}. Aborting!`;
    }

}

/**
 * Generates random answers from rock, paper or scissors to the console.
 */

 function randomComputerAnswer(){
    let random = ["ROCK", "PAPER", "SCISSORS"];
    return random[Math.floor(Math.random("rock", "paper", "scissors") * 3)];
    
}
console.log(randomComputerAnswer(3));

/**
 * Generates answer selected by user and displays in user circle.
 */

function displayRock() {

    document.getElementById('user-image').src = "assets/images/user-rock.png";
}

function displayPaper() {

    document.getElementById('user-answer').textContent = "PAPER";
}

function displayScissors() {

    document.getElementById('user-answer').textContent = "SCISSORS";
}

function compareAnswers(){

}

function increaseRoundWon() {

    let roundsWon = parseInt(document.getElementsByClassName("win").innerText);
    document.getElementsByClassName("win").innerText = ++roundsWon;
    
}

function increaseRoundDrawn() {

    let roundsDrawn = parseInt(document.getElementsByClassName("draw").innerText);
    document.getElementsByClassName("draw").innerText = ++roundsDrawn;
    
}

function increaseRoundLost() {

    let roundslost = parseInt(document.getElementsByClassName("lose").innerText);
    document.getElementsByClassName("lose").innerText = ++roundslost;
    
}



