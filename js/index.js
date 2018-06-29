/**
 * Created by jr on 2018/2/7.
 */

var t = n = 0,
    count;
var timeout;
$(document).ready(function () {
    var isLoading = 'false';
    /* 修改窗口大小 */
    function resetSize() {
        var winWidth = $(window).width() / 375;
        if ($(window).width() >= 750){
            winWidth = 2
        }
        $('.layout').css("zoom",winWidth).fadeIn(60);
    }
    /* 横竖屏监听 */
    $(window).resize(function () {
        resetSize();
    });


    /* 滚动监听 */
    $(window).scroll(function(){
        pushData();
    });
    //上拉加载数据
    function pushData() {
        // console.log($(this).scrollTop())
        //当前滚动的地方的距离+屏幕的高度 > 内容的高度 时说明滑到底部了
        var this_scrollTop = parseInt($(this).scrollTop())+parseInt($(window).height()) ;
        if(this_scrollTop >=  $("#content-ul").height() && isLoading == 'false'){
            isLoading = 'true';
            $("#pushLoading").show();
            loadData();
        }
    }
    function loadData() {
        //setTimeout  只执行一次
        timeout = setTimeout(function () {
            // console.log("-----------")
            var htmlLi = '<li>111111</li>\
                <li>2222222</li>\
                <li>3333333</li>\
                <li>4444444</li>\
                <li>5555555</li>\
                <li>6666666</li>\
                <li>77777777</li>\
                ';
            $("#content-ul").append(htmlLi);
            $("#pushLoading").hide();
            isLoading = 'false';
            clearTimeout(timeout)
        },3000);
    }
    resetSize();

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 1000,//自动轮播
        // speed: 600,
        // autoplayDisableOnInteraction : false,
        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // paginationType : 'bullets',

        // paginationType: 'custom',//这里分页器类型必须设置为custom,即采用用户自定义配置
        //下面方法可以生成我们自定义的分页器到页面上
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     renderBullet: function (index, className) {
        //         return '<span class="' + className + '">' + (index + 1) + '</span>';
        //     },
        // },

    });

    // var mySwiper = new Swiper('.swiper-container',{
    //     autoplay : 3000,
    //     speed:300,
    // });

    $("#slider1").click(function () {
        alert("slider1")
    })

    $("#slider2").click(function () {
        alert("slider2")
    })
    $("#slider3").click(function () {
        alert("slider3")
    })























    /***************************不支持手滑****************************/
    /*
    count = $("#banner_list a").length;
    $("#banner_list a:not(:first-child)").hide();
    $("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
    $("#banner_info").click(function() {
        window.open($("#banner_list a:first-child").attr('href'), "_blank")
    });
    $("#banner li").click(function() {
        var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
        n = i;
        if (i >= count) return;
        $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
        $("#banner_info").unbind().click(function() {
            window.open($("#banner_list a").eq(i).attr('href'), "_blank")
        })
        $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        document.getElementById("banner").style.background = "";
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    t = setInterval(function () {
        n = n >= (count - 1) ? 0 : ++n;
        $("#banner li").eq(n).trigger('click');
    }, 4000);
    $("#banner").hover(function() {
            clearInterval(t)
        },
    function() {
        t = setInterval(function () {
            n = n >= (count - 1) ? 0 : ++n;
            $("#banner li").eq(n).trigger('click');
        }, 4000);
    });
    */
})