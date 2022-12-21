<?php
$servername = "localhost";
$dbUserName = "root";
$username = "username";
$password = "";
$dbName = "db";

// Create connection
$conn = mysqli_connect($servername, $dbUserName, $password, $username, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create user database
$userTableCreation = "CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    )";

if(mysqli_query($conn,$userTableCreation)) {  
    echo "User Table Created successfully.<br>";  
}
else {  
    echo "User Table Creation Failed; ".mysqli_error($conn);  
} 


// Create transaction database
$transactionsTableCreation = "CREATE TABLE transactions (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    amount FLOAT(2),
    date DATE DEFAULT CURRENT_DATE
    )";

if(mysqli_query($conn,$transactionsTableCreation)) {  
    echo "Transactions Table Created successfully.<br>";  
}
else {  
    echo "Transactions Table Creation Failed; ".mysqli_error($conn);  
} 

// mysqli_close($conn);
