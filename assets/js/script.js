// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("YOU CLICKED ROCK");
            }
            if (this.getAttribute("data-type") === "paper") {
                alert("YOU CLICKED PAPER");
            }
                if (this.getAttribute("data-type") === "scissors") {
                    alert("YOU CLICKED SCISSORS");
                }
                else {
                    let icon = this.getAttribute("data-type");
                    startGame(icon)
                }
                
        })
    }

    startGame("rock");

})

function startGame(icon) {

    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";

if(icon === "rock"){
    displayRock (rock);

}

if(icon === "paper"){
    displayPaper (paper);

}

if(icon === "scissors"){
    displayScissors (scissors);

}

}


/**
 * Generates random answers from rock, paper or scissors
 */

 function randomComputerAnswer(){
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}
console.log(randomComputerAnswer(3));


function displayUserAnswer(userAnswer) {
    document.getElementsByClassName("user-answer").textContent = "User";
}


function displayComputerAnswer() {
    document.getElementsByClassName("computer-answer").textContent = "Computer";
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

function displayRock (rock){
    document.getElementsByClassName('user-Answer').textContent = rock;

}

function displayRock (paper){
    document.getElementsByClassName('user-Answer').textContent = paper;

}







// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayRock();
    } else if (gameType === "multiply") {
        displayPaper();
    } else if (gameType === "subtract" ) {
        displayScissors();
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}


function displayRock() {

    document.getElementById('user-answer').textContent = "ROCK";
}

function displayPaper() {

    document.getElementById('user-answer').textContent = "PAPER";
}

function displayScissors() {

    document.getElementById('user-answer').textContent = "SCISSORS";
}



