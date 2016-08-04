window.onload= function () {
    //nav²¿·Ö
    var mytb = document.getElementById("mytb");
    var wright = document.getElementById("w-right");
    var ul = wright.children[0];
    var lis = ul.children;
    var mytb2 = document.getElementById("mytb2");
    var mytb3 = document.getElementById("mytb3");
    var seller = document.getElementById("seller");
    var wzdh = document.getElementById("wzdh");
    lis[0].onmouseover = function () {
        mytb.style.display = "block";
        this.style.backgroundColor = "white";
    }
    lis[0].onmouseout = function () {
        mytb.style.display = "none";
        this.style.backgroundColor = "#F1F1F1";
    }
    lis[3].onmouseover = function () {
        mytb2.style.display = "block";
        this.style.backgroundColor = "white";
    }
    lis[3].onmouseout = function () {
        mytb2.style.display = "none";
        this.style.backgroundColor = "#F1F1F1";
    }
    lis[4].onmouseover = function () {
        mytb3.style.display = "block";
        this.style.backgroundColor = "white";
    }
    lis[4].onmouseout = function () {
        mytb3.style.display = "none";
        this.style.backgroundColor = "#F1F1F1";
    }
    lis[6].onmouseover = function () {
        seller.style.display = "block";
        this.style.backgroundColor = "white";
    }
    lis[6].onmouseout = function () {
        seller.style.display = "none";
        this.style.backgroundColor = "#F1F1F1";
    }

    lis[7].onmouseover = function () {
        wzdh.style.display = "block";
        this.style.backgroundColor = "white";
    }
    lis[7].onmouseout = function () {
        wzdh.style.display = "none";
        this.style.backgroundColor = "#f1f1f1";
    }

    //topbanner
    //var close=document.getElementById("close");
    //var topbanner=document.getElementById("topbanner");
    //close.onclick= function () {
    //    topbanner.style.display="none";
    //}

}

//tmgj-main-spfl-one
//$.noConflict()
//(function fn($){
$(document).ready(function () {
//1
    $("#mzgj").mouseenter(function () {
        $("#cont1").show();
        $("#mzgj").backgroundColor="#8642E7";

    })

    $("#mzgj").mouseleave(function () {
        $("#cont1").hide();
        this.background="black";
    })
//2
    $("#spbj").mouseenter(function () {
        $("#cont2").show();
       this.background="#8642E7";

    })

    $("#spbj").mouseleave(function () {
        $("#cont2").hide();
        this.background="black";
    })
//3
    $("#myyp").mouseenter(function () {
        $("#cont3").show();
        this.background="#8642E7";

    })

    $("#myyp").mouseleave(function () {
        $("#cont3").hide();
        this.background="black";
    })
//4
    $("#fsxb").mouseenter(function () {
        $("#cont4").show();
        this.background="#8642E7";

    })

    $("#fsxb").mouseleave(function () {
        $("#cont4").hide();
        this.background="black";
    })
//5
    $("#shsm").mouseenter(function () {
        $("#cont5").show();
        this.background="#8642E7";

    })

    $("#shsm").mouseleave(function () {
        $("#cont5").hide();
        this.background="black";
    })

//ÂÖ²¥Í¼

    var circle=document.getElementById("circle");
    var ul1=document.getElementById("ul1");
    var lis=ul1.children;
    var current="";
    lis[0].onmouseover= function () {
        this.className="current";
        pic.src="imgs/b1.jpg";
    }
    lis[0].onmouseout= function () {
        this.className="";
    }

    lis[1].onmouseover= function () {
        this.className="current";
        pic.src="imgs/b2.jpg"

    }
    lis[1].onmouseout= function () {
        this.className="";
        pic.src="imgs/b2.jpg"

    }

    lis[2].onmouseover= function () {
        this.className="current";
        pic.src="imgs/b3.jpg"

    }
    lis[2].onmouseout= function () {
        this.className="";
        pic.src="imgs/b3.jpg"

    }
})

//})(jQuery)
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
$(function () {
    $("#clickTop").parent().click(function () {
        window.scrollTo(0,0)
        //alert(12)
        //$(window).animate({"scrollTop":"0"})
    })
})