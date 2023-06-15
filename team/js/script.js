var box = 1;
function next(x) {
  box++;
  if (box == 4) {
    box = 1;
  }
  document.getElementById("mainimg").src = "images/main" + box + ".jpg";
}
function prev(x) {
  box--; //1씩 증가
  if (box == 0) {
    //변수 box의 값이 5보다 크게되면
    box = 3; //변수 box 재선언한다(파일명에 1이 들어간 이미지를 보이게 한다)
  }
  document.getElementById("mainimg").src = "images/main" + box + ".jpg";
}

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

var w = $(window).width();
if (w < 599) {
  $(function () {
    $("nav>ul>li>.na").click(function () {
      $(this)
        .next()
        .slideToggle(300)
        .parent()
        .siblings()
        .find(".sub_m")
        .slideUp();
    });
  });
  var mbox = 1;
  function next(x) {
    mbox++;
    if (mbox == 3) {
      mbox = 1;
    }
    document.getElementById("Mobilemainimg").src =
      "images/m_main" + mbox + ".jpg";
  }
  function prev(x) {
    mbox--; //1씩 증가
    if (mbox == 0) {
      mbox = 1;
    }
    document.getElementById("Mobilemainimg").src =
      "images/m_main" + mbox + ".jpg";
  }
}

var pw = $(window).width();
if (w < 767 && w > 600) {
  var tbox = 1;
  function next(x) {
    tbox++;
    if (tbox == 3) {
      tbox = 1;
    }
    document.getElementById("tabletmainimg").src =
      "images/tablet_bg" + tbox + ".jpg";
  }
  function prev(x) {
    tbox--; //1씩 증가
    if (tbox == 0) {
      //변수 box의 값이 5보다 크게되면
      tbox = 1; //변수 box 재선언한다(파일명에 1이 들어간 이미지를 보이게 한다)
    }
    document.getElementById("tabletmainimg").src =
      "images/tablet_bg" + tbox + ".jpg";
  }
}
// ==== 태블릿 슬라이드 ====
