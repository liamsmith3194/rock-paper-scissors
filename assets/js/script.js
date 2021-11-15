
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let userAnswer = this.getAttribute("data-type");
                runGame(userAnswer);
            }
        });
    }

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(userAnswer) {

    if (userAnswer === "rock") {
        displayUserRock();
    } else if (userAnswer === "paper") {
        displayUserPaper();
    } else if (userAnswer === "scissors" ) {
        displayUserScissors();
    } else {
        alert(`Unknown game type: ${userAnswer}`);
        throw `Unknown game type: ${userAnswer}. Aborting!`;
    }

}

/**
 * Generates random answers from rock, paper or scissors to the console.
 */

 function randomComputerAnswer(){

    let computerAnswer = ["ROCK", "PAPER", "SCISSORS"];
    return computerAnswer[Math.floor(Math.random("rock", "paper", "scissors") * 3)];
    
}
console.log(randomComputerAnswer(3));

/**
 * Generates answer selected by user and displays correct image.
 */

function displayUserRock() {

    document.getElementById('user-image').src = 'assets/images/user-rock.png';
}

function displayUserPaper() {

    document.getElementById('user-image').src = 'assets/images/user-paper.png';
    
}

function displayUserScissors() {

    document.getElementById('user-image').src = 'assets/images/user-scissors.png';
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

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

 

 // The function name "runGame" will not work for both changing it will produce the computer answer keeping in changes the user answer.
    
 var words = ['Rock', 'Paper', 'Scissors'];
 var word = words[Math.floor(Math.random() * words.length)];

 if (gameType === "rock") {
     displayComputerRock(word);
 } else if (gameType === "paper") {
     displayComputerScissors(word);
 } else if (gameType === "scissors" ) {
     displayComputerPaper(word);
 } else {
     alert(`Unknown game type: ${gameType}`);
     throw `Unknown game type: ${gameType}. Aborting!`;
 }

}

function displayComputerRock(computeranswer) {

    document.getElementById('test').textContent = computeranswer;
    
}

function displayComputerPaper(computeranswer) {

    document.getElementById('test').textContent = computeranswer;

}

function displayComputerScissors(computeranswer) {

    document.getElementById('test').textContent = computeranswer;

}