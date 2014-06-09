using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //註冊的ClientID 資料
        string client_id = System.Web.Configuration.WebConfigurationManager.AppSettings["ClientId"];
        //註冊的RedirectURI 資料
        string redirect_uri = System.Web.Configuration.WebConfigurationManager.AppSettings["RedirectURI"];

        btnLogin.HRef = "https://auth.ischool.com.tw/oauth/authorize.php"
                + "?response_type=code"
                + "&client_id=" + client_id
                + "&redirect_uri=" + HttpUtility.UrlEncodeUnicode(redirect_uri)
                + "&scope=User.Mail,User.BasicInfo";
    }
}