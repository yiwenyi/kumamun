/**
 * Created by Zyra on 2016/5/13.
 */
$(document).ready(function () {
    var num = $('.num li').length;
    //console.log(num)
    var nowIndex = 0;
    var intervalTimer;
    $('.slider li:gt(0)').hide()
    //canvas背景
    var canvasWidth,canvasHeight,sliderHeight,sliderWidth;
    var canvas = $('#canvas').get(0);
    var ctx = canvas.getContext('2d');
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    console.log(canvasWidth)
    console.log(canvasHeight)
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    //slider定位
    sliderHeight  = $('#scrollPics').height();
    sliderWidth = $('#scrollPics').width();
    //console.log(sliderHeight)
    //console.log(sliderWidth)
    $('#scrollPics').css('top',canvasHeight*0.5-sliderHeight*0.5)
    $('#scrollPics').css('left',canvasWidth*0.5-sliderWidth*0.5)
    //产生随机圆
    randomCircle();
    function randomCircle(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        ctx.fillStyle = "rgb(222,222,222)"
        ctx.fillRect(0,0,canvasWidth,canvasHeight);
        for(var i=0;i<20;i++){
            x = Math.random()*canvasWidth;
            y = Math.random()*canvasHeight;
            R = Math.random()*canvasWidth*0.1;
            g = Math.floor(Math.random()*255);
            b = Math.floor(Math.random()*255);
            r = Math.floor(Math.random()*255);
            //粉色系
            // r = 255;
            // g = Math.floor(Math.random()*100);
            // b = Math.floor(Math.random()*300-100);
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "rgb("+r+","+g+","+b+")";
            ctx.beginPath();
            ctx.arc(x,y,R,0,Math.PI*2);
            ctx.closePath();
            ctx.fill();
        }}
    setInterval(randomCircle,2000);
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
        if (nowIndex == 0) {
            nowIndex = num;
        }
        $('.num li').eq(nowIndex - 1).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(nowIndex - 1).fadeIn('slow').siblings('li').fadeOut('slow')
        nowIndex--;
    })
    //向右切换的方法
    function moveRight() {
        if (nowIndex == num) {
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
        }, 3000)
    }

    autoPlay();


})























