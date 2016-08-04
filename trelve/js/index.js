//home-num 部分
$(function(){
    $("#arrow").mouseenter(function () {
        $("#aboard-num").stop().slideDown(300);
    });
    $("#arrow").mouseleave(function () {
        $("#aboard-num").stop().slideUp(300);
    });
});
$(function () {
    $(".header-nav-list").children("li").eq(1).mouseenter(function () {
        $(".trip-header-show1").show();
    });
    $(".header-nav-list").mouseleave(function () {
        $(".trip-header-show1").hide();
    });
})



$(function () {
})
//site-nav部分
$(function () {
    $("#tr-r1").mouseenter(function () {
        $(".nav-list-app").show();
        $(".tr-1")[0].style.backgroundColor = "#FFFFFF";
    });
    $("#tr-r1").mouseleave(function () {
        $(".nav-list-app").hide();
        $(".tr-1")[0].style.backgroundColor = "#F2F2F2";
    });

    $("#tr-r2").mouseenter(function () {
        $(".nav-list-mtb").show();
        $(".tr-2")[0].style.backgroundColor = "#fff";
    });
    $("#tr-r2").mouseleave(function () {
        $(".nav-list-mtb").hide();
        $(".tr-2")[0].style.backgroundColor = "#F2F2F2";
    });

    $("#tr-r3").mouseenter(function () {
        $(".nav-list-sc").show();
        $(".tr-3")[0].style.backgroundColor = "#fff";
    });
    $("#tr-r3").mouseleave(function () {
        $(".nav-list-sc").hide();
        $(".tr-3")[0].style.backgroundColor = "#F2F2F2";
    });

    $("#tr-r4").mouseenter(function () {
        $(".nav-list-buc").show();
        $(".tr-4")[0].style.backgroundColor = "#fff";
    });
    $("#tr-r4").mouseleave(function () {
        $(".nav-list-buc").hide();
        $(".tr-4")[0].style.backgroundColor = "#F2F2F2";
    });

    $("#tr-r5").mouseenter(function () {
        $(".nav-list-webn").show();
        $(".tr-5")[0].style.backgroundColor = "#fff";
    });
    $("#tr-r5").mouseleave(function () {
        $(".nav-list-webn").hide();
        $(".tr-5")[0].style.backgroundColor = "#F2F2F2";
    });
})
//search-field部分
$(function () {
    $(".tricon-change").mouseenter(function () {
        $(".tricon-change")[0].style.backgroundPositionX = "-25px";
    });
    $(".tricon-change").mouseleave(function () {
        $(".tricon-change")[0].style.backgroundPositionX = "0";
    });




})

//trip-ticket
$(function () {

    $(".my-traval-place img").mouseenter(function () {
        $(this).stop().animate({width:198,height:200},500);
    });
    $(".my-traval-place img").mouseleave(function () {
        $(this).stop().animate({width:188,height:200},500);
    });


    $(".my-traval-place-more>ul>li").mouseenter(function () {
        $(this).stop().animate({marginLeft:0},300);
});
    $(".my-traval-place-more>ul>li").mouseleave(function () {
        $(this).stop().animate({marginLeft:14},300);
    });

})

//轮播图部分
window.onload = function(){
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var bac = document.getElementById("bac");

    var banItm = document.getElementsByClassName("trip-banner-items")[0];
    var banUl = banItm.children[0];
    var banol = banItm.children[1];
    var ulLis = banUl.children;
    var imgWidth = ulLis[0].offsetWidth;
    for(var i= 0; i<ulLis.length;i++){
        var li = document.createElement("li");
        banol.appendChild(li);
    }
    var olLis =banol.children ;
    banol.children[0].className = "current";
    for(var j=0; j<ulLis.length; j++){
        olLis[j].index = j;

        olLis[j].onclick = function(){
            for(var k=0; k<olLis.length; k++){
                olLis[k].className = "";
            }
            this.className = "current";
            var target = -this.index*imgWidth;
            animate(banUl,target);

            pic = this.index;
            square = this.index;
        }
    }
    banUl.appendChild(ulLis[0].cloneNode(true));
    var pic = 0;//用来记录 当前应该显示的图片的索引
    var square = 0;
    var timer = null;
    timer = setInterval(autoplay, 4000);

    banItm.onmouseover = function () {
        clearInterval(timer);
    }
    banItm.onmouseout = function () {
        timer = setInterval(autoplay, 4000);
    }

    function autoplay() {
        if (pic < ulLis.length-1) {
            pic++;
        } else {
            pic = 1;
            banUl.style.left = 0;
        }


        var target = -pic * imgWidth;
        animate(banUl, target);

        if (square < olLis.length -1) {
            square++;
        } else {
            square = 0;
        }

        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //亮起当前的
        olLis[square].className = "current";

    }

    //之前封装好的
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

        }, 6)
    }
}
