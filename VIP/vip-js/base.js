

//window.onload= function () {

$(document).ready(function () {







        //�ֲ�ͼ����start
        var box = document.getElementById("box");
        var screen = box.children[0];
        var ul = screen.children[0];
        var ol = screen.children[1];
        var ulLis = ul.children;
        var bg=document.getElementById("vipLb");
        var imgWidth = screen.offsetWidth;
        //1.����ͼƬ�������� ��̬���ɰ�ť
        for (var i = 0; i < ulLis.length; i++) {
            var li = document.createElement("li");
            //������
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        //��ȡ�ո����ɵ�olLis
        var olLis = ol.children;
        //��ʱ������һ��"current"
        olLis[0].className = "current";
        bg.style.background="#FEA01C";
        var arrColor=["#FEA01C","#FE456F","#413EE5","#A4D3FF","#EF494D"]
        //2.��꾭�� ��ť���� �� ��ʾ��Ӧ��ͼƬ
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].index = j;
            //��ÿһ��olLis�� ��꾭���¼�
            olLis[j].onmouseover = function () {
                //�ɵ�������
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                //�������Լ�
                this.className = "current";
                //ͨ���������� ��ul�ƶ���ָ��λ��
                var target = -this.index * imgWidth;
                animate(ul, target);
                pic = this.index;
                square = this.index;
                //alert(this.index)
                //console.log(arrColor[this.index]);
                bg.style.background=arrColor[this.index ];

            }
        }

        //3.Ϊ�޷������׼�� ����һ��ͼƬ׷�ӵ����
        ul.appendChild(ulLis[0].cloneNode(true));
        //4.ͼƬ�Զ�����
        //5.��ť�Զ�����
        var pic = 0;//������¼ ��ǰӦ����ʾ��ͼƬ������
        var square = 0;
        var timer = null;
        timer = setInterval(autoplay, 3000);
        //6.��꾭��box ����ʱ�� ����뿪��������
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
            //���� target �� pic imgWidth
            var target = -pic * imgWidth;
            animate(ul, target);
            //���square С�� ���İ�ť��������
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }
            //�ɵ�������
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //����ǰ��
            olLis[square].className = "current";
            bg.style.background=arrColor[pic ];

        }
        //����Ƕ������� obj��ϣ���ƶ��Ķ��� target�Ƕ�����ƶ�Ŀ��
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
//�ֲ�ͼ����end

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


//nav listDown����start
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
//nav listDown����end

//��Ȩ����start
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
//��Ȩ����end



//�����ֲ�ͼstart
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
             //2.��꾭�� ��ť���� �� ��ʾ��Ӧ��ͼƬ
            for (var j = 0; j < ulsp.length; j++) {
                ulsp[j].index1 = j;
                //��ÿһ��olLis�� ��꾭���¼�
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
    //3.Ϊ�޷������׼�� ����һ��ͼƬ׷�ӵ����
    screen1.appendChild(ulLiss[0].cloneNode(true));
    //4.ͼƬ�Զ�����
    //5.��ť�Զ�����
    var pic1 = 0;//������¼ ��ǰӦ����ʾ��ͼƬ������
    var square1 = 0;
    var timer1 = null;
    timer1 = setInterval(autoplay1, 3000);
    //6.��꾭��box ����ʱ�� ����뿪��������
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
        //���� target �� pic imgWidth
        var target1 = -pic1 * imgWidth;
        animate1(screen1, target1);
        //���square С�� ���İ�ť��������
        if (square1 < ulsp.length - 1) {
            square1++;
        } else {
            square1 = 0;
        }
        //�ɵ�������
        for (var i = 0; i < ulsp.length; i++) {
            ulsp[i].className = "";
        }
        //����ǰ��
        ulsp[square1].className = "current1";

    }

    function animate1(obj, target) {
        //һ��ʼ������һ�¶�ʱ�� ���û�о����� �еĻ�������
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            //���ò���ֵ һ����9����
            var step = 910;

            step = obj.offsetLeft < target ? step : -step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = obj.offsetLeft + step + "px";
            } else {
                obj.style.left = target + "px";
                //�����յ� ����ʱ��
                clearInterval(obj.timer);
            }
            console.log("���뻹������");
        }, 1)
    }
        //});
//�����ֲ�ͼend
})
$(function () {
    $("#clickTop").parent().click(function () {
        window.scrollTo(0,0)
        //alert(12)
        //$(window).animate({"scrollTop":"0"})
    })
})