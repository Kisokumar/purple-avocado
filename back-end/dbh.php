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

// Create database
$sql = "CREATE DATABASE user_db";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);

