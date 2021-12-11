document.addEventListener("DOMContentLoaded", function () {
    let allButtons = document.getElementsByClassName("button-style");
    for (let button of allButtons) {
        button.addEventListener("click", function () {
            let userAnswer = this.getAttribute("data-type");
            playGame(userAnswer);

            setTimeout(function () {
                returnGame(userAnswer);
            }, 4000);
        });
    }
});

function playGame(userAnswer) {

    switch (userAnswer) {
        case "Rock":
            displayUserRock();
            break;
        case "Paper":
            displayUserPaper();
            break;
        case "Scissors":
            displayUserScissors();
            break;
        default:
            alert(`Game error, please try again later.`);
            throw `Game error! Please investigate`;
    }

    threeSecondTimer();
}

function threeSecondTimer() {
    let timeleft = 3;
    let downloadTimer = setInterval(function () {

        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "";
        } else {
            document.getElementById("countdown").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

function displayUserRock() {

    document.getElementById("user-image").src = "assets/images/user-rock.webp";
}

function displayUserPaper() {

    document.getElementById("user-image").src = "assets/images/user-paper.webp";
}

function displayUserScissors() {

    document.getElementById("user-image").src = "assets/images/user-scissors.webp";
}

function returnGame(userAnswer) {

    let options = ["Rock", "Paper", "Scissors"];
    let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];

    if (randomComputerAnswer === "Rock" && userAnswer === "Rock") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            increaseRoundNumber();
            increaseRoundsDrawn();
        }, 1000);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Paper") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber();
            increaseRoundsWon();
        }, 1000);

    } else if (randomComputerAnswer === "Rock" && userAnswer === "Scissors") {
        displayComputerRock(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            increaseRoundNumber();
            increaseRoundsLost();
        }, 1000);


    } else if (randomComputerAnswer === "Paper" && userAnswer === "Rock") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            increaseRoundNumber();
            increaseRoundsLost();
        }, 1000);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Paper") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            increaseRoundNumber();
            increaseRoundsDrawn();
        }, 1000);

    } else if (randomComputerAnswer === "Paper" && userAnswer === "Scissors") {
        displayComputerPaper(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber();
            increaseRoundsWon();
        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Rock") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            increaseRoundNumber();
            increaseRoundsWon();
        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Paper") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            increaseRoundNumber();
            increaseRoundsLost();
        }, 1000);

    } else if (randomComputerAnswer === "Scissors" && userAnswer === "Scissors") {
        displayComputerScissors(randomComputerAnswer);
        setTimeout(function () {
            alert(`You played: ${userAnswer} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            increaseRoundNumber();
            increaseRoundsDrawn();
        }, 1000);

    } else {
        alert(`Game error, please try again later.`);
        throw `Game error! Please investigate`;
    }

}

function displayComputerRock() {

    document.getElementById("computer-image").src = "assets/images/computer-rock.webp";

}

function displayComputerPaper() {

    document.getElementById("computer-image").src = "assets/images/computer-paper.webp";

}

function displayComputerScissors() {

    document.getElementById("computer-image").src = "assets/images/computer-scissors.webp";

}

let roundNumber = 1;

function increaseRoundNumber() {
    if (roundNumber < 1000000) {
        roundNumber++;
    }
    document.getElementById("round").innerHTML = roundNumber;
}

let roundsWon = 0;

function increaseRoundsWon() {
    if (roundsWon < 1000000) {
        roundsWon++;
    }
    document.getElementById("win").innerHTML = roundsWon;
}

let roundsDrawn = 0;

function increaseRoundsDrawn() {
    if (roundsDrawn < 1000000) {
        roundsDrawn++;
    }
    document.getElementById("draw").innerHTML = roundsDrawn;
}

let roundsLost = 0;

function increaseRoundsLost() {
    if (roundsLost < 1000000) {
        roundsLost++;
    }
    document.getElementById("lose").innerHTML = roundsLost;
}