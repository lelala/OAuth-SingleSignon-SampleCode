//這頁是測試偵錯時進入1Campus的快速網址，在正式上線時本頁應不需要存在
var config = require('./config.json');
exports.default = function(req, res){

    //註冊的ClientID 資料
    var client_id = config.ClientId;
    //註冊的RedirectURI 資料
    var redirect_uri = config.RedirectURI;

    var url = "https://auth.ischool.com.tw/oauth/authorize.php"
            + "?response_type=code"
            + "&client_id=" + client_id
            + "&redirect_uri=" + encodeURIComponent(redirect_uri)
            + "&scope=User.Mail,User.BasicInfo";

    res.writeHead( 200, { 'Content-Type': 'text/html' });
    var html =
'<!DOCTYPE html>'

+ '<html xmlns="http://www.w3.org/1999/xhtml">'
+ '<head>'
+ '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
+ '    <title></title>'
+ '</head>'
+ '<body>'
+ '    <a href=' + url + '>登入</a>'
+ '</body>'
+ '</html>';
  
    res.end(html);
};