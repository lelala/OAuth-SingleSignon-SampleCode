<?php
//本頁是進入系統的第一個頁面，由本頁面進入OAuth的認證及授權的流程。
require_once "config.php";

//註冊的ClientID 資料
$client_id = $ClientId;
//註冊的RedirectURI 資料
$redirect_uri = $RedirectURI;
//進行http redirect進入OAuth流程
$url="https://auth.ischool.com.tw/oauth/authorize.php"
    . "?response_type=code"
    . "&client_id=" . $client_id
    . "&redirect_uri=" . urlencode($redirect_uri)
    . "&scope=User.Mail,User.BasicInfo";
?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <a href="<?PHP echo $url; ?>">登入</a>
</body>
</html>