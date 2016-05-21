/**
 * Created by Zyra on 2016/5/13.
 */
$(document).ready(function () {
    var num = $('.num li').length;
    //console.log(num)
    var nowIndex = 0;
    var intervalTimer;
    $('.slider li:gt(0)').hide()
//点击圆点切换
    $('.num li').click(function () {
        var index = $(this).index()
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(index).fadeIn().siblings('li').fadeOut()
        nowIndex = index;
    })
    //移动到画布是箭头出现,移动到画布外面箭头消失
    $('#scrollPics').mouseenter(function () {
        $('.arrow-left').show();
        $('.arrow-right').show();
        clearInterval(intervalTimer)
    })
    $('#scrollPics').mouseleave(function () {
        $('.arrow-left').hide();
        $('.arrow-right').hide();
        autoPlay();
    })
    //点击左边箭头的切换
    $('.arrow-left').click(function () {
        //console.log(nowIndex)
        if(nowIndex == 0){
            nowIndex = num;
        }
        $('.num li').eq(nowIndex - 1).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(nowIndex - 1).fadeIn('slow').siblings('li').fadeOut('slow')
        nowIndex--;
    })
    //向右切换的方法
    function moveRight() {
        if(nowIndex == num){
            nowIndex = -1;
        }
        $('.num li').eq(nowIndex + 1).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(nowIndex + 1).fadeIn('slow').siblings('li').fadeOut('slow')
        nowIndex++;
    }

    //点击右边箭头切换
    $('.arrow-right').click(function () {
        moveRight();
    })

    //自动播放
    function autoPlay() {
        intervalTimer = setInterval(function () {
            moveRight();
        },3000)
    }
    autoPlay();

})