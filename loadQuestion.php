<?php
//Display errors
ini_set("display_errors", "1");
error_reporting(E_ALL);

//Connect to database
require_once('connect.php');


//Question ID 
$questionID = $_POST['questionID'];

$sql = "SELECT PointValue, Question, Answers
        FROM friendsTrivia 
        WHERE htmlID = ?";

$statement = $db->prepare($sql);
$result = $statement->execute([$questionID]);

if ($statement->rowCount() > 0){
  $question = $statement->fetchAll();
  $json = json_encode($question);
  echo ($json);
}else{
  echo ("There was an error finding the question in the database.");
}

?>