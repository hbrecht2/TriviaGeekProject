<?php
// PHP code to connect to my tri\ia database
$serverName = "localhost";
$username = "root";
$password = "root";
$dbName = "triviageek";
$db = new PDO("mysql:host=localhost;dbname=triviageek", $username, $password);


$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>