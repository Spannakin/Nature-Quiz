const levelScreenRef = document.querySelector("#level-select");
const gameScreenRef = document.querySelector("#game");
const howScreenRef = document.querySelector("#how-to-play");
const homeScreenRef = document.querySelector("#home");
const endScreenRef = document.querySelector("#end-screen")
const levelButtonRef = document.querySelector("#level-select-button");
const howButtonRef = document.querySelector("#how-to-button");
const homeButtonRef = document.querySelectorAll(".home-button");
const easyButtonRef = document.querySelector("#easy-button");
const medButtonRef = document.querySelector("#med-button");
const hardButtonRef = document.querySelector("#hard-button"); 
const question = document.querySelector("#question");
const choice = Array.from(document.querySelectorAll(".answer-text"));
const correctBonus = 10;
const maxQuestions = 5;
const scoreTextRef = document.querySelectorAll('.score');
const endScoreRef = document.querySelector('#end-score');
let score = 0;
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];
let questions = [];

/**
 * Event listeners to move between screens
 * @ param type
 * */

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

 Array.from(homeButtonRef).forEach(function(homeButtonRef) {
      homeButtonRef.addEventListener('click', () => moveScreen('home'));
    });

easyButtonRef.addEventListener('click', () => moveScreen('game'));
easyButtonRef.addEventListener('click', () => startGame());
medButtonRef.addEventListener('click', () => moveScreen('game'));
medButtonRef.addEventListener('click', () => startGame());
hardButtonRef.addEventListener('click', () => moveScreen('game'));
hardButtonRef.addEventListener('click', () => startGame());
    
/*Calling information 
* from the API
*/

const getAPIData = () => {
fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
.then((res) => {
        return res.json();
    })

.then((loadedQuestions) => {
        formatQuestions(loadedQuestions)
        });
    }
    
.then(() => {startGame()
})
    .catch((err) => {
       console.error(err);
});


/*Format Question
* data from API fomatted for quiz
*/
const formatQusetions = (listOfQuestions) => {
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
getAPIData();

/* Start game function */

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

//---Score Tracker---//
incrementScore = (num) => {
    score += num;
    scoreTextRef.innerHTML = score;
};

//Get new question function
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= maxQuestions) {
        //go to the end page
        endGame();
    }
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choice.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

//Answer choices and selection
choice.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =  selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if (classToApply === 'correct') {
            incrementScore(correctBonus);
        }

        selectedChoice.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);  
    });
});

//Results/end screen//
function endGame() {
    homeScreenRef.classList.add("hide");
    levelScreenRef.classList.add("hide");
    howScreenRef.classList.add("hide");
    gameScreenRef.classList.add("hide");
    endScreenRef.classList.remove("hide"); 
    const maxScore = maxQuestions * correctBonus;
    endScoreRef.innerHTML = score + " / " + maxScore;

    if (score === (maxQuestions * correctBonus)) {
        endScoreRef.innerHTML = "Congratulations! A perfect score!";
    } else if (score >= ((maxQuestions / 5 * 4 ) * correctBonus)) {
        endScoreRef.innerHTML = "Congratulations! Almost perfect!";
    } else if (score > ((maxQuestions / 2) * correctBonus)) {
        endScoreRef.innerHTML = "Congratulations! That's better than most players!";
    } else if (score >= ((maxQuestions/5) * correctBonus)){
        endScoreRef.innerHTML = "Not bad, try again and beat your own score!";
    } else {
        endScoreRef.innerHTML = "oh dear! Maybe you need to revise the subject.";
    } 
};
}
