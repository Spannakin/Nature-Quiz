//---Game Screen setup---//
//---Screens--//
var levelScreen = document.getElementById("level-select");
var gameScreen = document.getElementById("game");
var howScreen = document.getElementById("how-to-play");
var homeScreen = document.getElementsByClassName("home");
//--Buttons--//
const levelButton = document.getElementById("level-select-button");
const howButton = document.getElementById("how-to-button");
const homeButton = document.getElementsByClassName("home-button");
const easyButton = document.getElementById("easy-button");
const medButton = document.getElementById("med-button");
const hardButton = document.getElementById("hard-button"); 

//---Event listeners to move between screens---//

function levelScreenMove() {
    homeScreen.classList.add("hide");
    levelScreen.classList.remove("hide");
    howToPlay.classList.add("hide");
};
levelScreenMove();


function howScreenMove() {
    homeScreen.classList.add("hide");
    levelScreen.classList.add("hide");
    howToPlay.classList.remove("hide");
};
howScreenMove();
//howButton.addEventListener('click', howScreen);

function homeScreenMove() {
    homeScreen.classList.remove("hide");
    levelScreen.classList.add("hide");
    howToPlay.classList.add("hide");
};
homeScreenMove();
//homeButton.addEventListener('click', homeScreen);
    
/**Level Choice**/
//each choice should load question bank and lead to game screen */
function loadEasy() {
    fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple");
}

function loadMed() {
    fetch ("https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple");
}

function loadHard() {
    fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple");
}
//---Game Question Setup--//


//---Answer selection---//

//---Correct/Incorrect Answer---//

//---Score Tracker---//

//---Results---//