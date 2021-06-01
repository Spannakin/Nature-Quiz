//---Game Screen setup---//
//---Screens--//
var levelScreen = document.getElementById("level-select");
var gameScreen = document.getElementById("game");
var howScreen = document.getElementById("how-to-play");
var homeScreen = document.getElementsByClassName("home");
//--Buttons--//
const levelButton = document.getElementById("level-select-button");
const howButton = document.getElementById("how-to-button");

//---Event listeners to move between screens---//

function levelScreen() {
    homeScreen.classList.add("hide");
    levelScreen.classList.remove("hide");
    howToPlay.classList.add("hide");
};
levelButton.addEventListener('click', levelScreen);

function howScreen() {
    homeScreen.classList.add("hide");
    levelScreen.classList.add("hide");
    howToPlay.classList.remove("hide");
};

    
/**Level Choice**/
/* each chose should load question bank and lead to game screen */


//---Game Question Setup--//


//---Answer selection---//

//---Correct/Incorrect Answer---//

//---Score Tracker---//

//---Results---//