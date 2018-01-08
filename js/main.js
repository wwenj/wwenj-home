$(function ($) {
    /*进入*/
    sanjiao(0,0);
    var timer=setTimeout(function(){
        $(".mark-box").css('display','block')
        $(".mark-box").animate({opacity:"0.5"})
        $(".mark-con").css("transform","rotateY(0deg)")
    },350);
    /*点出 */
    $(".mark-box").on('click',function(){
        $(this).animate({opacity:"0"});
        $(".mark-con").css("transform","rotateY(90deg)");
        setTimeout(function(){
            sanjiao("-100vw","-100vw","slow");
            $(".mark-box").css('display','none')
        },900)
    });

    /*左右黑黄三角*/
    function sanjiao(left,right,speed){
        $(".mark-b").animate({
            left: left
        },speed);
        $(".mark-w").animate({
            right: right
        },speed);
    }
})