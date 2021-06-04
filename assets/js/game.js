//---Game Screen setup---//
//---Screens--//
const levelScreen = document.querySelector("#level-select");
const gameScreen = document.querySelector("#game");
const howScreen = document.querySelector("#how-to-play");
const homeScreen = document.gquerySelector(".home");
//--Buttons--//
const levelButton = document.querySelector("#level-select-button");
const howButton = document.querySelector("#how-to-button");
const homeButton = document.querySelector(".home-button");
const easyButton = document.querySelector("#easy-button");
const medButton = document.querySelector("#med-button");
const hardButton = document.querySelector("#hard-button"); 
//--Game--//
const question = document.querySelector("#question");
const choices = Array.from(document.querySelector(".answer-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];
let questions = [];

//--Score--//

//---Event listeners to move between screens---//

function levelScreenMove() {
    homeScreen.classList.add("hide");
    levelScreen.classList.remove("hide");
    howScreen.classList.add("hide");
};
levelButton.addEventListener('click', levelScreenMove);


function howScreenMove() {
    homeScreen.classList.add("hide");
    levelScreen.classList.add("hide");
    howScreen.classList.remove("hide");
};
howButton.addEventListener('click', howScreenMove);

function homeScreenMove() {
    homeScreen.classList.remove("hide");
    levelScreen.classList.add("hide");
    howScreen.classList.add("hide");
};
homeButton.addEventListener('click', homeScreenMove);
    
/**Level Choice**/
//each choice should load question bank and lead to game screen */
const fetchedEasyQuestions = fetchData(`https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple`);
fetchedEasyQuestions.then((data) => {
    questions = data.results.map(fetchedEasyQuestions => {
        const easyFormattedQuestion = {
            question: fetchedEasyQuestions.question,
        };
     const answerChoices = [...fetchedEasyQuestions.incorrect_answers];
            formattedEasyQuestion.answer = Math.floor(Math.random() * 5) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedEasyQuestion['choice' + (index + 1)] = choice;
            });

            return formattedEasyQuestion;
        });
         //startGame();----NEED TO MAKE THIS----
    })
    .catch((err) => {
        console.error(err);
    });

const fetchedMedQuestions = (`https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple`);

const fetchedHardQuestions = (`https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple`);

//---Game Question Setup--//
// need to create and if/else for correct level question bank to load

//---Answer selection---//

//---Correct/Incorrect Answer---//
// answer feedback- correct answer button turns green
//answer feeback- button turns red

//---Score Tracker---//
//10 points per correct answer

//---Results---//
// create alert that has messgae of success
// option to play again?