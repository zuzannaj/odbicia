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

$name = mysqli_real_escape_string($conn, $_REQUEST['name']);
$message = mysqli_real_escape_string($conn, $_REQUEST['message']);
$email = mysqli_real_escape_string($conn, $_REQUEST['email']);

$sql = "INSERT INTO contact (name, message, email) VALUES ('$name', '$message', '$email')";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);
?>
