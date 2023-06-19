$(document).ready(function () {
  fullset();
  quickClick();
});
function fullset() {
  var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
  for (var i = 1; i <= pageindex; i++) {
    $("#fullpage > .quick > ul").append("<li></li>");
  }
  $("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
  //마우스 휠 이벤트
  $(window).bind("mousewheel", function (event) {
    var page = $(".quick ul li.on");
    //alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
    if ($("body").find("#fullpage:animated").length >= 1) return false;
    //마우스 휠을 위로
    if (event.originalEvent.wheelDelta >= 0) {
      var before = page.index();
      if (page.index() >= 0)
        page.prev().addClass("on").siblings(".on").removeClass("on"); //퀵버튼옮기기
      var pagelength = 0;
      for (var i = 1; i < before; i++) {
        pagelength += $(".full" + i).height();
      }
      if (page.index() > 0) {
        page = page.index() - 1;
        $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
      } 
    } else {
      // 마우스 휠을 아래로
      var nextPage = parseInt(page.index() + 1); 
      var lastPageNum = parseInt($(".quick ul li").size()); 
      if (page.index() <= $(".quick ul li").size() - 1) {
        page.next().addClass("on").siblings(".on").removeClass("on");
      }

      if (nextPage < lastPageNum) {
        //마지막 페이지가 아닐때만 animate !
        var pagelength = 0;
        for (var i = 1; i < nextPage + 1; i++) {
          pagelength += $(".full" + i).height();
        }
        $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
      } 
    }
  });
  $(window).resize(function () {
    var resizeindex = $(".quick ul li.on").index() + 1;

    var pagelength = 0;
    for (var i = 1; i < resizeindex; i++) {
      pagelength += $(".full" + i).height();
    }

    $("#fullpage").animate({ top: -pagelength + "px" }, 0);
  });
}
// 사이드 퀵버튼 클릭 이동
function quickClick() {
  $(".quick li").click(function () {
    var gnbindex = $(this).index() + 1;
    var length = 0;
    for (var i = 1; i < gnbindex; i++) {
      length += $(".full" + i).height();
    }
    if ($("body").find("#fullpage:animated").length >= 1) return false;
    $(this).addClass("on").siblings("li").removeClass("on");

    $("#fullpage").animate({ top: -length + "px" }, 800, "swing");
    return false;
  });
}
