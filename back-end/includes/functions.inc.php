<?php

function emptyInputSignUp($name, $email, $password, $passwordrpt){
    $result;
    if(empty($name) || empty($email) || empty($password) || empty($passwordrpt)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function invalidEmail($email){
    $result;
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function pwdMatch($password, $passwordrpt){
    $result;
    if($password !== $passwordrpt){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function emailExists($conn, $email){
    $sql = "SELECT * FROM users WHERE email = ?;";
    $statement = mysqli_stmt_init($conn);
    //check data isnt going to inject:
    if(!mysqli_stmt_prepare($statement, $sql)){
        header("location: ../front-end/src/SignUpPage.js?error=stmtfailed");
    exit();
    }
    //prepare the input from the user:
    mysqli_stmt_bind_param($statement, "s", $email);
    mysqli_stmt_execute($statement);

    $resultData = mysqli_stmt_get_result($statement);

    if($row = mysqli_fetch_assoc($resultData)){
        return $row;
    }else{
        $result = false;
        return $result;
    }

    mysqli_stmt_close($statement);
}

function createUser($conn, $name, $email, $password){
    $sql = "INSERT INTO users (name, email, password) VALUES (?,?,?);"; //prepare statement
    $statement = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($statement, $sql)){ //if the sql statement is not prepared correctly
        header("location: ../front-end/src/pages/SignUpPage.js?error=signupfailed");
        exit();
    }
    //hash the password for security
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

    //now we know the data is ok, we'll prepare the input from the user:
    mysqli_stmt_bind_param($statement, "sss", $name, $email, $hashedPwd); // "sss" means 3 strings

    $resultData = mysqli_stmt_get_result($statement);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    header("location: ../front-end/src/DashboardPage.js");
    exit();
}

function emptyInputLogin($email, $password){
    $result;
    if(empty($password) || empty($email)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function loginUser($conn, $email, $password){
    $emailExists = emailExists($conn, $email);

    if($emailExists == false){
        header("location: ../front-end/src/LogInPage.js?error=wronglogin");
        exit();
    }

    $pwdHashed = $emailExists["password"];
    $checkPwd = password_verify($password, $pwdHashed);

    if($checkPwd == false){
        header("location: ../front-end/src/LogInPage.js?error=wrongpassword");
        exit();
    }
    else if($checkPwd == true){
        session_start();
        $_SESSION["email"]=$emailExists["email"];
        $_SESSION["username"]=$emailExists["username"];
        header("location: ../front-end/src/DashboardPage.js");
        exit();

    }
}
