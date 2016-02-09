require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");

window.onload = function(){

    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    on = false;
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    var clearAnimation = function(fun) {
        $(".title").hide();
        $(".sound").hide();
        $(".main4-text").hide();
        fun();
    };
    $(".botton").on("tap",function(){
        if($("#name").val().length && $("#time").val().length) {
            $.get("/backend/upload/",{
                "name" : $("#name").val(),
                "time" : $("#time").val(),
                "other" : $("#other").val()
            },function(data){
                if(data.error_no == '0') {
                    alert("哈哈，" + $("#name").val() + "，咱们就这么愉快的决定了，期待大家再次相见哦~");
                }
            });
        }
    });
    var page1Show = function() {
    };
    var page2Show = function() {
    };
    var page3Show = function() {
        $(".page3 .title").velocity("fadeIn");
    };
    var page4Show = function() {
    };
    var page5Show = function() {
    };
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        speed:500,
        onInit: function() {
            clearAnimation(page1Show);
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 0) {
                clearAnimation(page1Show);
            }
            else if(swiper.activeIndex == 1) {

                clearAnimation(page2Show);
            }
            else if(swiper.activeIndex == 2) {
                clearAnimation(page3Show);
            }
            else if(swiper.activeIndex == 3) {
                clearAnimation(page4Show);
            }
            else if(swiper.activeIndex == 4) {
                clearAnimation(page5Show);
            }
        }
    });
}
