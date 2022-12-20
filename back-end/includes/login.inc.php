<?php

if(isset($_POST["submit"])){ //REPLACE WITH OBJECT VALUES FROM LOGIN CONTROLLER
    $username = $_POST["username-or-email"];
    $password = $_POST["password"];

    require_once "dbh.inc.php";
    require_once "functions.inc.php";

    if(emptyInputLogin($name, $password) !== false){
        header("location: ../front-end/src/pages/LogInPage.js?error=emptyinput");
        exit();
    }

    loginUser($conn, $username, $password);
}
else{
    header("location: ../front-end/src/pages/DashboardPage.js");
    exit();
}

if(!isset($SESSION['username'])){
	echo "You are logged out. Please log in to access your account.";
}else{
	echo "Welcome, " . $username . "!";
