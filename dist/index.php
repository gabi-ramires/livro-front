<?php

echo '<pre>';
session_start();

$session_id = session_id();
$_SESSION['usuario'] = $session_id;
$ip = $_SERVER['REMOTE_ADDR'];
$dispositivo = $_SERVER['HTTP_USER_AGENT'];

var_dump($_SESSION);
var_dump($_SERVER);





require_once('app.html');