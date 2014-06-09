<?php
//本頁是完成OAuth授權後進入實際資料整合的頁面

require_once "config.php";

//註冊的ClientID 資料
$client_id = $ClientId;
//註冊的ClientID 資料
$client_secret = $ClientSecret;
//註冊的RedirectURI 資料
$redirect_uri = $RedirectURI;
//由傳入的state參數取得application
$application = $_REQUEST["state"];
//取得code
$code = $_REQUEST["code"];
//透過Server to Server呼叫由code換取AccessToken
$accessToken = "";


//取得AccessToken
$chAccessToken = curl_init();
curl_setopt($chAccessToken, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chAccessToken, CURLOPT_SSL_VERIFYPEER, false);  //skip ssl verify
curl_setopt($chAccessToken, CURLOPT_ENCODING, '');//auto handle content-encoding ex: gzip
curl_setopt($chAccessToken, CURLOPT_URL,  
    "https://auth.ischool.com.tw/oauth/token.php"
        . "?client_id=" . $client_id
        . "&client_secret=" . $client_secret
        . "&code=" . $code
        . "&grant_type=authorization_code"
        . "&redirect_uri=" . urlencode($redirect_uri) );
$resultAccessToken = curl_exec($chAccessToken);
curl_close ($chAccessToken);
$accessToken = json_decode($resultAccessToken, true)["access_token"];	

//取得UserInfo
$chUserInfo = curl_init();
curl_setopt($chUserInfo, CURLOPT_RETURNTRANSFER, true);
curl_setopt($chUserInfo, CURLOPT_SSL_VERIFYPEER, false);  //skip ssl verify
curl_setopt($chUserInfo, CURLOPT_ENCODING, '');//auto handle content-encoding ex: gzip
curl_setopt($chUserInfo, CURLOPT_URL,  
    "https://auth.ischool.com.tw/services/me.php"
        . "?access_token=" . $accessToken );
$resultUserInfo = curl_exec($chUserInfo);
curl_close ($chUserInfo);
?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        #TextArea1 {
            height: 238px;
            width: 905px;
        }
    </style>
</head>
<body>
        <div>
            UserInfo:<br />
            <textarea id="TextArea1" name="S1" ><?php echo $resultUserInfo ?></textarea>
        </div>
</body>
</html>