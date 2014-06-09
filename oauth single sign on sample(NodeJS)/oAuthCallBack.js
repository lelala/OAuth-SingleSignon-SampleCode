//�����O����OAuth���v��i�J��ڸ�ƾ�X������
var config = require('./config.json');
exports.oAuthCallBack = function(req, res){
    //���U��ClientID ���
    var client_id = config.ClientId;
    //���U��ClientID ���
    var client_secret = config.ClientSecret;
    //���U��RedirectURI ���
    var redirect_uri = config.RedirectURI;
    //���ocode
    var code = require('url').parse(req.url, true).query["code"];
    //�z�LServer to Server�I�s��code����AccessToken
    var accessToken = "";

    var https = require('https' );
    //���oAccessToken
    https.get(
        "https://auth.ischool.com.tw/oauth/token.php"
            + "?client_id=" + client_id
            + "&client_secret=" + client_secret
            + "&code=" + code
            + "&grant_type=authorization_code"
            + "&redirect_uri=" + encodeURIComponent(redirect_uri)
        , function(resAccessToken){
            resAccessToken.on('data', function(data) {
                //���o�Ǧ^��accessToken
                accessToken=JSON.parse(data).access_token;
                //���ouserInfo
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