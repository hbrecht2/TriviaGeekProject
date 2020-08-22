<?php
// PHP code to connect to my tri\ia database
$serverName = "localhost";
$username = "root";
$password = "";
$dbName = "triviageek";
$conn = new mysqli($serverName, $username, $password, $dbName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM friendsTrivia";
$result = $conn->query($sql);
  
 if ($result->num_rows > 0) {
   echo "<table><tr><th>ID</th><th>Name</th></tr>";
   // output data of each row
   while($row = $result->fetch_assoc()) {
     echo "</td><td>".$row["Question"]." ".$row["Answer"]."</td></tr>";
   }
   echo "</table>";
 } else {
   echo "0 results";
}

?>