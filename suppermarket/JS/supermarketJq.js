/**
 * Created by ffddgdf on 2016/1/16.
 */
$(window).load(function () {
        //S--固定导航栏
        // 获取到图片（top元素）的高度
        var topHeight1 = $("#item").height();
        var topHeight2 = $("#serach").height();
        var topHeight=topHeight1+topHeight2;
        // 监听window的滚动事件
        // window.onscroll
        $(window).scroll(function () {
            //console.log("a");
            // 获取文档被卷去的高度
            var scrollTopHeight = $(document).scrollTop();
            //console.log(scrollTopHeight);

            // 把 文档被卷去的高度和.top的高度做对比
            if(scrollTopHeight >= topHeight+30) {
                // 让导航栏变为固定定位
                //$(".nav").Css("position", "fixed");
                $("#tit").css({
                    "position": "fixed",
                    "top": 0,
                    "border-bottom":"1px solid black"
                });
                // 给main设置一个margin-top的值
                //$(".main").Css("margin-top", $(".nav").height());
                // 数字、或者 "100px" 或者 字符串 "100" 这几个参数都可以
                $("#navi").css("margin-top", "10px");

            } else {
                // 让导航栏变为默认的定位
                $("#tit").css({"position": "static","border-bottom":"none"});

                // 让main变为默认的margin-top值
                $("#navi").css("margin-top", 0);
            }

        });
        //E--固定导航栏

        //S--城市下拉菜单
        var search_s_add=$("search_s_add");
        var search_s_add_span_eng=$("search_s_add_span_eng");
        var eng1=$("eng1");
        var eng2=$("eng2");
        var eng3=$("eng3");
        var eng4=$("eng4");
        var eng5=$("eng5");
        var search_s_add_span_eng_choose=$("search_s_add_span_eng_choose");
        var J_blk_FGHJ=document.getElementsByClassName("J_blk_FGHJ")[0];
        var J_blk_KLMNP=document.getElementsByClassName("J_blk_KLMNP")[0];
        var J_blk_QRSTW=document.getElementsByClassName("J_blk_QRSTW")[0];
        var J_blk_XYZ=document.getElementsByClassName("J_blk_XYZ")[0];

        $(function(){
            // 获取到所有的li元素
            $("#search_s_add_span_eng >span").mouseenter(function () {
                // 给当前li 添加类，给所有的兄弟元素移除类
                $(this).addClass("active").siblings().removeClass("active");

                // 让当前菜单对应的内容展示出来，并让内容的所有兄弟元素隐藏起来
                var index = $(this).index(); // 获取到当前元素的索引号

                $(".hide").eq(index).show().siblings("div").hide();
            });
        });

        //E--城市下拉菜单


        //S---导航二级菜单
        $(function(){

            $(".subview").hide();
            $(".n_1>li").mouseenter(function(){
                $(this).addClass("hov").siblings().removeClass("hov");
                var index = $(this).index();
                //alert(index);
                var move=$(this).index()*73;
                //alert(move);
                var moves=move+"px";
                //alert(moves)

                //$(".subview").eq(index).css("margin-top","moves");
                $(".subview").eq(index).css("margin-top",moves).show().siblings("div").hide();
                if(index==7){
                    $(".subview").hide();
                }
                $(".n_1>li").mouseleave(function(){
                    $(".subview").hide();
                })
            })

        })
        //E---导航二级菜单


    });





