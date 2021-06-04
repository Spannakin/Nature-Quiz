//---Game Screen setup---//
//---Screens--//
const levelScreen = document.getElementById("level-select");
const gameScreen = document.getElementById("game");
const howScreen = document.getElementById("how-to-play");
const homeScreen = document.getElementsByClassName("home");
//--Buttons--//
const levelButton = document.getElementById("level-select-button");
const howButton = document.getElementById("how-to-button");
const homeButton = document.getElementsByClassName("home-button");
const easyButton = document.getElementById("easy-button");
const medButton = document.getElementById("med-button");
const hardButton = document.getElementById("hard-button"); 
//--Game--//
const question = document.getElementById("question");
const choices = document.Array.from(document.getElementById("answer-text"));
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