//�o���O���հ����ɶi�J1Campus���ֳt���}�A�b�����W�u�ɥ��������ݭn�s�b
var config = require('./config.json');
exports.default = function(req, res){

    //���U��ClientID ���
    var client_id = config.ClientId;
    //���U��RedirectURI ���
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
+ '    <a href=' + url + '>�n�J</a>'
+ '</body>'
+ '</html>';
  
    res.end(html);
};