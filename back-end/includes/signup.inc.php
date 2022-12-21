<?php

//TO Do - the post values need to match those in register.js


if(isset($POST["submit"])){
    $name =         $_POST["name"];
    $email =        $_POST["email"];
    $password =     $_POST["password"];
    $passwordrepeat=$_POST["passwordrepeat"];
}

require_once "dbh.inc.php";
require_once "functions.inc.php";

if(emptyInputSignUp($name, $email, $password, $passwordrpt) !== false){
    header("location: ../signup.php?error=emptyinput");
    exit();
}
if(invalidEmail($email) !== false){
    header("location: ../signup.php?error=invalidemail");
    exit();
}
if(pwdMatch($password, $passwordrpt)){
    header("location: ../signup.php?error=passwordsdontmatch");
    exit();
}
if(uIDExists($conn, $username, $email) !== false){
    header("location: ../signup.php?error=usernametaken");
    exit();
}

else{
    header("location: ../signup.php");
    exit();
}
createUser($conn, $name, $email, $password);