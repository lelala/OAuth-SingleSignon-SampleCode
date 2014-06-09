<!--載入參數檔-->
<!--#include file="config.inc"-->
<%
   
Dim client_id, redirect_uri, url

' 註冊的ClientID 資料
client_id = ClientId
' 註冊的RedirectURI 資料
redirect_uri = RedirectURI
' 進入single sign on 流程
url = "https://auth.ischool.com.tw/oauth/authorize.php" &_
    "?response_type=code" &_
    "&client_id=" & client_id &_
    "&redirect_uri=" & Server.URLEncode(redirect_uri) &_
    "&scope=User.Mail,User.BasicInfo"
%>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <a href="<% Response.Write url %>">登入</a>
</body>
</html>