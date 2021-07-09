var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

// function to build quiz
function buildQuiz(){}

// function to show results
function showResults(){}

// to display the quiz
buildQuiz();

// show results when submit button is pressed 
submitButton.addEventListener("click", showResults);

// quiz questions
var quizQuestions = [
    {
    // 1st quiz question
    question: "Commonly used data types in JavaScript DO NOT include:",
    asnwers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
    correctAnswer: "c"
},
    {
    // 2nd quiz question
    question: "The condition in an if / else statement is enclosed with ________.",
    asnwers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets"
    },
    correctAnswer: "c"
},
    {
    // 3rd quiz question
    question: "Arrays in JavaScript can be used to store ________.",
    asnwers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above"
    },
    correctAnswer: "c"
},
    {
    // 4th quiz question
    question: "String values must be enclosed within ________ when being assigned to variables",
    asnwers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis"
    },
    correctAnswer: "c"
},
    {
    // 5th quiz question
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    asnwers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log"
    },
    correctAnswer: "c"
    }
];
