// =====================//
//메인이미지 슬릭슬라이더 //
// =====================//
$(function () {
  $(".bannerImg").slick({
    autoplay: true,
    arrow: false,
    speed: 600,
    dots: true,
    fade: false,
    pauseOnHover: true,
  });
});
// =====================//
//메뉴이미지 슬릭슬라이더 //
// =====================//
$(function () {
  $(".product").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
  });
});
// =====================//
//네비게이션 메뉴 호버시  //
// =====================//

$(function () {
  $(".gnb").mouseenter(function () {
    $(this).children(".menuCover").stop().slideDown(300);
    $(this).children(".menuCover").css("border-top", "1px solid #ccc");
    $(".submenu").stop().slideDown(300);
  });
  $(".gnb").mouseleave(function () {
    $(this).children(".menuCover").stop().slideUp(300);
    $(".submenu").stop().slideUp(300);
  });
});



// ==================//
//스크롤 헤더 Sticky //
// =================//

// $(window).scroll(function () {
//   var num = $(document).scrollTop();
//   console.log(num);

//   if (num > 100) {
//     $("#gnb_static").addClass("on");
//   } else {
//     $("#gnb_static").removeClass("on");
//   }
// });
