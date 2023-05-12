

$(function () {
  $(".mobileCloseBtn").click(function () {
      $(".mobileMenu").toggleClass("on");
      $(".mobileMenuBg").toggleClass("on");
      $(".line").toggleClass("on");
  });
});
$(function () {
  $(".mobileMenuBg").click(function () {
      $(".mobileMenu").toggleClass("on");
      $(".mobileMenuBg").toggleClass("on");
      $(".line").toggleClass("on");
  });
});


$(function () {
  $("nav>ul>li>.na").click(function () {
    $(this)
      .next()
      .slideToggle(300)
      .parent()
      .siblings()
      .find(".sub1")
      .slideUp();
  });
});
