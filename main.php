<?php
$pWord = $_POST("password");
$email = $_POST("email");

if ($pWord == itswangui && $email == wanguiwamutitu@gmail.com) {
    echo("Welcome Wangui");
} else {
    echo("Invalid Entry.Try again!");
}
