<?php
$servername = "localhost";
$username = "17_jacewicz";
$password = "Haslozuzi555";
$dbname = "17_jacewicz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

