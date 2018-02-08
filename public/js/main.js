require('../css/reset.css')
require('../css/main.css')
var $=require('jquery');
$(function ($) {
    /*如果本地没有记录 进入*/
    if (localStorage.mark!= 1 && sessionStorage.mark!= 1) {
        sanjiao(0, 0);
        setTimeout(function () { //延时出现
            $(".mark-box").css('display', 'block');
            $(".mark-box").animate({
                opacity: "0.5"
            });
            $(".mark-con").css("transform", "rotateY(0deg)");
        }, 350);
    }
    /*点出 */
    $(".mark-box").on('click', function () {
        $(this).animate({
            opacity: "0"
        });
        $(".mark-con").css("transform", "rotateY(90deg)");
        setTimeout(function () {
            sanjiao("-100vw", "-100vw", "slow");
            $(".mark-box").css('display', 'none');
            $('html').css('overflow', 'visible')
        }, 900);

        if ($('#checkbox')[0].checked == true) { //写入本地记录
            localStorage.mark = 1;
        };
        sessionStorage.mark=1;//写入临时记录
    });

    /*搜索聚焦*/
    $("input[type=text]").on('focus', function () {
        $(this).css('background', '#777777')
    });
    $("input[type=text]").on('blur', function () {
        $(this).css('background', '#444')
    })

    /*返回顶部+导航栏变化*/
    var timer;
    $(window).on('scroll', function () {
        /*回到顶部部分*/
        if ($(this).scrollTop() > 500) { //小火箭
            $(".return-top").css('bottom', '40px');
        } else { //小火箭
            $(".return-top").css('bottom', '-70px');
        };
        /*鼠标滚动时导航栏出现*/
        if ($(".nav-box").css('top') == '-100px') {
            navChange('0');
        };
        /*不滚动导航条延时隐藏*/
        clearTimeout(timer); //滚动时停止所有定时器
        timer = setTimeout(navTimer, 2000);
    });
    $(".nav-box").hover(function () { //鼠标到导航
            clearTimeout(timer);
        },
        function () {
            timer = setTimeout(navTimer, 1000);
        })
    $(".return-top").on('click', function () { //返回顶部
        $(window).scrollTop(0);
        $(".return-top").css('bottom', '-70px');
    });
    /*左右黑黄三角*/
    function sanjiao(left, right, speed) {
        $(".mark-b").animate({
            left: left
        }, speed);
        $(".mark-w").animate({
            right: right
        }, speed);
        $('html').css('overflow', 'hidden');
    }

    /*导航栏动画函数*/
    function navChange(nav) {
        $(".nav-box").stop();
        $(".nav-box").animate({
            top: nav
        }, 'fast')
    }
    /*导航栏定时函数*/
    function navTimer() { //鼠标停止滑动3s后收回导航栏
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() >= 200) {
            navChange('-100')
        }
    }
})