       document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            let gesture = this.getAttribute("data-type");
                alert(`you clicked ${gesture}`);
        })
    }
})



function roundNumber(){

}


function userAnswer(){

}


/**
 * Generates random answers from rock, paper or scissors
 */

function computerAnswer(){
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}
console.log(computerAnswer(3));


function displayComputerAnswer() {
    document.getElementsByClassName("computer-answer").textContent = "Hi";
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