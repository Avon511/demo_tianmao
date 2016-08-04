/**
 * Created by ffddgdf on 2016/1/12.
 */

window.onload=function() {
    function $(id) {
        return document.getElementById(id);
    }

    //S--关闭上方图片
    var activity_tx = $("activity");
    var close_tx = $("close_a");
    close_tx.onclick = function () {
        //alert(close_tx)
        activity_tx.style.display = "none";
    }
    //E--关闭上方图片

    //S--导航栏下拉菜单
    var item_right_one=$("item_right_one");
    var one=$("one");
    var item_right_one_next=$("item_right_one_next");
    var item_right_four=$("item_right_four");
    var item_right_four_next=$("item_right_four_next");
    var item_right_six=$("item_right_six");
    var item_right_six_next=$("item_right_six_next");
    var search_next=$("search_next");
    var search_s_add=$("search_s_add");

    function dis(mouse,target){
        mouse.onmouseover=function(){
            mouse.style.backgroundColor="white";
            target.style.display="block";
        }
        mouse.onmouseout=function(){
            mouse.style.backgroundColor="#F2F2F2";
            target.style.display="none";
        }
    }
    dis(item_right_one,item_right_one_next);
    dis(item_right_four,item_right_four_next);
    dis(item_right_six,item_right_six_next);
    dis(search_next,search_s_add);
    //E--导航栏下拉菜单

    //S--左右返回
    var backTop = $("backTop");
    var target = 0;
    var leader = 0;
    var timer = null;
    var backright=$("backright");
    //S--封装
    function show(id) {
        $(id).style.display = "block";
    }
    function hide(id) {
        $(id).style.display = "none";
    }
    function scroll() {
        if (window.pageYOffset != null) {
            //正常浏览器 谷歌 火狐 IE9+
            /*var obj = {
             top: window.pageYOffset,
             left: window.pageXOffset
             }
             return obj;*/

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
    //E--封装
    window.onscroll = function () {
        scroll().top > 100 ? show("backTop") : hide("backTop");
        leader = scroll().top;

    }
    backright.onclick=function(){
        timer = setInterval(function () {
            var step = (target - leader) / 10;//step = (target - leader) / 10
            step = target > leader ? Math.ceil(step) : Math.floor(step);//根据目标来向上或者向下取整
            leader = leader + step;
            window.scrollTo(0, 0);
            //console.log("leader: " + box.offsetLeft + "step" + step);
            if (target == leader) {
                clearInterval(timer);
            }
        }, 30)
    }
    backTop.onclick = function () {
        timer = setInterval(function () {
            var step = (target - leader) /5;//step = (target - leader) / 10
            step = target > leader ? Math.ceil(step) : Math.floor(step);//根据目标来向上或者向下取整
            leader = leader + step;
            window.scrollTo(0, leader);
            //console.log("leader: " + box.offsetLeft + "step" + step);
            if (target == leader) {
                clearInterval(timer);
            }
        }, 30)
    }
    //E--左右返回

    //S--图片切换
     var navi_center = document.getElementById("navi_center");
     var navi_center_top = document.getElementById("navi_center_top");
     var ul=navi_center_top.children[0];
     var ulLis=ul.children;
     var ol=navi_center_top.children[1];
     var arr = document.getElementById("arr");
     var right = document.getElementById("right");
     var left = document.getElementById("left");
     var ul = document.getElementById("imgs");
     var imgs = ul.children;
     var imgWidth=ul.children[0].offsetWidth;

   //S--左右焦点
    navi_center_top.onmouseover = function () {
        //鼠标经过box 清理定时器
        clearInterval(timer);
        arr.style.display = "block";
    }
    navi_center_top.onmouseout = function () {
        timer = setInterval(autoplay, 1000);
        arr.style.display = "none";
    }
    var pic=0;
    right.onclick=function(){
        if(pic<imgs.length-2){
            pic++;
        }
        var target=-pic*imgWidth;
        animate(ul,target)
    }
    left.onclick=function(){
        if(pic>0){
            pic--;
        }
        var target=-pic*imgWidth;
        animate(ul,target)
    }
    //E--左右焦点


    //S--自动轮播
    //1.根据图片数量 动态生成olLis
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "cur";

    //2.鼠标经过按钮 排他 根据按钮的索引去移动ul
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        //鼠标经过 按钮排他
        olLis[j].onmouseover = function () {
            //干掉所有人
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //留下我自己
            this.className = "cur";
            //还要 移动ul到target
            //target 和 索引 图片宽度 有关
            var target = -this.index * imgWidth;
            animate(ul, target);
            pic = this.index;
            square = this.index;
        }
    }

    //3.为了将来可以进行无缝滚动 我们要把第一个图片追加到ul的最后
    //ul.appendChild(ulLis[0].cloneNode(true));

    //4.让图片进行自动播放 并且是无缝滚动
    //5.按钮也要自动播放
    var pic = 0;//图片的索引 表示当前应该展示的那个图片
    var square = 0;//按钮的索引 表示当前应该亮起的那个按钮
    var timer = null;
    timer = setInterval(autoplay, 2000);


    function autoplay() {
        //判断边界
        if (pic < ulLis.length - 1) {
            pic++;
        } else {
            pic = 0;
            ul.style.left = 0;
        }

        //target 和 图片的索引 图片宽度有关
        var target = -pic * imgWidth;
        animate(ul, target);

        //判断边界
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }


        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        olLis[square].className = "cur";


    }
    //E--自动轮播
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = 9;
            step = obj.offsetLeft < target ? step : -step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 5)
    }


    //E--图片切换



}



