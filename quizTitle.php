<!DOCTYPE html>
<html>
    <head>
        <title id="title"></title>

        <!-- Links to outside resources-->
        <link href="styleSheet.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@669&display=swap" rel="stylesheet">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="script2.js"></script>
    </head>
    <body>
        <div class="quizInformation">
            <h1 id="quizTitle">Quiz - Round 1</h1>
            <h1 id="quizPoints">Points: 0</h1> 
        </div>

        <div id="rulesBox" class="rulesBox">
            <h3>Game Play:</h3>
            <p>To start, press the button below. Once started, you will be shown a grid of categories and point values. 
                You may choose any point value to get your first question. 
                You have 15 seconds to correctly answer the question. 
                Spelling counts! If you answer correctly, you receive the amount of points the question was worth. 
                If you answer incorrectly, those points are removed from your total score which is displayed in the top right corner. 
                Good luck!
            </p>
            <button id="startGameBtn">Start Quiz</button>
        </div>

        <div id="roundOneBoard" class="quizBoard hidden">
            <table class="quizTable">
                <tr>
                  <th id="cat1" class="newQuestion">Category 1</th>
                  <th id="cat2" class="newQuestion">Category 2</th>
                  <th id="cat3" class="newQuestion">Category 3</th>
                  <th id="cat4" class="newQuestion">Category 4</th>
                  <th id="cat5" class="newQuestion">Category 5</th>
                  <th id="cat6" class="newQuestion">Category 6</th>
                </tr>
                <tr>
                  <td id="cat1200" class="newQuestion">200</td>
                  <td id="cat2200" class="newQuestion">200</td>
                  <td id="cat3200" class="newQuestion">200</td>
                  <td id="cat4200" class="newQuestion">200</td>
                  <td id="cat5200" class="newQuestion">200</td>
                  <td id="cat6200" class="newQuestion">200</td>
                </tr>
                <tr>
                    <td id="cat1400" class="newQuestion">400</td>
                    <td id="cat2400" class="newQuestion">400</td>
                    <td id="cat3400" class="newQuestion">400</td>
                    <td id="cat4400" class="newQuestion">400</td>
                    <td id="cat5400" class="newQuestion">400</td>
                    <td id="cat6400" class="newQuestion">400</td>
                </tr>
                <tr>
                    <td id="cat1600" class="newQuestion">600</td>
                    <td id="cat2600" class="newQuestion">600</td>
                    <td id="cat3600" class="newQuestion">600</td>
                    <td id="cat4600" class="newQuestion">600</td>
                    <td id="cat5600" class="newQuestion">600</td>
                    <td id="cat6600" class="newQuestion">600</td>
                </tr>
                <tr>
                    <td id="cat1800" class="newQuestion">800</td>
                    <td id="cat2800" class="newQuestion">800</td>
                    <td id="cat3800" class="newQuestion">800</td>
                    <td id="cat4800" class="newQuestion">800</td>
                    <td id="cat5800" class="newQuestion">800</td>
                    <td id="cat6800" class="newQuestion">800</td>
                </tr>
                <tr>
                    <td id="cat11000" class="newQuestion">1000</td>
                    <td id="cat21000" class="newQuestion">1000</td>
                    <td id="cat31000" class="newQuestion">1000</td>
                    <td id="cat41000" class="newQuestion">1000</td>
                    <td id="cat51000" class="newQuestion">1000</td>
                    <td id="cat61000" class="newQuestion">1000</td>
                </tr>
              </table>
        </div>
    </body>
    <footer>
        <a class="homeNavFooter" href="index.html">Home</a>
    </footer>
</html>


<?php
include "connect.php";



?>