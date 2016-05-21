/**
 * Created by Zyra on 2016/5/13.
 */
$(document).ready(function () {
    var num = $('.num li').length;
    //console.log(num)
    var nowIndex = 0;
    var intervalTimer;
    $('.slider li:gt(0)').hide()
//���Բ���л�
    $('.num li').click(function () {
        var index = $(this).index()
        $(this).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(index).fadeIn().siblings('li').fadeOut()
        nowIndex = index;
    })
    //�ƶ��������Ǽ�ͷ����,�ƶ������������ͷ��ʧ
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
    //�����߼�ͷ���л�
    $('.arrow-left').click(function () {
        //console.log(nowIndex)
        if(nowIndex == 0){
            nowIndex = num;
        }
        $('.num li').eq(nowIndex - 1).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(nowIndex - 1).fadeIn('slow').siblings('li').fadeOut('slow')
        nowIndex--;
    })
    //�����л��ķ���
    function moveRight() {
        if(nowIndex == num){
            nowIndex = -1;
        }
        $('.num li').eq(nowIndex + 1).addClass('on').siblings('li').removeClass('on')
        $('.slider li').eq(nowIndex + 1).fadeIn('slow').siblings('li').fadeOut('slow')
        nowIndex++;
    }

    //����ұ߼�ͷ�л�
    $('.arrow-right').click(function () {
        moveRight();
    })

    //�Զ�����
    function autoPlay() {
        intervalTimer = setInterval(function () {
            moveRight();
        },3000)
    }
    autoPlay();

})