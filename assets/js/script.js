// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function () {
    let delayComputerAnswer = document.getElementsByTagName("button");

    for (let button of delayComputerAnswer) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                returnGame(computerAnswer);
            } else {
                let userAnswer = this.getAttribute("data-type");
                playGame(userAnswer);
            }
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click setTimeout(returnGame, 3000)", function () {
            if (this.getAttribute("data-type") === "submit") {
                playGame(userAnswer);
            } else {
                let computerAnswer = this.getAttribute("data-type");
                returnGame(computerAnswer);
            }
        });
    }

});

function playGame(userAnswer) {

    if (userAnswer === "rock") {
        displayUserRock();
    } else if (userAnswer === "paper") {
        displayUserPaper();
    } else if (userAnswer === "scissors") {
        displayUserScissors();
    } else {
        alert(`Unknown game type: ${userAnswer}`);
        throw `Unknown game type: ${userAnswer}. Aborting!`;
    }

}

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


function returnGame(computerAnswer) {

    let options = ['Rock', 'Paper', 'Scissors'];
    let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];
    let userAnswer = document.getElementById('computer-image')

    if (randomComputerAnswer === "Rock") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function(){ alert(`You played: ${userAnswer}\nThe computer played: ${randomComputerAnswer}`); }, 1000);

    } else if (randomComputerAnswer === "Paper") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function(){ alert(`You played: ${userAnswer}\nThe computer played: ${randomComputerAnswer}`); }, 1000);

    } else if (randomComputerAnswer === "Scissors") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function(){ alert(`You played: ${userAnswer}\nThe computer played: ${randomComputerAnswer}`); }, 1000);

    } else {
        alert(`Unknown game type: ${computerAnswer}`);
        throw `Unknown game type: ${computerAnswer}. Aborting!`;
    }

}

function displayComputerRock() {

    document.getElementById('computer-image').src = 'assets/images/computer-rock.png';

}

function displayComputerPaper() {

    document.getElementById('computer-image').src = 'assets/images/computer-paper.png';

}

function displayComputerScissors() {

    document.getElementById('computer-image').src = 'assets/images/computer-scissors.png';

}

function compareAnswers() {

}

function increaseRoundNumber(){
        
    let previousRound = parseInt(document.getElementById("round").innerText);
    document.getElementById("round").innerText = ++previousRound;
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
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}