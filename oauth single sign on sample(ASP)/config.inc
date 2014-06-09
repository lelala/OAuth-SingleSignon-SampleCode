<%
'------------------------------------------------------------------------
' 請至 https://auth.ischool.com.tw/1campus/manage/ 註冊App
' 取得ClientID、ClientSecret
'
' RedirectURI 您註冊App時設定的OAuth RedirectURI
' EntryPoint 您的系統進入OAuth認證及授權的網址
'------------------------------------------------------------------------

Dim ClientId, ClientSecret, RedirectURI, EntryPoint

ClientId = "5c322c5e765f86d3193c4c4b1fb10e50"
ClientSecret = "6395d009f933da0d25f29dda49b97ba74186d7ffb11d6100e3dde5e3f98ef63f"
RedirectURI = "http://localhost:2972/OAuthCallBack.asp"
%>