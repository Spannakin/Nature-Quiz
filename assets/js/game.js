//---Game Screen setup---//
const levelScreenRef = document.querySelector("#level-select");
const gameScreenRef = document.querySelector("#game");
const howScreenRef = document.querySelector("#how-to-play");
const homeScreenRef = document.querySelector("#home");
const endScreenRef = document.querySelector("#end-screen")
const levelButtonRef = document.querySelector("#level-select-button");
const howButtonRef = document.querySelector("#how-to-button");
const homeButtonRef = document.querySelector(".home-button");
const easyButtonRef = document.querySelector("#easy-button");
const medButtonRef = document.querySelector("#med-button");
const hardButtonRef = document.querySelector("#hard-button"); 
//--Game--//
const question = document.querySelector("#question");
const choice = Array.from(document.querySelectorAll(".answer-text"));
const correct_bonus = 0;
const max_questions = 5;
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];
let questions = [];

//---Event listeners to move between screens---//

const moveScreen = (type) => {
    switch(type){
        case'level':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.remove("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.add("hide");
        break;
        case'game':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.remove("hide");
            endScreenRef.classList.add("hide");
        break;
        case 'how':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.remove("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.add("hide");
        break;
        case 'end':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.remove("hide");
        break;
        case 'home':
            homeScreenRef.classList.remove("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.add("hide");
        default:
        break;
    }
};

levelButtonRef.addEventListener('click', () => moveScreen('level'));
howButtonRef.addEventListener('click', () => moveScreen('how'));
homeButtonRef.addEventListener('click', () => moveScreen('home'));

easyButtonRef.addEventListener('click', () => moveScreen('game'));
easyButtonRef.addEventListener('click', () => startGame());
medButtonRef.addEventListener('click', () => moveScreen('game'));
medButtonRef.addEventListener('click', () => startGame());
hardButtonRef.addEventListener('click', () => moveScreen('game'));
hardButtonRef.addEventListener('click', () => startGame());
    
//Level Choice
//each choice should load question bank and lead to game screen

fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
.then((res) => {
        return res.json();
    })

.then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })

    .catch((err) => {
       console.error(err);
});


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= max_questions) {
        //go to the end page
        return moveScreen('end');
    }
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choice.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choice.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();


//---Answer selection---//

//---Correct/Incorrect Answer---//
// answer feedback- correct answer button turns green
//answer feeback- button turns red

//---Score Tracker---//
//10 points per correct answer

//---Results---//
// create alert that has messgae of success
