<?php

$sname= "127.0.0.1";
$unmae= "root";
$password = "password";
$db_name = "API";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
	die("Connection failed!");
}
