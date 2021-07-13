/* 헤더고정 */
$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.header_wrap').addClass('on')
            $('ul.depth1>li>a').addClass('on')
            $('#gnb ul.gnb_icon .login_bk').addClass('on')
            $('#gnb ul.gnb_icon .cart_bk').addClass('on')
            $('#gnb ul.gnb_icon .search_bk').addClass('on')
            $('#gnb ul.gnb_icon .login_wh').addClass('on')
            $('#gnb ul.gnb_icon .cart_wh').addClass('on')
            $('#gnb ul.gnb_icon .search_wh').addClass('on')
            $('#gnb ul.depth1>li:hover>a').addClass('on')
        } else {
            $('.header_wrap').removeClass('on')
            $('ul.depth1>li>a').removeClass('on')
            $('#gnb ul.gnb_icon .login_bk').removeClass('on')
            $('#gnb ul.gnb_icon .cart_bk').removeClass('on')
            $('#gnb ul.gnb_icon .search_bk').removeClass('on')
            $('#gnb ul.gnb_icon .login_wh').removeClass('on')
            $('#gnb ul.gnb_icon .cart_wh').removeClass('on')
            $('#gnb ul.gnb_icon .search_wh').removeClass('on')
            $('#gnb ul.depth1>li:hover>a').addClass('on')
        }
    })
});

/* 비주얼 - 마우스 올리면 스톱*/
$(document).ready(function(){
    $(".main_visual").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });
});

/* sec3. step 버튼 클릭하면 다음 step으로 넘어가게 */
$(document).ready(function () {
    $('ul.step li').on('click', function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.step li').removeClass('on');
        $('.stepbox').removeClass('on');

        $(this).addClass('on');
        $('#' + tab_id).addClass('on')
    })
});

/* sec3. stepbox 버튼 클릭하면 다음 step으로 넘어가게 */
$(document).ready(function () {
    $('#tab01>input[type=radio').on('click', function () {
        $('ul.step li').eq(0).removeClass('on');
        $('ul.step li').eq(1).addClass('on');
        $('#tab01').removeClass('on');
        $('#tab02').addClass('on');
    })

    $('#tab02>input[type=radio').on('click', function () {
        $('ul.step li').eq(1).removeClass('on');
        $('ul.step li').eq(2).addClass('on');
        $('#tab02').removeClass('on');
        $('#tab03').addClass('on');
    })
});

/* 레고티비 autoplay stop */
$(document).ready(function(){
    $(".tv_slide").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });
});

/* 탑버튼 상단으로 스크롤*/
$(document).ready(function () {
    $(".top_btn>a").click(function () {
        $('html, body').animate({ scrollTop: 0 }, '500');
    });
});

/* 푸터 패밀리사이트 */
$(document).ready(function() {
    $('select').niceSelect();
});

/* 서브페이지 */
/* 전체보기 탭디자인 */
$(document).ready(function() {
    $(".category ul li").click(function() {
      var id = $(this).index();
      $(".category ul li").removeClass("on");
      $(".category ul li").eq(id).addClass("on");
      $(".prod_list>ul").removeClass("on");
      $(".prod_list>ul").eq(id).addClass("on");
    });
  });

  /* 이벤트 페이지 탭디자인  */
$(document).ready(function() {
    $(".sub_title li").click(function() {
      var idx = $(this).index();
      $(".sub_title>li").removeClass("on");
      $(".sub_title>li").eq(idx).addClass("on");
      $(".event_contents>div").removeClass("on");
      $(".event_contents>div").eq(idx).addClass("on");
    });
});

/* FAQ 페이지 탭디자인  */
$(document).ready(function() {
    $(".sub_title li").click(function() {
      var idx = $(this).index();
      $(".sub_title>li").removeClass("on");
      $(".sub_title>li").eq(idx).addClass("on");
      $(".faq>div").removeClass("on");
      $(".faq>div").eq(idx).addClass("on");
    });
});
