<?php
//Display errors
ini_set("display_errors", "1");
error_reporting(E_ALL);

//Connect to database
require_once('connect.php');

//Get quiz name variabel
$quizName = $_POST['quizTitle'];


//SQL Query to get category names 
$sql = "SELECT CategoryName
        FROM category 
        WHERE QuizName = ?";

$statement = $db->prepare($sql);
$result = $statement->execute([$quizName]);


//If category names exist, send data as json array
if ($statement->rowCount() > 0){
  $categories = $statement->fetchAll();
  $json = json_encode($categories);
  echo ($json);
}else{
  echo ("There was an error finding the categories");
}