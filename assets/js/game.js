//---Game Screen setup---//
//---Screens--//
var levelScreen = document.getElementById("level-select");
var gameScreen = document.getElementById("game");
var homeScreen = document.getElementsByClass("home");
//--Buttons--//


//---Event listeners to move between screens---//
function levelScreenMovement(event) {
    levelScreen.classList.remove('hide');
    homeScreen.classList.add('hide');
};
let levelButton = document.getElementById("level-select-button");
levelButton.addEventListener('click', levelScreenMovement)
    
/**Level Choice**/
/* each chose should load question bank and lead to game screen */


//---Game Question Setup--//


//---Answer selection---//

//---Correct/Incorrect Answer---//

//---Score Tracker---//

//---Results---//