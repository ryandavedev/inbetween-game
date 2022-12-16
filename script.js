let firstNumber = "";
let secondNumber = "";
let thirdNumber;

let win = "You Win!";
let lose = "You Lose!";

const howToPlay = document.querySelector(".mechanics");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

howToPlay.addEventListener("click", () => {
    modal.classList.add("open");
    overlay.classList.add("open");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
    overlay.classList.remove("open");
});

const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const thirdCard = document.getElementById("third-number");
const resultsLog = document.getElementById("results");
const startBtn = document.querySelector(".start--btn");

const homePage = document.querySelector(".home-page");
const main = document.querySelector(".main");

const drawNumber = document.querySelector("[data-draw-number]");
const call = document.querySelector("[data-call]");
const tryAgain = document.querySelector("[data-try-again]");
const callLower = document.querySelector("[data-lower]");
const callHigher = document.querySelector("[data-higher]");

tryAgain.addEventListener("click", again);
call.addEventListener("click", callButton);
drawNumber.addEventListener("click", getNewNumber);
startBtn.addEventListener("click", newGame);
callLower.addEventListener("click", callLow);
callHigher.addEventListener("click", callHigh);

tryAgain.classList.add("hide");
call.classList.add("hide");
callLower.classList.add("hide");
callHigher.classList.add("hide");

function newGame() {
    main.style.display = "block";
    homePage.style.display = "none";
}

function getNewNumber() {
    firstNumber = getRandom();
    secondNumber = getRandom();
    firstCard.textContent = firstNumber;
    secondCard.textContent = secondNumber;

    drawNumber.textContent = "New Number";

    if (firstNumber === secondNumber) {
        callLower.classList.remove("hide");
        callHigher.classList.remove("hide");
    } else if (firstNumber !== secondNumber) {
        call.classList.remove("hide");
    }
}

function callButton() {
    thirdNumber = getRandom();
    thirdCard.textContent = thirdNumber;
    if (
        (thirdNumber >= firstNumber && secondNumber >= thirdNumber) ||
        (thirdNumber <= firstNumber && secondNumber <= thirdNumber)
    ) {
        resultsLog.textContent = win;
    } else {
        resultsLog.textContent = lose;
    }

    drawNumber.classList.add("hide");
    tryAgain.classList.remove("hide");
    call.classList.add("hide");
}

function callLow() {
    thirdNumber = getRandom();
    thirdCard.textContent = thirdNumber;
    if (thirdNumber <= firstNumber && thirdNumber <= secondNumber) {
        resultsLog.textContent = win;
    } else {
        resultsLog.textContent = lose;
    }

    drawNumber.classList.add("hide");
    tryAgain.classList.remove("hide");
    call.classList.add("hide");
}

function callHigh() {
    thirdNumber = getRandom();
    thirdCard.textContent = thirdNumber;
    if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
        resultsLog.textContent = win;
    } else {
        resultsLog.textContent = lose;
    }

    drawNumber.classList.add("hide");
    tryAgain.classList.remove("hide");
    call.classList.add("hide");
}

function getRandom() {
    let randomIndex = Math.floor(Math.random() * 13) + 1;
    return randomIndex;
}

function again() {
    thirdCard.textContent = "";
    firstCard.textContent = "";
    secondCard.textContent = "";
    resultsLog.textContent = "";
    drawNumber.textContent = "Draw Number";

    callLower.classList.add("hide");
    callHigher.classList.add("hide");
    drawNumber.classList.remove("hide");
    tryAgain.classList.add("hide");
    call.classList.add("hide");
}

const sideMenu = document.getElementById("side-menu");

function menu() {
    sideMenu.innerHTML = "<button>hey</button>";
}
