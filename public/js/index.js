/**
 * index ҳ��js �ű�
 */
//part03 ͼƬ�ֲ�
(function(){
var n = 0;
var len = $('.imgList li').length;

function lunBo1(){
    if(n == len){
        n = 0;
    }else if(n<0){
        n=len-1; //n<0  ���������һ��ͼ
    }
    $('.imgList li').eq(n).addClass('show').siblings('.show').removeClass('show');
    $('.img_index a').eq(n).addClass('on').siblings('.on').removeClass('on');
}
lunBo1();
//������ʱ�� �Զ��ֲ�
var t = setInterval(function(){
    n++;
    lunBo1();
},3000);
//��������Ƴ�
$('.roll_box').hover(function(){
    clearInterval(t);
},function(){
    t = setInterval(function(){
        n ++;
        lunBo1();
    },3000)
});
//���Ұ�ť
$('.roll_box').on('click','.btn_left',function(e){
    e.preventDefault();
    n --;
    lunBo1();
});
$('.roll_box').on('click','.btn_right',function(e){
    e.preventDefault();
    n++;
    lunBo1();
});
//���СԲ��
$('.img_index').on('click',' a',function(e){
    e.preventDefault();
    var img_id = $(this).attr('href');
    $(this).addClass('on').siblings('.on').removeClass('on');
    $(img_id).addClass('show').siblings('.show').removeClass('show');
});
})();


//1.1 �������¼��
(function(){
$('.top_right a:nth-child(2) .btn_login').click(function(e){
    e.preventDefault();
    $(this).siblings('#login').toggleClass('show');
});
//1.2���������ס�ҡ�
$('.remember').click(function(){
    $(this).toggleClass('remember_hover');
});
})();


//part05.1 ��Ӱ��Ϣ
$('.films_nav').on('click','a',function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(this).addClass('light').siblings('.light').removeClass('light');
    $(id).addClass('show').siblings('.show').removeClass('show');
});

//part05.2 choose inputѡ�񵯴�
$('.cinema_search p ').click(function(){
    $(this).siblings('.choose').toggleClass('show');
});


//part05.2-1  #ready ���Ұ�ť
(function(){
    $('#ready .move_right').click(function(e){
    e.preventDefault();
    $(this).siblings('.movie_ready').css('left','-600px');
});

    $('#ready .move_left').click(function(e){
    e.preventDefault();
    $(this).siblings('.movie_ready').css('left',0);
});
})();


//part05.3 ͼƬ���ҹ���
(function(){
    var left = $('.list_box').css('left');
    var div = $('.list_box');
    var c = parseInt(left);
$('.movie_right a.move_right').click(function(e){
    e.preventDefault();
    if(c<0){
        c+=600;
        left = c+'px';
        div.css('left',left);
        $(this).css('opacity','.8');
        //console.log(left);
    }else if(c>=0){
        $(this).css('opacity','.2');
    }

});
$('.movie_right a.move_left').click(function(e){
    e.preventDefault();
    if(c>=-600){
        c-=600;
        left = c+'px';
        div.css('left',left);
        $(this).css('opacity','.8');
        //console.log(left);
    }else if(c<=-600){
        $(this).css('opacity','.2');
    }
});
})();


//part06 products  a
(function(){
    var N = 0;
$('.products .move_right').click(function(e){
    e.preventDefault();
    N++;
    if(N==2){
        N=0;
    }
    $('.pro_box ul').eq(N).addClass('show').siblings('.show').removeClass('show');
});
$('.products .move_left').click(function(e){
    e.preventDefault();
    N--;
    if(N==-1){
        N=1;
    }
    $('.pro_box ul').eq(N).addClass('show').siblings('.show').removeClass('show');
});
})();


//part09 ��ɫ��
(function(){
    $('.box_title a').click(function(e){
    e.preventDefault();
    $(this).addClass('show_border').siblings('.show_border').removeClass('show_border');
    var d = $(this).attr('href'); //��ȡid
    $(d).addClass('show').siblings('.show').removeClass('show');

});
})();



//part10 ����Ӱ�� �ֲ�ͼЧ��
(function(){var num = 0;
var btnLeft = $('.comm_detail .move_left');
var btnRight = $('.comm_detail .move_left');
var Id = $('.comm_detail .slider');
var oUl = Id.find('ul');
var oLi = Id.find('li');
var oCur = $('.slider_dot');
var oCurA = oCur.find('a');
//console.log(oCurS);
var oLiLen = oLi.length;
//console.log(oLiLen);

//�Զ��ֲ�
var t = setInterval(function(){
    num++;
    lunBo();
},3000);

//�ƶ����ֲ������ʱ��
Id.hover(function(){
    clearInterval(t);
},function(){
    t = setInterval(function(){
        num++;
        lunBo();
    },3000)
});
//��,�Ҽ�ͷ��ť  ��ֹð�� �󶨵���Ԫ����
Id.on('click','.move_left',function(e){
    e.preventDefault();
    num--;
    if(num<0){
        num = 2;
    }
    //console.log(num);
    lunBo();
});
Id.on('click','.move_right',function(e){
    e.preventDefault();
    num++;
    lunBo();
});
//ͨ��ê��ʵ�� �������СԲ��??  û���õ�lunBo(); how??
oCur.on('click','a',function(e){
    e.preventDefault();
    $(this).addClass('dot').siblings('.dot').removeClass('dot');
    var liId = $(this).attr('href');
    $(liId).addClass('show').siblings('.show').removeClass('show');
});

//�����ֲ�����
function lunBo(){
    //li��index�����ʱ���ͱ�Ϊ 0��
    if(num == oLiLen){
        num = 0;
    }
    oLi.eq(num).addClass('show').siblings('.show').removeClass('show');  //eq>index
    oCurA.eq(num).addClass('dot').siblings('.dot').removeClass('dot');
}
lunBo();
})();
