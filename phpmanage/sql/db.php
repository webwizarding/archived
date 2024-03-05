<?php
$user = "root";
$pass = "password";

try{
    global $pdo;
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=API', $user, $pass);
} catch(PDOException $e){
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>
