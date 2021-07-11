let question = document.querySelector("#question");
let choices = Array.from(document.querySelectorAll(".choice-text"));
let progressText = document.querySelector("#progressText");
let scoreText = document.querySelector("#score");
let qustionNumber = document.querySelector("#questionNumber");
let timeEl = document.querySelector("#timer");
let timerId = setInterval(clockTick, 1000);
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
let currentTime = 120;


// Quiz questions
let questions = [
    // Question #1
    {
        question: "Commonly used data types in JavaScript DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    // Question #2
    {
        question: "CSS stands for ______.",
        choice1: "Cascading Style Sheets",
        choice2: "Coding Style Sheets",
        choice3: "Captivating Style Sheets",
        choice4: "Central Style Sheets",
        answer: 1,
    },
    // Question #3
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4,
    },
    // Question #4
    {
        question: "What HTML tag is used to define an unordered list that is bulleted?",
        choice1: "<u>",
        choice2: "<li>",
        choice3: "<p>",
        choice4: "<ul>",
        answer: 4,
    },
    // Question #5
    {
        question: "Which of the following is NOT used as a selector in CSS:",
        choice1: "*",
        choice2: "=",
        choice3: "#",
        choice4: ".",
        answer: 2,
    },
]
// 
let SCORE_POINTS = 20;
let MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// Keep track of score
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        
        return window.location.assign("highscores.html");
    }

    // Question # counter
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    // randomize question order
    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        let number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" :
        "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        else{
            currentTime -=10;
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000);
    });
})

// score # incrementor 
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

// time decrement and game ending prompt due to timer running out
function clockTick() {
    currentTime --;
    timeEl.textContent=`Timer: ${currentTime}`;
    if (currentTime <= 0) {
        return window.location.assign("/highscores.html");
    }
}

function addScores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
}

startGame();