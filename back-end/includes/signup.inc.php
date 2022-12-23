<?php

if(isset($POST["submit"])){ // REPLACE WITH OBJECT VALUES FROM SIGNUP CONTROLLER
    $name =         $_POST["name"];
    $email =        $_POST["email"];
    $password =     $_POST["password"];
    $passwordrepeat=$_POST["passwordrepeat"];
}

require_once "dbh.inc.php";
require_once "functions.inc.php";

if(emptyInputSignUp($name, $email, $password, $passwordrpt) !== false){
    header("location: ../front-end/src/pages/SignUpPage.js?error=emptyinput");
    exit();
}
if(invalidEmail($email) !== false){
    header("location: ../front-end/src/pages/SignUpPage.js?error=invalidemail");
    exit();
}
if(pwdMatch($password, $passwordrpt)){
    header("location: ../front-end/src/pages/SignUpPage.js?error=passwordsdontmatch");
    exit();
}
if(uIDExists($conn, $username, $email) !== false){
    header("location: ../front-end/src/pages/SignUpPage.js?error=usernametaken");
    exit();
}

}else{
    header("location: ../front-end/src/pages/SignUpPage.js");

    exit();
}
createUser($conn, $name, $email, $password);