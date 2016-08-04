/**
 * Created by Administrator on 2016/1/11.
 */
//轮播图部分 start
    window.onload=function(){
        var pic=document.getElementById("pic");
        var ul=pic.children[0];
        var picUlLis=ul.children;
        var circle=document.getElementById("circle");
        var cirOl=circle.children[0];
        var imgWidth=pic.offsetWidth;
        var timer=null;
        var arrow=document.getElementById("arrow");
        var arrowArr=arrow.children;
        var picNum=0;

        arrowArr[1].onclick = function () {
            picNum = Math.abs(picNum)
            if(picNum<picUlLis.length-1){
                picNum++
            }else{
                picNum = 1;
                ul.style.left = 0;
            }
            var target = -picNum*imgWidth;
            animate(ul, target)
            for(var i =0;i<cirOlLis.length;i++){
                cirOlLis[i].className = ""
            }
            cirOlLis[picNum==cirOlLis.length?0:picNum].className ="current";
        }

        arrowArr[0].onclick = function () {
            if(picNum>0){
                picNum--
            }else{
                picNum = cirOlLis.length-1;
                ul.style.left = -imgWidth*cirOlLis.length+"px";
            }
            var target =-(picNum)*imgWidth
            animate(ul, target);
            for(var i =0;i<cirOlLis.length;i++){
                cirOlLis[i].className = ""
            }
            cirOlLis[picNum==cirOlLis.length?0:picNum].className ="current";
        }

        for(var i=0;i<picUlLis.length;i++){
            var li= document.createElement("li");
            li.innerHTML=i+1;
            cirOl.appendChild(li);
        }
        var cirOlLis=cirOl.children;
        cirOlLis[0].className="current";
        for (var j=0;j<cirOlLis.length;j++){
            cirOlLis[j].index=j;
            cirOlLis[j].onmouseover=function(){
                target=-this.index*imgWidth;
                animate(ul,target);


                for(var k=0;k<cirOlLis.length;k++){
                    cirOlLis[k].className="";
                }
                this.className="current";
                picNum=this.index;
                square=this.index;

            }
        }

        ul.appendChild(picUlLis[0].cloneNode(true));
        var timer=null;
        var picNum=0;
        var square=0;
        timer= setInterval(fn1,3000)
        pic.onmouseover=function(){
            clearInterval(timer);
            arrow.style.display="block";

        }
        pic.onmouseout=function(){
            timer=setInterval(fn1,3000);
            arrow.style.display="none";
        }



        function fn1(){
            picNum++;
            if(picNum>picUlLis.length-1){
                picNum=1;
                ul.style.left=0;
            }
            var target=-picNum*imgWidth;
            animate(ul,target);

            square++;
            if(square>cirOlLis.length-1){
                square=0;
            }
            for (var i=0;i<cirOlLis.length;i++){
                cirOlLis[i].className="";
            }
            cirOlLis[square].className="current";

        }

        function animate(obj,target){
            clearInterval(obj.timer);
            obj.timer= setInterval(function(){
                var leader=obj.offsetLeft;
                step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                obj.style.left=obj.offsetLeft+step+"px";
                if(leader==target){
                    clearInterval(obj.timer);
                }
            },5)
        }

// 轮播图 特效部分 end

 //ele-commen 部分小轮播图start
         var ulParent=document.getElementById("commen-img-left-top");
        var picUl=ulParent.children[0];
        var ol=ulParent.children[1];
        ulLis=picUl.children;
        olLis=ol.children;
        var commenImgLeft=document.getElementById("commen-img-left");
        var imgwidth=commenImgLeft.offsetWidth;
        for(var i=0;i<olLis.length;i++){
            olLis[i].index=i;
           olLis[i].onclick=function(){
               var target=-this.index*imgwidth+"px";
               animate(picUl,target)
           }
        }
 //ele-commen 部分小轮播图end


 // input得到焦点 失去焦点部分 start
    var input1=document.getElementById("input1");
        input1.onfocus=function(){
            if(input1.value=="功夫熊猫卖萌贺岁"){
                this.value="";
                this.style.color="#000";
            }

        }
        input1.onblur=function(){
            if(this.value==""){
                this.value="功夫熊猫卖萌贺岁";
                this.style.color="#939393"
            }

        }
// input得到焦点 失去焦点部分 end



 //导航栏 移动特效 start
        var cloud=document.getElementById("cloud");
        var navBar=document.getElementById("nav-bar");
        var  ulLis=navBar.children;
        var lastposition=0;
        for(var i=0;i<ulLis.length;i++){
            ulLis[i].index=i;
            ulLis[i].onmouseover=function(){
                var target=this.offsetLeft;
                animate(cloud,target);
                $(cloud).css("width",$(this).width());
                lastposition=this.offsetLeft;
            };
            ulLis[i].onmouseout=function(){
                animate(cloud,lastposition);
            }
            //navBar.onmouseout=function(){
            //    animate(cloud,0);
            //}
        }
        var eleSearch=document.getElementById("ele-search").offsetHeight;
        var eleNav=document.getElementById("ele-nav").offsetHeight;
        var topbannerImg=document.getElementById("topbannerImg").offsetHeight;
        var navbar=document.getElementById("navBar");
        var eleMain=document.getElementById("ele-main");
        var heig=navbar.offsetHeight
        window.onscroll=function(){
            var scrolltop=scroll().top;
            if(scrolltop>(topbannerImg+eleNav+eleSearch+40)){
                navbar.className="navBar fixed";
                eleMain.style.marginTop=heig+"px";
                navbar.style.borderBottom="1px solid #296ECC";
                navbar.children[0].style.borderBottom="none";
            }else{
                navbar.className="navBar";
                eleMain.style.marginTop=0;
                navbar.style.borderBottom="none";
                navbar.children[0].style.borderBottom="1px solid #296ECC";

            }
        }
        function scroll() {
            if (window.pageYOffset != null) {
                return {
                    top: window.pageYOffset,
                    left: window.pageXOffset
                };
            } else if (document.compatMode == "CSS1Compat") {
                //有DTD的网页
                return {
                    top: document.documentElement.scrollTop,
                    left: document.documentElement.scrollLeft
                }
            } else {
                //没有DTD的
                return {
                    top: document.body.scrollTop,
                    left: document.body.scrollLeft
                }
            }
        }

//导航栏 移动特效 end


    }

//$.noConflict()
//console.log($.fn.jQuery)
// 导航栏下拉菜单特效部分 start
$(function(){
    $(".shopping-my1").mouseenter(function(){
        $(".shopping-my").stop().slideDown(300);
        $(this).css("backgroundColor","#fff");
    });
    $(".shopping-my1").mouseleave(function(){
        $(".shopping-my").stop().slideUp(300);
        $(this).css("backgroundColor","#F2F2F2");
    });
    $(".collect-my").mouseenter(function(){
        $(".collect").stop().slideDown(300);
        $(this).css("backgroundColor","#fff");
    }) ;
    $(".collect-my").mouseleave(function(){
        $(".collect").stop().slideUp(300);
        $(this).css("backgroundColor","#F2F2F2");
    }) ;
    $(".surport-my").mouseenter(function(){
        $(".surport").stop().slideDown(300);
        $(this).css("backgroundColor","#fff");

    });
    $(".surport-my").mouseleave(function(){
        $(".surport").stop().slideUp(300);
        $(this).css("backgroundColor","#F2F2F2");
    });
    $(".nav-gps").mouseenter(function(){
        $(".satenav").stop().show(100);
        $(this).css("backgroundColor","#fff");
    });
    $(".nav-gps").mouseleave(function(){
        $(".satenav").stop().hide();
        $(this).css("backgroundColor","#F2F2F2");
    });
});
// 导航栏下拉菜单特效部分 end

// topbanner 关闭按钮 部分 start
$(function(){
    $(".topbanner").mouseenter(function(){
        $(".closeSp").show();
    });
    $(".topbanner").mouseleave(function(){
        $(".closeSp").hide();
    });
    $(".closeSp").click(function(){
        $(".topbanner").hide();
    })


})
// topbanner 关闭按钮 部分 end

//ele-brands部分特效 start
$(function () {
    $(".ele-brands-classify>ul>li").click(function () {
        $(".brands-content").eq($(this).index()).show().siblings(".brands-content-pos").hide()
        $(this).addClass("active").siblings().removeClass("active")
    })
    //$(".ele-brands-classify>ul>li").mouseleave(function () {
    //
    //})

})
//ele-brands部分特效 end

//commen-img-right的tab 栏切换 部分 最难部分 start
 $(function(){
     //$(".tab-top>ul>li").mouseover(function(){
     $(".tab-top").eq(0).find("li").mouseover(function(){
         var index=$(this).index();
         var leftNum=index*47+35;
         $('.tab-top-lab').animate({"left":leftNum+"px"},100);
         //$(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
         $(this).parent().parent().siblings(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
     });
     $(".tab-top").eq(1).find("li").mouseover(function(){
         var index=$(this).index();
         var leftNum=index*47+35;
         $('.tab-top-lab').animate({"left":leftNum+"px"},100);
         //$(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
         $(this).parent().parent().siblings(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
     });
     $(".tab-top").eq(2).find("li").mouseover(function(){
         var index=$(this).index();
         var leftNum=index*47+35;
         $('.tab-top-lab').animate({"left":leftNum+"px"},100);
         //$(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
         $(this).parent().parent().siblings(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
     });
     $(".tab-top").eq(3).find("li").mouseover(function(){
         var index=$(this).index();
         var leftNum=index*47+35;
         $('.tab-top-lab').animate({"left":leftNum+"px"},100);
         //$(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
         $(this).parent().parent().siblings(".tab-con").eq(index).addClass("tab-con-show").siblings("div").removeClass("tab-con-show");
     });
     //});

     $(".tab-con-lis-active").mouseenter(function(){

         $(".tab-con .tab-con-lis-active:eq(0)").removeClass("current");
         $(this).addClass("current");
     });
     $(".tab-con .tab-con-lis-active").nextAll("li").mouseleave(function(){
         if($(this)!==$(".tab-con .tab-con-lis-active:eq(0)")) {
             $(this).removeClass("current");
         }
     });
     $(".tab-con").mouseleave(function(){
         $(".tab-con .tab-con-lis-active:eq(0)").addClass("current");
     });
















    $(".commen-img").mouseenter(function(){
        $(this).animate({"right":"10px"},100);
    })
    $(".commen-img").mouseleave(function(){
        $(this).animate({"right":"-10px"},100);
    });



     //拾惠部分 图片动画 start
     $(".my-ele-module-one").find("img").mouseenter(function(){
         $(this).addClass("current");
         $(this).animate({"left":"-10px"},100);
     })
    $(".my-ele-module-one").find("img").mouseleave(function(){
         $(this).removeClass("current");
        $(this).animate({"left":"0px"},100);
     });


     //drop部分特效 start
        $(".sel-one").mouseenter(function(){
            $(this).children(".asideright").show(500).parent().siblings().find(".asideright").hide();
        });
         $(".sel-one").mouseleave(function(){
             $(this).children(".asideright").hide();
         });
         $(".drop-all").mouseenter(function(){
             $(this).children(".asiderightAll").show(500);
         });
         $(".drop-all").mouseleave(function(){
             $(this).children(".asiderightAll").hide();
         });
      //more 下拉单特效 start
            $(".ele-search-more").mouseenter(function(){
                $(".more").css("display","block");
                $(this).css("borderBottom","none");
            })
             $(".ele-search-more").mouseleave(function(){
                 $(".more").css("display","none");
                 $(this).css("borderBottom","1px solid #ccc");
             });

        //小圆箭头部分 背景变色部分 start
        $(".main-right-bottom>ul>li").mouseenter(function(){
            $(this).find("i").css("background","#3e80ff");
        });
         $(".main-right-bottom>ul>li").mouseleave(function(){
             $(this).find("i").css("background","black");
         });

        //commen-img-mid部分 高亮特效start
        $(".commen-img-mid>ul>li").mouseover(function(){
            $(this).removeClass("current").siblings("li").addClass("current");
        })
        $(".commen-img-mid").mouseout(function(){
            $(this).find("li").removeClass("current");
        })
     });
//commen-img-right的tab 栏切换 部分 最难部分 end

























