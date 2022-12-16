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
        header("location: ../signup.php?error=stmtfailed");
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
        header("location: ../signup.php?error=signupfailed");
        exit();
    }
    //hash the password for security
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

    //now we know the data is ok, we'll prepare the input from the user:
    mysqli_stmt_bind_param($statement, "sss", $username, $email, $hashedPwd); // "ssss" means 3 strings

    $resultData = mysqli_stmt_get_result($statement);
    mysqli_stmt_execute($statement);
    mysqli_stmt_close($statement);
    header("location: ../signup.php?error=none");
    exit();
}

function emptyInputLogin($username, $password){
    $result;
    if(empty($password) || empty($username)){
        $result = true;
    }else{
        $result = false;
    }
    return $result;
}

function loginUser($conn, $username, $password){
    $uIDExists = uIDExists($conn, $username, $username);

    if($uIDExists == false){
        header("location: ../login.php?error=wronglogin");
        exit();
    }

    $pwdHashed = $uIDExists["pwd"];
    $checkPwd = password_verify($password, $pwdHashed);

    if($checkPwd == false){
        header("location: ../login.php?error=wrongpassword");
        exit();
    }
    else if($checkPwd == true){
        session_start();
        $_SESSION["usersId"]=$uIDExists["usersId"];
        $_SESSION["username"]=$uIDExists["username"];
        header("location: ../index.php");
        exit();

    }
}
