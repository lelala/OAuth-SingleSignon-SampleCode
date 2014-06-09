//本頁是完成OAuth授權後進入實際資料整合的頁面
var config = require('./config.json');
exports.oAuthCallBack = function(req, res){
    //註冊的ClientID 資料
    var client_id = config.ClientId;
    //註冊的ClientID 資料
    var client_secret = config.ClientSecret;
    //註冊的RedirectURI 資料
    var redirect_uri = config.RedirectURI;
    //取得code
    var code = require('url').parse(req.url, true).query["code"];
    //透過Server to Server呼叫由code換取AccessToken
    var accessToken = "";

    var https = require('https' );
    //取得AccessToken
    https.get(
        "https://auth.ischool.com.tw/oauth/token.php"
            + "?client_id=" + client_id
            + "&client_secret=" + client_secret
            + "&code=" + code
            + "&grant_type=authorization_code"
            + "&redirect_uri=" + encodeURIComponent(redirect_uri)
        , function(resAccessToken){
            resAccessToken.on('data', function(data) {
                //取得傳回的accessToken
                accessToken=JSON.parse(data).access_token;
                //取得userInfo
                https.get(
                    "https://auth.ischool.com.tw/services/me.php?access_token=" + accessToken
                    , function(resUserInfo){
                        resUserInfo.on('data', function(userInfo){
                            res.writeHead( 200, { 'Content-Type': 'text/html' });
                            var html =
'<!DOCTYPE html>'
+ '<html xmlns="http://www.w3.org/1999/xhtml">'
+ '<head runat="server">'
+ '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
+ '    <title></title>'
+ '    <style type="text/css">'
+ '        #TextArea1 {'
+ '            height: 238px;'
+ '            width: 905px;'
+ '        }'
+ '    </style>'
+ '</head>'
+ '<body>'
+ '        <div>'
+ '            UserInfo:<br />'
+ '            <textarea id="TextArea1" name="S1" >'+userInfo+'</textarea>'
+ '        </div>'
+ '</body>'
+ '</html>';    
                            res.end(html);
                        });
                    }
                );
            });
        }
    );
};