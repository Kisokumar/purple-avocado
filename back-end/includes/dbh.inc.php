<?php
$servername = "localhost";
$dbUserName = "root";
$username = "username";
$password = "";
$dbName = "user_db"

// Create connection
$conn = mysqli_connect($servername, $userName, $password, $username, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create user database
mysqli_query($conn, "CREATE DATABASE users");
mysqli_query($conn, 'ALTER TABLE users ADD COLUMN user_name VARCHAR(255)');
mysqli_query($conn, 'ALTER TABLE users ADD COLUMN user_email VARCHAR(255)');
mysqli_query($conn, 'ALTER TABLE users ADD COLUMN user_password VARCHAR(255)');

// mysqli_close($conn);
