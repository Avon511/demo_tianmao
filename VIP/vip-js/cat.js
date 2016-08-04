
        //	$("div").on("mouseenter","li", function () {
        //
        //	})
        //	$("div").on("mouseenter","span", function () {
        //
        //	})

        //	��һ���ǰѾɰ汾jQuery��$Ȩ�޵õ������һ������jquery�ķ����������Ŀ��Կ�һ����
//    $.noConflict();
        // <![CDATA[

        console.log($.fn.jquery);
    (function($) {
        $.fn.jphotogrid = function(settings, callback) {
            settings = $.extend(true, {
                activeClass: 'active',
                selectedClass: 'selected',
                baseCSS: {},
                selectedCSS: {}
            }, settings);

            var url = settings.flickrbase + settings.feedapi + '?';
            var first = true;

            //Convert floats to absolute
            function toAbsolute(el){
                $(el).children().each(function(){
                    var pos = $(this).position();
                    $(this).data('ptop',Math.floor(Number(pos.top)) + 'px');
                    $(this).data('pleft',Math.floor(Number(pos.left)) + 'px');
                }).each(function(){
                    placeOriginal(this);
                });
            }

            function placeOriginal(el, animate, callback){
                var dtop = $(el).data('ptop');
                var dleft = $(el).data('pleft');
                var props = $.extend({
                    top: dtop,
                    left: dleft
                }, settings.baseCSS);
                if(animate){
                    $(el).animate(props, 'slow', function(){
                        if($.isFunction(callback)) callback();
                    });
                }
                else{
                    $(el).css($.extend(props, {position: 'absolute'}));
                }
            }

            function hideSelected(callback){
                $container.find('.' + settings.selectedClass).each(function(){
                    $(this).removeClass(settings.selectedClass);
                    placeOriginal(this, true);
                });
                if($.isFunction(callback)) callback();
            }

            function select(el){
                hideSelected(function(){
                    $(el).addClass('selected').removeClass('active');
                    $(el).animate(settings.selectedCSS, 'slow');
                });
            }

            for(var key in settings.qstrings){
                if(!first)
                    url += '&';
                url += key + '=' + settings.qstrings[key];
                first = false;
            }

            return $(this).each(function(){
                $container = $(this);
                $(this).css('position','relative');
                toAbsolute(this);

                $(this).children()
                    .css('cursor', 'pointer')
                    .hover(function(){
                        if(!$(this).hasClass(settings.selectedClass))
                            $(this).addClass(settings.activeClass);
                    },function(){
                        $(this).removeClass(settings.activeClass);
                    });
                $('.' + settings.activeClass).live('click', function(){
                    select(this);
                });
                $('.' + settings.selectedClass).live('click', function(){
                    hideSelected();
                });

                $(this).find('div')
                    .hover(function(){
                        $(this).css('opacity', 0);
                    },function(){
                        $(this).css('opacity', 0.5);
                    })
                    .click(function(){
                        $(this).css('opacity', 1);
                        $li = $(this).parent();
                        $li.css("z-index", 99);
                        $li.animate({
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '400px'
                        }, 'slow');
                    });
            });
        }
    })($);

//��һ���ǽ�$��Ȩ�޽����µ�1.11.1�汾���漰���հ���֪ʶ������д��jquery�������õ��°汾������д��ʱ���һ�����������

(function ($) {
    console.log($.fn.jquery);
})(jQuery);


$(document).ready(function(){

    $('#pg').jphotogrid({
        baseCSS: {
            width: '200px',
            height: '104px',
            padding: '0px'
        },
        selectedCSS: {
            top: '150px',
            left: '405px',
            width: '360px',
            height: '235px',
            padding: '20px'
        }
    });

});

