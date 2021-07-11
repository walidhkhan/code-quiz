// highscores part 2 start--------------------------------------------------------------------

let highScoresList = document.querySelector("#highScoresList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];



// highScoresList.innerHTML = 
// highScores.map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`
// }).join("")
// highscores part 2 end-------------------------------------------------------------------------

// highscores part 1 start---------------------------------------------------------------------

let initials = document.querySelector("#initials");
let saveScoreBtn = document.querySelector("#saveScoreBtn");
let finalScore = document.querySelector("#finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");
// -------------------
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

let MAX_HIGH_SCORES = 100;

finalScore.innerText = mostRecentScore;

saveHighScore = e => {
    e.preventDefault();
alert('here2');
    let score = {
        score: mostRecentScore,
        name: initials.value
    }

    highscores.push(score);

    highscores.sort((a,b) => {
        return b.score - a.score;
    })

    highscores.splice(5);



    localStorage.setItem("highScores", JSON.stringify(highscores))
    alert('here3');

    window.location.assign("")
    alert('here4');


    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    alert('hereFINAL');
        highScoresList.innerHTML = 
    highScores1.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")
    
    // for (i=0; i < highScores1.length; i++) {
    //     var score1 = highScores1[i];
    //     alert(score1.score);
    // }
    
}

// highscores part 1 end--------------------------------------------------------------------------