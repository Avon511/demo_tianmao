$(function(){


/*����������  start*/

/*����������  end*/

/*��Ҫ���ݲ���  start*/

    /*��������������  start*/

    window.onload = function(){

        var scrollBar = document.getElementById("scrollBar");
        var conStmall = document.getElementById("conStmall");

        window.onscroll = function(){
            var scrollTop = scroll().top;
            var topPartHeight = conStmall.offsetHeight;

            if(scrollTop>topPartHeight){
                scrollBar.style.display = "block";
            }
            else{
                scrollBar.style.display = "none";
            }

        }

        function scroll(){
            if(window.pageYOffset != null){
                return {
                    top : window.pageYOffset,
                    left : window.pageXOffset
                }
            }
            else if(document.compatMode == "css1Compat"){
                return {
                    top : document.documentElement.scrollTop,
                    left : document.documentElement.scrollLeft
                }
            }
            else{
                return {
                    top : document.style.scrollTop,
                    left : document.style.scrollLeft
                }
            }
        }

    }

    /*��������������  end*/


/*����è����  start*/



    $(".con-stmall-earth").mouseenter(function(){

        $(this).children('.earth-best').stop().animate({bottom:0},200);
    });
    $(".con-stmall-earth").mouseleave(function(){
        $(this).children('.earth-best').stop().animate({bottom:-6},200);
    });

    $(".con-stmall-baby").mouseenter(function(){
        $(this).children('.earth-best').stop().animate({bottom:0},200);
    });
    $(".con-stmall-baby").mouseleave(function(){
        $(this).children('.earth-best').stop().animate({bottom:-6},200);
    });


/*����è����  end*/

/*��ѡ����  start*/

    $(".favorite-brands").mouseenter(function(){
        $(this).find(".des-describe").stop().show(500);
        $(this).find('.brand-des').stop().animate({top:-56},200);
    })
    $(".favorite-brands").mouseleave(function(){
        $(this).find(".des-describe").stop().hide(500);
        $(this).find('.brand-des').stop().animate({top:-50},200);
    })

    $(".favorite-brands-sp").mouseenter(function(){
        $(this).find(".des-describe").stop().show(500);
        $(this).find('.brand-des').stop().animate({top:-56},200);
    })
    $(".favorite-brands-sp").mouseleave(function(){
        $(this).find(".des-describe").stop().hide(500);
        $(this).find('.brand-des').stop().animate({top:-50},200);
    })
/*��ѡ����  end*/

/*ѡ�񲿷�  start*/

   
/*ѡ�񲿷�  end*/

/*��Ҫ���ݲ���  end*/

/*�ײ�����������  start*/

/*�ײ�����������  end*/
});