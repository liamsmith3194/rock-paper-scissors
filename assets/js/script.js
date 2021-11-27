// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function () {
    let allButtons = document.getElementsByTagName("button");
    for (let button of allButtons) {
        button.addEventListener("click", function () {
            let userAnswer = this.getAttribute("data-type");
            playGame(userAnswer);
            setTimeout(function () {
                returnGame(userAnswer)
            }, 3000)
        });
    }
});



function playGame(userAnswer) {

    if (userAnswer === "Rock") {
        displayUserRock();
    } else if (userAnswer === "Paper") {
        displayUserPaper();
    } else if (userAnswer === "Scissors") {
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

function returnGame(userAnswer) {

    let options = ['Rock', 'Paper', 'Scissors'];
    let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];

    if (randomComputerAnswer === "Rock" && userAnswer === "Rock") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt's a draw!`);
            increaseRoundNumber()
            increaseRoundsDrawn()

        }, 1000);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Paper") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber()
            increaseRoundsWon()

        }, 1000);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Scissors") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            increaseRoundNumber()
            increaseRoundsLost()

        }, 1000);


    } else if (randomComputerAnswer === "Paper" && userAnswer === "Rock") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            increaseRoundNumber()
            increaseRoundsLost()

        }, 1000);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Paper") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt's a draw!`);
            increaseRoundNumber()
            increaseRoundsDrawn()

        }, 1000);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Scissors") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber()
            increaseRoundsWon()

        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Rock") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber()
            increaseRoundsWon()

        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Paper") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!`);
            increaseRoundNumber()
            increaseRoundsLost()

        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Scissors") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt's a draw!`);
            increaseRoundNumber()
            increaseRoundsDrawn()

        }, 1000);



    } else {
        alert(`Unknown game type: `);
        throw `Unknown game type: . Aborting!`;
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

var roundNumber = 1;

function increaseRoundNumber() {
    if (roundNumber < 1000000) {
        roundNumber++;
    }
    document.getElementById("round").innerHTML = roundNumber;
}

var roundsWon = 0;

function increaseRoundsWon() {
    if (roundsWon < 1000000) {
        roundsWon++;
    }
    document.getElementById("won").innerHTML = roundsWon;
}

var roundsDrawn = 0;

function increaseRoundsDrawn() {
    if (roundsDrawn < 1000000) {
        roundsDrawn++;
    }
    document.getElementById("draw").innerHTML = roundsDrawn;
}

var roundsLost = 0;

function increaseRoundsLost() {
    if (roundsLost < 1000000) {
        roundsLost++;
    }
    document.getElementById("loss").innerHTML = roundsLost;
}

function focusInput() {
    document.getElementById('myText').focus();
  }
  function blurInput() {
    document.getElementById('myText').blur();
  }