<%@ Page Language="C#" AutoEventWireup="true" CodeFile="OAuthCallBack.aspx.cs" Inherits="OAuthCallBack" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
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
    <form id="form1" runat="server">
        <div>
            UserInfo:<br />
            <textarea id="TextArea1" name="S1" runat="server"></textarea>
        </div>
    </form>
</body>
</html>
