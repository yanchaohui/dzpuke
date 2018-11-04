function toggle(itclass, tgstyle) {
    if (tgstyle == 'display') {
        if ($(itclass).is(":hidden")) {
            $(itclass).slideDown('fast');
        } else {
            $(itclass).slideUp('fast');
        }
    } else {
        if ($(itclass).is(":hidden")) {
            $(itclass).addClass('active')
            return false
        } else {
            $(itclass).removeClass('active');
            return false
        }
    }
}
function show(showid, ifstyle, classid, changeid) {
    showhtml = $(showid).html();
    if (ifstyle != undefined && $('.spare').html() == '0') {
        showhtml = $(changeid).html();
    }
    $('.modal-container').html(showhtml);
    toggle('#modal-menu', 'active');
    $('.menu').hide();
}
//错误提示隐藏
function hideerror() {
    $('.errorbox').slideUp('fast');
}
//错误信息提示
function errorshow(content) {
    $('.errorbox').html(content);
    $('.errorbox').slideDown('fase');
    var $tt = setTimeout('hideerror()', 3000);
}
//tab菜单切换效果
function tabshows(changeid) {
    $(changeid).addClass('active').siblings().removeClass('active');
}

//表单验证有错误时显示错误提示
function tips(Fieldname, tip) {
    $(Fieldname).parents('.form-group').addClass('has-error');
    var errhtml = $(Fieldname).parents('.form-group').find('.form-input-hint');
    if (errhtml.length == 0) {
        $(Fieldname).parents('.form-group').append('<p class="form-input-hint">' + tip + '</p>');
    } else {
        errhtml.html(tip);
    }
}
//验证是否为空
function Verificationempty(Fieldname, value, tip) {
    if (value.length == 0) {
        tips(Fieldname, tip);
        return false;
    }
}
//验证是否是数字
function Verificationnumber(Fieldname, value, tip, num) {
    if (parseFloat(value).toString() == "NaN") {
        tips(Fieldname, tip);
        return false;
    }
    if (num != undefined && value.length != num) {
        tips(Fieldname, tip);
        return false;
    }
}

//倒计时
function downtime() {
    var teimevalue=parseInt($('.vcode').html());
    $('.vcode').html(teimevalue-1);
    if($('.vcode').html()==0){
        $('.vcode').html('发送验证码')
        $('.vcode').attr('disabled',false);
        return false
    }
}

//发送验证码
function VerificationCode() {
    var phonenumber = $('#phonenumber').val();
    var tt = Verificationempty('#phonenumber', phonenumber, '请输入手机号');
    var ts = Verificationnumber('#phonenumber', phonenumber, '请输入正确的手机号', '11');
    if (tt != false && ts != false) {
        $('.vcode').html(120);//120秒倒计时
        $('.vcode').attr('disabled',true);
        var uptime=setInterval('downtime()',1000);
    }
}
//表单提交时验证所有项目--注册
function validate_form(thisform) {
    $('.form-input-hint').remove();
    var nickname_v=$('#nickname').val(),
        phonenumber_v=$('#phonenumber').val(),
        verCode_v=$('#verCode').val();
        nickname=Verificationempty('#nickname', nickname_v, '请输入昵称'),
        phonenumber=Verificationempty('#phonenumber', phonenumber_v, '请输入手机号'),
        phonenumber2=Verificationnumber('#phonenumber', phonenumber_v, '请输入正确的手机号', '11'),
        verCode=Verificationempty('#verCode', verCode_v, '请输入手机验证码'),
        verCode2=Verificationnumber('#verCode', verCode_v, '请输入正确的验证码');
    if(nickname==false||phonenumber==false||phonenumber2==false||verCode==false||verCode2){
        return false
    }else{

    }
}
//表单提交时验证所有项目--登陆
function validate_login(thisform) {
    $('.form-input-hint').remove();
    var  phonenumber_v=$('#phonenumber').val(),
        verCode_v=$('#verCode').val();
        phonenumber=Verificationempty('#phonenumber', phonenumber_v, '请输入手机号'),
        phonenumber2=Verificationnumber('#phonenumber', phonenumber_v, '请输入正确的手机号', '11'),
        verCode=Verificationempty('#verCode', verCode_v, '请输入手机验证码'),
        verCode2=Verificationnumber('#verCode', verCode_v, '请输入正确的验证码');
    if(phonenumber==false||phonenumber2==false||verCode==false||verCode2){
        return false
    }else{

    }
}

$(function () {
    $('.message').click(function () {
        toggle('.message_old', 'display');
        if ($(".message_old").is(":hidden")) {
            $('.menudown').css({
                'transform': 'rotate(180deg)',
                '-ms-transform': 'rotate(180deg)',
                '-moz-transform': 'rotate(180deg)',
                '-webkit-transform': 'rotate(180deg)',
                '-o-transform': 'rotate(180deg)'
            })
        } else {
            $('.menudown').css({
                'transform': 'rotate(0deg)',
                '-ms-transform': 'rotate(0deg)',
                '-moz-transform': 'rotate(0deg)',
                '-webkit-transform': 'rotate(0deg)',
                '-o-transform': 'rotate(0deg)'
            })
        }
    });
    //支付方式下拉菜单
    $(document).on('click', '.dropdown-toggle', function () {
        toggle('.menu', 'display');
    });
    //支付方式下拉菜单点击后，下拉菜单隐藏，首选项变成已选的菜单
    $(document).on('click', '#sfmenu li', function () {
        var thishtml = $(this).find('a').html();
        var thisname = '.' + $(this).attr('name');
        $(this).parent().siblings('a').html(thishtml + '<i class="mdi mdi-menu-down"></i>');
        $(this).parent().css({ 'display': 'none' });
        $(thisname).addClass('active').siblings('.dropdownbox').removeClass('active')
    });
    //点击取消或者关闭按钮，将弹出层关闭
    $(document).on('click', '.close', function () {
        toggle('#modal-menu', 'active');
    });
    $('.modal-overlay').click(function () {
        $(this).parent().removeClass('active');
    });
    //点击刷新按钮，刷新页面，并到底部。
    $('.refresh').click(function () {
        location.reload();
        var h = $(document).height() - $(window).height();
        $(document).scrollTop(h);
    });
    $(document).on('click', '.orderbtn', function () {
        $('#model-footer').find('input').val('').siblings('span').removeClass('fouseactive');
        $('#model-footer').addClass('active');
    });
    $('.clearbox').click(function () {
        $(this).parent().siblings('.inputlist').find('input').val('');

        $(this).parent().siblings('.inputlist').find('.input-group-addon').removeClass('fouseactive');
        return false;
    });
    $('.tmboxs input,.ptboxs input').focus(function () {
        $(this).siblings('.input-group-addon').addClass('fouseactive');
    });
    $('.tmboxs input,.ptboxs input').blur(function () {
        if ($(this).val().length == 0) {
            $(this).siblings('.input-group-addon').removeClass('fouseactive');
            errorshow('请输入内容');
            $(this).siblings('.input-group-addon').removeClass('fouseactive');
            return false
        }
        if (parseFloat($(this).val()).toString() == "NaN") {
            errorshow('请输入数字');
            $(this).val('');
            $(this).siblings('.input-group-addon').removeClass('fouseactive');
            return false
        }
    })
    //查看我的下线
    $(document).on('click', '.myuserbox', function () {
        var html = $('.myuser').html();
        $('.modal-container').html(html)

    })

    $(document).on("click", ".btnlist button", function () {
        $(this).addClass('active').siblings().removeClass('active');

    })

});

