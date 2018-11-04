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
    <i class="mdi mdi-account-multiple-plus"></i> 注册用户
</div>


<form class="userform">
    <div class="form-group">
        <div class="has-icon-left">
            <input type="text"  class="form-input " id="txtNickName" placeholder="昵称" maxlength="20" >
            <i class="form-icon mdi mdi-account"></i>
        </div>
    </div>
    <div class="form-group">
        <div class="has-icon-left">
            <input type="text"  class="form-input " id="txtUserName" placeholder="用户名"  maxlength="20">
            <i class="form-icon mdi mdi-account"></i>
        </div>
    </div>
    <div class="form-group ">
        <div class="has-icon-left">
            <i class="form-icon mdi mdi-lock"></i>
            <input type="password" class="form-input" id="txtPassword" placeholder="密码"  maxlength="20">
        </div>

    </div>
    <div class="form-group ">
        <div class="has-icon-left">
            <i class="form-icon mdi mdi-lock"></i>
            <input type="password" class="form-input" id="txtPasswordre" placeholder="再输一次密码"  maxlength="20">
        </div>
    </div>
    <div class="form-group">
        <input type="button" class="btn btn-block btn-primary" id="btnRegister" value="注册" onclick="Register()">
    </div>
</form>

    <script type="text/javascript" language="javascript">

        function Register() {
            var nickName = $("#txtNickName").val();
            var userName = $("#txtUserName").val();
            var password = $("#txtPassword").val();
            var passwordre = $("#txtPasswordre").val();

            if (nickName == '') { alert('昵称不能为空'); $("#txtNickName").focus(); return; }
            if (userName == '') { alert('用户名不能为空'); $("#txtUserName").focus(); return; }
            if (password == '') { alert('密码不能为空'); $("#txtPassword").focus(); return; }
            if (passwordre == '') { alert('重复密码不能为空'); $("#txtPasswordre").focus(); return; }

            if (password != passwordre) {
                alert('两交密码输入不一样，请检查');
                $("#txtPasswordre").focus();
                return;
            }


            $.post("/Json/Register",
                {
                    NickName: nickName,
                    UserName: userName,
                    Password: password,
                    Passwordre: passwordre

                }, function (res) {

                    //alert(JSON.stringify(res));

                    if (res.result == 0) {

                        alert("注册成功");

                        window.location = '/Home/Login';
                    } else {
                        alert(res.msg);

                        
                    }

                });


        }

    </script>

</body>
</html>