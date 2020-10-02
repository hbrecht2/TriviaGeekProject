window.onload = function(){
    var navIcon = document.getElementById("navIcon")
    navIcon.addEventListener("click",showHiddenNavMenu)
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
    var elementsStartBtn = document.getElementById("elementsStartBtn");
    var biologyStartBtn = document.getElementById("biologyStartBtn");

    if(elementsStartBtn) { 
        elementsStartBtn.addEventListener("click", function(){
            localStorage.quiz = ('elementsQuiz')
            window.location = "quizTitle.php"
            })
    };
    
    if(biologyStartBtn) { 
        biologyStartBtn.addEventListener("click", function(){
            localStorage.quiz = ('biologyQuiz');
            window.location = "quizTitle.php";
            })
    ;}
    
    //TV & Movie Quizzes Start Buttons
    var friendsStartBtn = document.getElementById('friendsStartBtn');

    //checks that friendsStartBtn variable is not null and stores quiz name in local storage 
    if(friendsStartBtn) { 
        friendsStartBtn.addEventListener("click", function(){
            localStorage.quiz = ('friendsQuiz');
            window.location = "quizTitle.php";
            })
    }

    //History Quizzes Start Buttons
    var usPresidentStartBtn = document.getElementById("usPresidentStartBtn")
    var wwiiStartBtn = document.getElementById("wwiiStartBtn")
}

