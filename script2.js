window.onload = function(){
    startQuiz()
}

var points = 0;

//Display round one quiz board when start button is pressed
function startQuiz(){
    var startGameBtn = document.getElementById("startGameBtn")
    var rulesBox = document.getElementById("rulesBox")
    var roundOneBoard = document.getElementById("roundOneBoard")

    startGameBtn.addEventListener("click", function(){
        rulesBox.classList.add("hidden")
        getQuizContent()
        questionTimer()
        roundOneBoard.classList.remove("hidden")

    })
}

//practice with point counter
function getQuizContent(){
    points += 2;
    
    var quizPoints = document.getElementById("quizPoints")
    quizPoints.innerHTML = ("Points: " + points)
}

//timer function 
function questionTimer(){}