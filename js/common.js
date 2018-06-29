/**
 * Created by jr on 2018/2/7.
 */
define(["jquery"], function ($) {
    var commonObject ={

        resetSize:function () {
            var winWidth = $(window).width / 375;
            if ($(window).width >= 750){
                winWidth = 2
            }
            $('.layout').css("zoom",winWidth).fadeIn(60);
        }
    }
    return commonObject;
});