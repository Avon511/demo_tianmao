/**
 * Created by ffddgdf on 2016/1/12.
 */

window.onload=function() {
    function $(id) {
        return document.getElementById(id);
    }

    //S--�ر��Ϸ�ͼƬ
    var activity_tx = $("activity");
    var close_tx = $("close_a");
    close_tx.onclick = function () {
        //alert(close_tx)
        activity_tx.style.display = "none";
    }
    //E--�ر��Ϸ�ͼƬ

    //S--�����������˵�
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
    //E--�����������˵�

    //S--���ҷ���
    var backTop = $("backTop");
    var target = 0;
    var leader = 0;
    var timer = null;
    var backright=$("backright");
    //S--��װ
    function show(id) {
        $(id).style.display = "block";
    }
    function hide(id) {
        $(id).style.display = "none";
    }
    function scroll() {
        if (window.pageYOffset != null) {
            //��������� �ȸ� ��� IE9+
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
            //��DTD����ҳ
            return {
                top: document.documentElement.scrollTop,
                left: document.documentElement.scrollLeft
            }
        } else {
            //û��DTD��
            return {
                top: document.body.scrollTop,
                left: document.body.scrollLeft
            }
        }
    }
    //E--��װ
    window.onscroll = function () {
        scroll().top > 100 ? show("backTop") : hide("backTop");
        leader = scroll().top;

    }
    backright.onclick=function(){
        timer = setInterval(function () {
            var step = (target - leader) / 10;//step = (target - leader) / 10
            step = target > leader ? Math.ceil(step) : Math.floor(step);//����Ŀ�������ϻ�������ȡ��
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
            step = target > leader ? Math.ceil(step) : Math.floor(step);//����Ŀ�������ϻ�������ȡ��
            leader = leader + step;
            window.scrollTo(0, leader);
            //console.log("leader: " + box.offsetLeft + "step" + step);
            if (target == leader) {
                clearInterval(timer);
            }
        }, 30)
    }
    //E--���ҷ���

    //S--ͼƬ�л�
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

   //S--���ҽ���
    navi_center_top.onmouseover = function () {
        //��꾭��box ����ʱ��
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
    //E--���ҽ���


    //S--�Զ��ֲ�
    //1.����ͼƬ���� ��̬����olLis
    for (var i = 0; i < ulLis.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "cur";

    //2.��꾭����ť ���� ���ݰ�ť������ȥ�ƶ�ul
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        //��꾭�� ��ť����
        olLis[j].onmouseover = function () {
            //�ɵ�������
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //�������Լ�
            this.className = "cur";
            //��Ҫ �ƶ�ul��target
            //target �� ���� ͼƬ��� �й�
            var target = -this.index * imgWidth;
            animate(ul, target);
            pic = this.index;
            square = this.index;
        }
    }

    //3.Ϊ�˽������Խ����޷���� ����Ҫ�ѵ�һ��ͼƬ׷�ӵ�ul�����
    //ul.appendChild(ulLis[0].cloneNode(true));

    //4.��ͼƬ�����Զ����� �������޷����
    //5.��ťҲҪ�Զ�����
    var pic = 0;//ͼƬ������ ��ʾ��ǰӦ��չʾ���Ǹ�ͼƬ
    var square = 0;//��ť������ ��ʾ��ǰӦ��������Ǹ���ť
    var timer = null;
    timer = setInterval(autoplay, 2000);


    function autoplay() {
        //�жϱ߽�
        if (pic < ulLis.length - 1) {
            pic++;
        } else {
            pic = 0;
            ul.style.left = 0;
        }

        //target �� ͼƬ������ ͼƬ����й�
        var target = -pic * imgWidth;
        animate(ul, target);

        //�жϱ߽�
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
    //E--�Զ��ֲ�
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


    //E--ͼƬ�л�



}



