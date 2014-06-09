<%@ CodePage=65001 Language="VBScript"%>
<!--#include file="config.inc"-->
<!--#include file="aspJSON.asp"-->
<%
'------------------------------------------------------------------------
' 本頁是完成OAuth授權後進入實際資料整合的頁面
'------------------------------------------------------------------------
Dim client_id, client_secret, redirect_uri, code
Dim accessToken, url
Dim token_status, token_text

' 註冊的ClientID 資料
client_id = ClientId
' 註冊的ClientID 資料
client_secret = ClientSecret
' 註冊的RedirectURI 資料
redirect_uri = RedirectURI
' 取得code
code = Request("code")
' 透過Server to Server呼叫由code換取AccessToken
accessToken = ""


Set xmlHttp = Server.CreateObject("MSXML2.ServerXMLHTTP")

' 取得AccessToken
url = "https://auth.ischool.com.tw/oauth/token.php" &_
    "?grant_type=authorization_code" &_
    "&client_id=" & client_id &_
    "&client_secret=" & client_secret &_
    "&redirect_uri=" & Server.URLEncode(redirect_uri) &_
    "&code=" & code
xmlHttp.Open "GET", url, false
xmlHttp.Send
If xmlHttp.status = 200 Then
    Set oJSON = New aspJSON
    oJSON.loadJSON(xmlHttp.responseText)
    accessToken = oJSON.data("access_token")
    Set oJSON = Nothing
End If

' 取得UserInfo
url = "https://auth.ischool.com.tw/services/me.php" &_
    "?access_token=" & accessToken
xmlHttp.Open "GET", url, false
xmlHttp.Send
If xmlHttp.status = 200 Then
    resultUserInfo = xmlHttp.responseText
End If

%>
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
            <textarea id="TextArea1" name="S1" ><% Response.Write resultUserInfo %></textarea>
        </div>
</body>
</html>