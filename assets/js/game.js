//---Game Screen setup---//
//---Screens--//
const levelScreenRef = document.querySelector("#level-select");
const gameScreenRef = document.querySelector("#game");
const howScreenRef = document.querySelector("#how-to-play");
const homeScreenRef = document.gquerySelector(".home");
//--Buttons--//
const levelButtonRef = document.querySelector("#level-select-button");
const howButtonRef = document.querySelector("#how-to-button");
const homeButtonRef = document.querySelector(".home-button");
const easyButtonRef = document.querySelector("#easy-button");
const medButtonRef = document.querySelector("#med-button");
const hardButtonRef = document.querySelector("#hard-button"); 
//--Game--//
const questionRef = document.querySelector("#question");
const choicesRef = Array.from(document.querySelector(".answer-text"));
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];
let questions = [];

//--Score--//

//---Event listeners to move between screens---//

const moveScreen = (type) => {
    switch(type){
        case'level':
            homeScreen.classList.add("hide");
            levelScreen.classList.remove("hide");
            howScreen.classList.add("hide");
        break;
        case 'how':
            homeScreen.classList.add("hide");
            evelScreen.classList.add("hide");
            howScreen.classList.remove("hide");
        break;
        case 'home':
            homeScreen.classList.remove("hide");
            levelScreen.classList.add("hide");
            howScreen.classList.add("hide");
        default;
        break;
    }
}

levelButton.addEventListener('click', levelScreenMove);
howButton.addEventListener('click', howScreenMove);
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