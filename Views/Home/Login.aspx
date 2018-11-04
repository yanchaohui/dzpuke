<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>比特币5分期货-注册</title>
    <link href="/css/base.css" rel="stylesheet">
    <link href="/css/fonts.css" rel="stylesheet">
    <link href="/css/web.css" rel="stylesheet">
    <script type="text/javascript" src="/js/jquery-1.12.1.min.js"></script>
    <script type="text/javascript" src="/js/web.js"></script>

</head>
<body style="background: none">
<div class="headerbox"></div>
<div class="header whitecolor text-center usertitle ">
    <i class="mdi mdi-account-multiple-plus"></i> 用户登录
</div>


<form class="userform">
    <div class="form-group ">
        <div class="has-icon-left">
            <i class="form-icon mdi mdi-account"></i>
            <input type="text" class="form-input" id="txtUserName" placeholder="用户名" maxlength="20" >
        </div>

    </div>
    <div class="form-group ">
        <div class="has-icon-left">
            <i class="form-icon mdi mdi-lock"></i>
            <input type="password" class="form-input" id="txtPassword" placeholder="密码" maxlength="20">
        </div>
    </div>
    <div class="form-group">
        <input type="button" class="btn btn-block btn-primary" id="submitbtn" value="登录" onclick="Login()">
    </div>

    <div>
    <center><a href="/Home/Register">我要注册</a></center>
    </div>
</form>

    <script type="text/javascript" language="javascript">

        function Login() {
            var userName = $("#txtUserName").val();
            var password = $("#txtPassword").val();

            if (userName == '') { alert('用户名不能为空'); $("#txtUserName").focus(); return; }
            if (password == '') { alert('密码不能为空'); $("#txtPassword").focus(); return; }


            $.post("/Json/Login",
                {
                    UserName: userName,
                    Password: password
                }, function (res) {

                    //alert(JSON.stringify(res));

                    if (res.result == 0) {

                        window.location = '/Home/Index';
                    } else {
                        alert(res.msg);


                    }

                });


        }

    </script>

</body>
</html>