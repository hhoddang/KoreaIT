var box = 1;
function next(x){
    box++;
    if(box==6){
        box = 1;
    }
    document.getElementById("mainimg").src = "images/main"+box+".jpg";
}
function prev(x){
    box--; //1씩 증가
    if(box==0){ //변수 box의 값이 5보다 크게되면
        box = 5; //변수 box 재선언한다(파일명에 1이 들어간 이미지를 보이게 한다)
    }
    document.getElementById("mainimg").src = "images/main"+box+".jpg";
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
  