window.onload = function(){
    var navIcon = document.getElementById("navIcon")
    navIcon.addEventListener("click", showHiddenNavMenu)
    openQuizPage()
}

//Displays nav menu when user clicks on menu icon
function showHiddenNavMenu() {
    var hiddenNavMenu = document.getElementById("hiddenNavMenu");
    if (hiddenNavMenu.classList.contains("hidden")){
        hiddenNavMenu.classList.remove("hidden")
    } else {
        hiddenNavMenu.classList.add("hidden")
    }
}

function openQuizPage() {
    //Science Quizzes Start Buttons
    var elementsStartBtn = document.getElementById("elementsStartBtn")
    var biologyStartBtn = document.getElementById("biologyStartBtn")
    
    //TV & Movie Quizzes Start Buttons
    var friendsStartBtn = document.getElementById("friendsStartBtn")

    //checks that friendsStartBtn variable is not null 
    if(friendsStartBtn) { 
        friendsStartBtn.addEventListener("click", function(){
        var quiz = null 
        localStorage.quiz = ('friendsQuiz')
        window.location = "quizTitle.html"
        })
    }

    if (localStorage.getItem('quiz') == "friendsQuiz") {
        var quizTitleUpdate = "Friends Trivia Quiz"
        var quizImageUpdate = "Images/friendsQuiz.png"
        var quizDescriptionUpdate = "This is the friends trivia description"
        getQuizPageContent(quizTitleUpdate, quizImageUpdate, quizDescriptionUpdate)
        }

    //History Quizzes Start Buttons
    var usPresidentStartBtn = document.getElementById("usPresidentStartBtn")
    var wwiiStartBtn = document.getElementById("wwiiStartBtn")
}


function getQuizPageContent(quizTitleUpdate, quizImageUpdate, quizDescriptionUpdate){
    //Elements to be changed in quiz title document 
    var quizTitle = document.getElementById("quizTitle")
    var quizImage = document.getElementById("quizImage")
    var quizDescription = document.getElementById("quizDescription")

    quizTitle.innerHTML = quizTitleUpdate
    quizImage.src = quizImageUpdate
    quizDescription.innerHTML = quizDescriptionUpdate
}