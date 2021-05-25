//---Game Screen setup---//
let screenSelect = document.getElementsByClassName(game-select-page);
let welcomeScreen = document.getElementById(home);
let gameScreen = document.getElementById(game);
let levelSelect = document.getElementById(level-select)
let howToPlay = document.getElementById(how-to-play)

function toWelcomeScreen() {
    welcomeScreen.classList.remove("hide");
    gameScreen.classList.add("hide");
    levelSelect.classList.add("hide");
    howToPlay.classList.add("hide");
    screenSelectMovement();
}

function toGameScreen() {
    welcomeScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
    levelSelect.classList.add("hide");
    howToPlay.classList.add("hide");
    screenSelectMovement();
}

function toLevelSelectScreen() {
    welcomeScreen.classList.add("hide");
    gameScreen.classList.add("hide");
    levelSelect.classList.remove("hide");
    howToPlay.classList.add("hide");
    screenSelectMovement();
}

function toHowToPlayScreen() {
    welcomeScreen.classList.add("hide");
    gameScreen.classList.add("hide");
    levelSelect.classList.add("hide");
    howToPlay.classList.remove("hide");
    screenSelectMovement();
    
//---Level Choice
const easyGame = docment.getElementsByClassName(easy-game);
const medGame = document.getElementsByClassName(med-game);
const hardGame = document.getElementsByClassName(hard-game);

//---Game Question Setup--//
const question = document.getElementsByClassName(question);

//---Answer selection---//

//---Correct/Incorrect Answer---//

//---Score Tracker---//

//---Results---//

