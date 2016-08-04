

//window.onload= function () {

$(document).ready(function () {







        //轮播图部分start
        var box = document.getElementById("box");
        var screen = box.children[0];
        var ul = screen.children[0];
        var ol = screen.children[1];
        var ulLis = ul.children;
        var bg=document.getElementById("vipLb");
        var imgWidth = screen.offsetWidth;
        //1.根据图片的数量来 动态生成按钮
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            //添加序号
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        //获取刚刚生成的olLis
        var olLis = ol.children;
        //临时给他加一个"current"
        olLis[0].className = "current";
        bg.style.background="#FEA01C";
        var arrColor=["#FEA01C","#FE456F","#413EE5","#A4D3FF","#EF494D"]
        //2.鼠标经过 按钮排他 并 显示相应的图片
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].index = j;
            //给每一个olLis绑定 鼠标经过事件
            olLis[j].onmouseover = function () {
                //干掉所有人
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                //留下我自己
                this.className = "current";
                //通过动画函数 将ul移动到指定位置
                var target = -this.index * imgWidth;
                animate(ul, target);
                pic = this.index;
                square = this.index;
                //alert(this.index)
                //console.log(arrColor[this.index]);
                bg.style.background=arrColor[this.index ];

            }
        }

        //3.为无缝滚动做准备 将第一张图片追加到最后
        ul.appendChild(ulLis[0].cloneNode(true));
        //4.图片自动滚动
        //5.按钮自动滚动
        var pic = 0;//用来记录 当前应该显示的图片的索引
        var square = 0;
        var timer = null;
        timer = setInterval(autoplay, 3000);
        //6.鼠标经过box 清理定时器 鼠标离开继续滚动
        box.onmouseover = function () {
            clearInterval(timer);
        }
        box.onmouseout = function () {
            timer = setInterval(autoplay,3000);
        }
        function autoplay() {
            if (pic < ulLis.length - 1) {
                pic++;
            } else {
                pic = 1;
                ul.style.left = 0;
            }
            //分析 target 和 pic imgWidth
            var target = -pic * imgWidth;
            animate(ul, target);
            //如果square 小于 最后的按钮的索引号
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }
            //干掉所有人
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //亮起当前的
            olLis[square].className = "current";
            bg.style.background=arrColor[pic ];

        }
        //这个是动画函数 obj是希望移动的对象 target是对象的移动目标
        function animate(obj,target){
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var leader = obj.offsetLeft;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style.left = obj.offsetLeft + step + "px";
                if (leader == target) {
                    clearInterval(obj.timer);
                }
            }, 10)
        }
//轮播图部分end

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


//nav listDown部分start
        var siteNavR=document.getElementById("siteNavR");
        var siteNavRul=siteNavR.children[0];
        var siteNavRli=siteNavRul.children;
        for(var i=0;i<siteNavRli.length;i++){
            siteNavRli[i].onmouseover= function () {
                if(this.classList.contains("ListDown"))
                {
                    this.style.background="#fff";
                    var lisDown=this.lastElementChild;
                    lisDown.style.display="block";
                }
            }
            siteNavRli[i].onmouseout= function () {
                if(this.classList.contains("ListDown"))
                {
                    this.style.background="";
                    var lisDown=this.lastElementChild;
                    lisDown.style.display="none";
                }
            }
        }
//nav listDown部分end

//特权部分start
    //        var privilegeL = $("privilegeL");
    //        alert(privilegeL);
    //        var privilegeL=$("privilegeL");
    //        var privilegeL=document.getElementById("privilegeL");
    //        var privilegeLul = privilegeL.children[1];
    //        var privilegeLli = privilegeLul.children;
    //        for (var i = 0; i < privilegeLli.length; i++) {
    //            $(privilegeLli[i]).mouseenter(function () {
    //                //alert(this);
    //                this.style.borderBottom="2px";
    //                this.style.borderBottomColor="red";
    //
    //            })
    //        }
//特权部分end



//花呗轮播图start
//    var layUl=$("#layUl");
    var layUl=document.getElementById("layUl");
    var ulsp=layUl.children;
//        $("#layUl").on("mouseenter click",".spanItem", function () {

            var box1 = document.getElementById("box1");
            var screen1 = box1.children[0];
            var ulLiss=screen1.children;
            //console.log(ull);
            var imgWidth1 = ulLiss[0].offsetWidth;

            ulsp[0].className= "current1";
             //2.鼠标经过 按钮排他 并 显示相应的图片
            for (var j = 0; j < ulsp.length; j++) {
                ulsp[j].index1 = j;
                //给每一个olLis绑定 鼠标经过事件
                ulsp[j].onmouseover = function () {
                    for (var k = 0; k < ulsp.length; k++) {
                        ulsp[k].className = "";
                    }
                    this.className = "current1";
                    var target1 = -this.index1 * imgWidth1;
                    animate1(screen1, target1);
                    pic1 = this.index1;
                    square1 = this.index1;

                }
            }
    //3.为无缝滚动做准备 将第一张图片追加到最后
    screen1.appendChild(ulLiss[0].cloneNode(true));
    //4.图片自动滚动
    //5.按钮自动滚动
    var pic1 = 0;//用来记录 当前应该显示的图片的索引
    var square1 = 0;
    var timer1 = null;
    timer1 = setInterval(autoplay1, 3000);
    //6.鼠标经过box 清理定时器 鼠标离开继续滚动
    box1.onmouseover = function () {
        clearInterval(timer1);
    }
    box1.onmouseout = function () {
        timer1 = setInterval(autoplay1,3000);
    }
    function autoplay1() {
        if (pic1 < ulLiss.length - 1) {
            pic1++;
        } else {
            pic1 = 1;
            screen1.style.left = 0;
        }
        //分析 target 和 pic imgWidth
        var target1 = -pic1 * imgWidth;
        animate1(screen1, target1);
        //如果square 小于 最后的按钮的索引号
        if (square1 < ulsp.length - 1) {
            square1++;
        } else {
            square1 = 0;
        }
        //干掉所有人
        for (var i = 0; i < ulsp.length; i++) {
            ulsp[i].className = "";
        }
        //亮起当前的
        ulsp[square1].className = "current1";

    }

    function animate1(obj, target) {
        //一开始先清理一下定时器 如果没有就算了 有的话就清理
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            //设置步长值 一步走9像素
            var step = 910;

            step = obj.offsetLeft < target ? step : -step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                //到了终点 清理定时器
                clearInterval(obj.timer);
            }
            console.log("代码还在运行");
        }, 1)
    }
        //});
//花呗轮播图end
})
$(function () {
    $("#clickTop").parent().click(function () {
        window.scrollTo(0,0)
        //alert(12)
        //$(window).animate({"scrollTop":"0"})
    })
})