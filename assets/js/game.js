//---Game Screen setup---//
const levelScreenRef = document.querySelector("#level-select");
const gameScreenRef = document.querySelector("#game");
const howScreenRef = document.querySelector("#how-to-play");
const homeScreenRef = document.querySelector("#home");
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

//---Event listeners to move between screens---//

choicesRef.forEach((choices) => choices.addEventListener('click', homeScreenRef));

const moveScreen = (type) => {
    switch(type){
        case'level':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.remove("hide");
            howScreenRef.classList.add("hide");
        break;
        case'game':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.remove("hide");
        break;
        case 'how':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.remove("hide");
        break;
        case 'home':
            homeScreenRef.classList.remove("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
        default:
        break;
    }
};

levelButtonRef.addEventListener('click', () => moveScreen('level'));
howButtonRef.addEventListener('click', () => moveScreen('how'));
homeButtonRef.addEventListener('click', () => moveScreen('home'));

easyButtonRef.addEventListener('click', () => moveScreen('game'));
medButtonRef.addEventListener('click', () => moveScreen('game'));
hardButtonRef.addEventListener('click', () => moveScreen('game'));
    
//Level Choice
//each choice should load question bank and lead to game screen 
const fetchedQuestions = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&category=17&difficulty=${difficulty}&type=multiple`)
    then((data) => {
        formattedQuestion(data)
    })
    .catch((err) => {
        console.error(err);
    });
};

const formattedQuestion = (ListOfQuestions) => {
    questions = listOfQuestions.results.map((fetchedQuestions) => {
        const answerChoices = [... fetchedQuestions.incorrect_answers, FetchedQuestions.correct_answer];
        const shuffleQuestions = suffledArr(answerChoices);
        answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correctAnswer);
        answerChoices.forEach((choice, index) => {
            suffledAnswers['choice' + (index + 1)] = choice;
            return formattedQuestion;
        });

        startGame();
    });

    //catch((err) => {
        console.error(err);
};
const fetchedMedQuestions = (`https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple`);

const fetchedHardQuestions = (`https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple`);

//---Game Question Setup--//
// need to create and if/else for correct level question bank to load
startGame = () => {
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};


//---Answer selection---//

//---Correct/Incorrect Answer---//
// answer feedback- correct answer button turns green
//answer feeback- button turns red

//---Score Tracker---//
//10 points per correct answer

//---Results---//
// create alert that has messgae of success
// option to play again?