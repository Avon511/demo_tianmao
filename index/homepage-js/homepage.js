/*** Created by xiaolong on 2016/1/13.*/
//头部鼠标移入显示移出隐藏

$(document).ready(function () {
    //头部的下拉菜单
    $(".fore").mouseenter(function () {
        $(this).css("background", "white").children().show()
    });
    $(".fore").mouseleave(function () {
        $(".fore").css("background", "#F2F2F2")
        $(".fore>ul").hide();
    });


    //分类
    $(".fenlei>div").hide().css('z-index', 0);
    //获得左边所有的li  .给li设置鼠标移进事件
    $(".fenlei>ul>li").on("mouseenter", function () {
        $(this).css("backgroundColor", "black")
        $(".fenlei>div").css('z-index', 10000).show();
        //索引 = 鼠标在这个li索引
        var index = $(this).index();
        //console.log(index)
        //每个图片的
        $(".fenlei>div>ul>li").eq(index).show().siblings().hide();
        //console.log(index);
    });
    $(".fenlei>ul>li").mouseleave(function () {
        $(this).css("backgroundColor", "#333333")
    });

    $(".fenlei").on("mouseleave", function () {
        $(".fenlei>div").css('z-index', 10000).hide();
    })


    var index = 0;
    var timer = null;
    //大图片
    $(".circle>span").mouseenter(function () {
        $(".circle>span").css("background", "#A2A2A2");
        $(this).css("background", "white");
        index = $(this).index();
        //console.log(index);
        $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();
    });
//自动播放  1设置定时器

    $(".lbt-zhfq").mouseenter(function () {
        clearInterval(timer);
    });
    $(".circle>span").mouseenter(function () {
        clearInterval(timer);
    });
    $(".lbt-zhfq").mouseleave(function () {

        timer = setInterval(function () {
            if (index < $(".circle").children().length - 1) {
                index++;
            } else {
                index = 0;
            }
            $(".circle>span").css("background", "#A2A2A2");
            $($(".circle>span")[index]).css("background", "white");

            $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();

        }, 3000)
    });

    timer = setInterval(function () {
        if (index < $(".circle").children().length - 1) {
            index++;
        } else {
            index = 0;
        }
        $(".circle>span").css("background", "#A2A2A2");
        $($(".circle>span")[index]).css("background", "white");

        $(".lbt-zhfq>div:eq(" + index + ")").fadeIn(1000).siblings("div").hide().stop();

    }, 3000);




    function scroll() {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
    var xiaLa = $(".xiala-ss");
    //console.log(xiaLa);


    window.onscroll = function () {
        if (scroll().top > 500) {
            xiaLa.slideDown();
            xiaLa.css("position","fixed")
        } else {
            xiaLa.slideUp();
        }
    }


});
$(function () {
    $(".slide-right-list>li").mouseenter(function () {
//                   alert   ($(this).text())
//                   alert   (this.children())
        $(this).children("div").stop().show().animate({left:-101})
    })
    $(".slide-right-list>li").mouseleave(function () {
//                   alert   ($(this).text())
//                   alert   (this.children())
        $(this).children("div").stop().hide(200)
    })
//                $("#clickTop").click(function () {
//                    $(document).animate({top:0})
//                })
})
var hover_dir = {
    wrapper: $(".major-list")[0],
    box: $(".major-item"),
    target: $(".back-face"),
    bindEvent: function(){
        var mouse_pos, x, y, stop_bubble;
        for(var i = 0; i < hover_dir.box.length; i++){
            (function(n){
                $.addEvent(hover_dir.box[n], "mouseover", function(event){
                    event = $.getEvent(event);
                    var relatedT = $.getRelatedTarget(event);
                    if(!$.contains(hover_dir.box[n], relatedT)){
                        var child = hover_dir.box[n].childNodes[0];
                        $.stopPropagation(event);
                        $.removeClass(hover_dir.target[n], "to-left") ||
                        $.removeClass(hover_dir.target[n], "to-right") ||
                        $.removeClass(hover_dir.target[n], "to-top") ||
                        $.removeClass(hover_dir.target[n], "to-bottom");
                        x = event.pageX;
                        y = event.pageY;
                        mouse_pos = {"x": x, "y": y};
                        var dir = $.get_dir(hover_dir.box[n], mouse_pos);
                        switch(dir){
                            case "left":
                                $.addClass(hover_dir.target[n], "from-left");
                                break;
                            case "right":
                                $.addClass(hover_dir.target[n], "from-right");
                                break;
                            case "top":
                                $.addClass(hover_dir.target[n], "from-top");
                                break;
                            case "bottom":
                                $.addClass(hover_dir.target[n], "from-bottom");
                                break;
                            default: break;
                        }
                    }
                });
                $.addEvent(hover_dir.box[n], "mouseout", function(event){
                    event = $.getEvent(event);
                    var relatedT = $.getRelatedTarget(event);
                    if(!$.contains(hover_dir.box[n], relatedT)){
                        $.removeClass(hover_dir.target[n], "from-left") ||
                        $.removeClass(hover_dir.target[n], "from-right") ||
                        $.removeClass(hover_dir.target[n], "from-top") ||
                        $.removeClass(hover_dir.target[n], "from-bottom");
                        x = event.pageX;
                        y = event.pageY;
                        mouse_pos = {"x": x, "y": y};
                        var dir = $.get_dir(hover_dir.box[n], mouse_pos);
                        switch(dir){
                            case "left":
                                $.addClass(hover_dir.target[n], "to-left");
                                break;
                            case "right":
                                $.addClass(hover_dir.target[n], "to-right");
                                break;
                            case "top":
                                $.addClass(hover_dir.target[n], "to-top");
                                break;
                            case "bottom":
                                $.addClass(hover_dir.target[n], "to-bottom");
                                break;
                            default: break;
                        }
                    }
                });
            })(i);
        }},
    init: function(){
        hover_dir.bindEvent();
    }
};
hover_dir.init();
$(function () {
    $("#shop>li").mouseenter(function () {
        $(this).children("i").show()
    }).mouseleave(function () {
        $(this).children("i").hide()
    })

})
$(function () {
    $("#clickTop").parent().click(function () {
        window.scrollTo(0,0)
        //alert(12)
        //$(window).animate({"scrollTop":"0"})
    })
})



