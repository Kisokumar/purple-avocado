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
