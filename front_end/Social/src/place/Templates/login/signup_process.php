<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "ali";
$password = "password";
$dbname = "Ali";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
}


$new_username = "user123";
$new_password = "user123password";


$hashed_password = password_hash($new_password, PASSWORD_DEFAULT);


$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $new_username, $hashed_password);
$stmt->execute();

echo "New record inserted successfully";

$stmt->close();
$conn->close();
?>

