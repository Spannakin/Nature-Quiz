//---Game Screen setup---//
const levelScreenRef = document.querySelector("#level-select");
const gameScreenRef = document.querySelector("#game");
const howScreenRef = document.querySelector("#how-to-play");
const homeScreenRef = document.querySelector("#home");
const endScreenRef = document.querySelector("#end-screen")
const levelButtonRef = document.querySelector("#level-select-button");
const howButtonRef = document.querySelector("#how-to-button");
const homeButtonLevelRef = document.querySelectorAll("#homebutton-level");
const homeButtonGameRef = document.querySelectorAll("#homebutton-game");
const homeButtonHowRef = document.querySelectorAll("#homebutton-how");
const homeButtonEndRef = document.querySelectorAll("#homebutton-end");
const easyButtonRef = document.querySelector("#easy-button");
const medButtonRef = document.querySelector("#med-button");
const hardButtonRef = document.querySelector("#hard-button"); 
//--Game--//
const question = document.querySelector("#question");
const choice = Array.from(document.querySelectorAll(".answer-text"));
const correct_bonus = 10;
const max_questions = 5;
const scoreText = document.querySelector('#score');
const endScoreRef = document.querySelector('#end-score');
let score = 0;
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
        case 'end':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.add("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.remove("hide");
        break;
        case 'how':
            homeScreenRef.classList.add("hide");
            levelScreenRef.classList.add("hide");
            howScreenRef.classList.remove("hide");
            gameScreenRef.classList.add("hide");
            endScreenRef.classList.add("hide");
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
homeButtonLevelRef.addEventListener('click', () => moveScreen('home'));
homeButtonGameRef.addEventListener('click', () => moveScreen('home'));
homeButtonHowRef.addEventListener('click', () => moveScreen('home'));
homeButtonEndRef.addEventListener('click', () => moveScreen('home'));
console.log(homeButtonRef);

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


const endGame = () => {
     moveScreen('end');
    const maxScore = max_questions * correct_bonus;
    endScoreRef.innerText = score + " / " + maxScore;

    if (score === (max_questions * correct_bonus)) {
        endScoreRef.innerText = "Congratulations! A perfect score!";
    } else if (score >= ((max_questions / 5 * 4 ) * correct_bonus)) {
        endScoreRef.innerText = "Congratulations! Almost perfect!";
    } else if (score > ((max_questions / 2) * correct_bonus)) {
        endScoreRef.innerText = "Congratulations! That's better than most players!";
    } else if (score >= ((max_questions/5) * correct_bonus)){
        endScoreRef.innerText = "Not bad, try again and beat your own score!";
    } else {
        endScoreRef.innerText = "oh dear! Maybe you need to revise the subject.";
    } 
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= max_questions) {
        //go to the end page
        //return endGame();
    }
    questionCounter++;
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

        const classToApply =  selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === 'correct') {
            incrementScore(correct_bonus);
        }

        selectedChoice.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);  
    });
});

startGame();

//---Score Tracker---//
//10 points per correct answer

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
