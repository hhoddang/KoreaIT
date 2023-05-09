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
