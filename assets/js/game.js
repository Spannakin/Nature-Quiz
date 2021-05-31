//---Game Screen setup---//
//---Screens--//
let welcomeScreen = document.getElementById(home);
let levelSelect = document.getElementById(level-select);
let howToPlay = document.getElementById(how-to-play);
let gameScreen = document.getElementById(game);
//--Buttons--//
let levelButton = document.getElementsByClassName(level-select-button);
let howToButton = document.getElementsByClassName(instructions-button);

//---Event listeners to move between screens---//

levelButton.addEventListner('click'() => {
    welcomeScreen.classList.add('hide');
    levelSelect.classList.remove('hide');
}); 


howToButton.addEventListner('click'() => {
    welcomeScreen.classList.add('hide');
    howToPlay.classList.remove('hide');
});


/** Home screen 
    gameScreen.classList.add("hide");
    levelSelect.classList.add("hide");
    howToPlay.classList.add("hide");
    screenSelectMovement();
*/
    
/**Level Choice**/
/* each chose should load question bank and lead to game screen */

const easyGame = docment.getElementsByClassName(easy-game);
const medGame = document.getElementsByClassName(med-game);
const hardGame = document.getElementsByClassName(hard-game);

function toGameScreen() {
    welcomeScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
    levelSelect.classList.add("hide");
    howToPlay.classList.add("hide");
    screenSelectMovement();
}

//---Game Question Setup--//
const question = document.getElementsByClassName(question);

//---Answer selection---//

//---Correct/Incorrect Answer---//

//---Score Tracker---//

//---Results---//