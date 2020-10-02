window.onload = function(){
    startQuiz();
}

var points = 0;

//Prevent default submission when enter key is pressed
$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });

//Display round one quiz board when start button is pressed
function startQuiz(){
    var startGameBtn = $("#startGameBtn")
    var rulesBox = $("#rulesBox")
    var roundOneBoard = $("#roundOneBoard")

    startGameBtn.click(function(){
        rulesBox.addClass("hidden");
        displayPoints(points);
        loadCategories();
        loadQuestions();
        roundOneBoard.removeClass("hidden")
    })
}

function loadCategories(){
    var quizTitle = localStorage.quiz;
    $.ajax({
        url : 'loadQuizCategories.php',
        type : 'POST',
        data : {
            quizTitle : quizTitle
        },
        dataType: 'json',
        success : function(data) {             
            categoryArray = document.getElementsByClassName("category");
            for (var i=0; i<categoryArray.length; i += 1){
                categoryArray[i].innerHTML = data[i].CategoryName;
            }
        },
        error : function(error)
        {
            console.log(error);
        }
    });
};

function loadQuestions(){
    $('td').click(function(){
        var questionID = ($(this).attr('id'));
        $.ajax({
            url : 'loadQuestion.php',
            type : 'POST',
            data : {
                questionID : questionID
            },
            dataType: 'json',
            success : function(data) {       
                //Gets question data to be used in question modal from json format
                var question = (data[0].Question);
                var answers = (data[0].Answers);
                var pointValue = (data[0].PointValue);

                //Shows question modal
                displayQuestion(pointValue, question, answers); 

                //Displays table cell as empty and unclickable  
                $(("#" + questionID)).empty();
                $(("#" + questionID)).addClass("unselectable");
            },
            error : function(error)
            {
                console.log(error);
            }
        });
    })
}

function displayQuestion(pointValue, question, answers){

    //Display question box with new question in it 
    $('#roundOneBoard').addClass("hidden");
    $('#questionBox').removeClass("hidden");
    $('#question').text(question);

    //Start timer for question & show timer in question box 
    var timeleft = 15;
    document.getElementById("countdown").innerHTML = "TIMER: " + timeleft + " seconds"
    $('#countdown').removeClass("hidden");

    var timer = setInterval(function(){
        if(timeleft <= 0){
            checkAnswer(pointValue, answers);
            clearInterval(timer);
            $('#countdown').addClass("hidden");
            $('#submitAnswer').prop('disabled', true);
            setTimeout(function(){
                $('#submitAnswer').prop('disabled', false);
                $('#roundOneBoard').removeClass("hidden");
                $('#questionBox').addClass("hidden");
            }, 5000);
        } else {
            document.getElementById("countdown").innerHTML = "TIMER: " + timeleft + " seconds";
        }
        timeleft -= 1;
        }, 1000);
}


//Function to check user answer against real answer
function checkAnswer(pointValue, answers){
    var userAnswer = $('#answer').val();
    userAnswer = userAnswer.toLowerCase();
    userAnswer = userAnswer.trim();
    userAnswer = userAnswer.replace(',', '');

    $('#answer').prop('disabled', true);

    if (userAnswer === answers){
        $('#answerBox').text("That is correct. \n You gain " + pointValue + " points.");
        $('#answerBox').removeClass("hidden"); 
        points = parseInt(points) + parseInt(pointValue);
        displayPoints(points);
    } else {
        $('#answerBox').multiline("That is incorrect. \n \n Correct answer:  " + answers + " \n \nYou lose " + pointValue + " points.");
        $('#answerBox').removeClass("hidden"); 
        points = parseInt(points) - parseInt(pointValue);

        displayPoints(points);
    }

    //Hide answer box and reset for next question
    setTimeout(function(){
        $('#answerBox').addClass("hidden");
        $('#answer').prop('disabled', false);
        $('#answerForm')[0].reset();
    }, 5000);
}


//Displays total points
function displayPoints(points){
    var quizPoints = document.getElementById("quizPoints")
    quizPoints.innerHTML = ("Points: " + points)
}


//Allows for multiline text to be entered into the div elements 
$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}