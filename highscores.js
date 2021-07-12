let highScoresList = document.querySelector("#highScoresList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];



highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

let initials = document.querySelector("#initials");
let saveScoreBtn = document.querySelector("#saveScoreBtn");
let finalScore = document.querySelector("#finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");


let MAX_HIGH_SCORES = 100;

finalScore.innerText = mostRecentScore;

saveHighScore = e => {
    e.preventDefault();
    // create score object
    let score = {
        score: mostRecentScore,
        name: initials.value
    }
    // initialize high scores 
    var highscores = [];
    highscores = JSON.parse(localStorage["highScores"]);

    // insert most recent score
    highscores.push(score);

    // sort scores
    highscores.sort((a,b) => {
        return b.score - a.score;
    })

    // max limit of high scores
    highscores.splice(10);

    // setting new array in localStorage
    localStorage.setItem("highScores", JSON.stringify(highscores))
    
    // displaying all scores including most recent 
    highScoresList = document.querySelector("#highScoresList");
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScoresList.innerHTML = 
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")

    
    
}