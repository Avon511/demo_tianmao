/**
 * Created by ffddgdf on 2016/1/16.
 */
$(window).load(function () {
        //S--�̶�������
        // ��ȡ��ͼƬ��topԪ�أ��ĸ߶�
        var topHeight1 = $("#item").height();
        var topHeight2 = $("#serach").height();
        var topHeight=topHeight1+topHeight2;
        // ����window�Ĺ����¼�
        // window.onscroll
        $(window).scroll(function () {
            //console.log("a");
            // ��ȡ�ĵ�����ȥ�ĸ߶�
            var scrollTopHeight = $(document).scrollTop();
            //console.log(scrollTopHeight);

            // �� �ĵ�����ȥ�ĸ߶Ⱥ�.top�ĸ߶����Ա�
            if(scrollTopHeight >= topHeight+30) {
                // �õ�������Ϊ�̶���λ
                //$(".nav").Css("position", "fixed");
                $("#tit").css({
                    "position": "fixed",
                    "top": 0,
                    "border-bottom":"1px solid black"
                });
                // ��main����һ��margin-top��ֵ
                //$(".main").Css("margin-top", $(".nav").height());
                // ���֡����� "100px" ���� �ַ��� "100" �⼸������������
                $("#navi").css("margin-top", "10px");

            } else {
                // �õ�������ΪĬ�ϵĶ�λ
                $("#tit").css({"position": "static","border-bottom":"none"});

                // ��main��ΪĬ�ϵ�margin-topֵ
                $("#navi").css("margin-top", 0);
            }

        });
        //E--�̶�������

        //S--���������˵�
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
            // ��ȡ�����е�liԪ��
            $("#search_s_add_span_eng >span").mouseenter(function () {
                // ����ǰli ����࣬�����е��ֵ�Ԫ���Ƴ���
                $(this).addClass("active").siblings().removeClass("active");

                // �õ�ǰ�˵���Ӧ������չʾ�������������ݵ������ֵ�Ԫ����������
                var index = $(this).index(); // ��ȡ����ǰԪ�ص�������

                $(".hide").eq(index).show().siblings("div").hide();
            });
        });

        //E--���������˵�


        //S---���������˵�
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
        //E---���������˵�


    });





