// sub페이지 헤드메뉴 드랍.
$(".header__menu_ul").mouseenter(function(){
  $(".header__menu_drop_ul").stop().slideDown(500);
})

$(".header__menu_ul").mouseleave(function(){
  $(".header__menu_drop_ul").stop().slideUp(200);
})

$(function(){
  $("#appmenu_icon").click(function(){
    $(".hamburger_wrap").stop().slideDown(200);
  })
  $(".appmenu__close").click(function(){
    $(".hamburger_wrap").stop().slideUp(200);
  })

  $("#wrap").mouseenter(function(){
    $(".hamburger_wrap").stop().slideUp(200);
  })
});

$(function () {
  $(".hamburger__ul>li>.na").click(function () {
    $(this)
      .next()
      .slideToggle(300)
      .parent()
      .siblings()
      .find(".hbg__drop")
      .slideUp();
  });
});




$(function(){
  $(".tabMenuWrap").each(function(){
    var tabMenuDiv = $(this);
    var menu_a = tabMenuDiv.find("a");
    var panelDiv = tabMenuDiv.find("fieldset.login");
    panelDiv.hide();
    
    var panelOne = menu_a.filter(".on");
    var panelShow = $(panelOne.attr("href"));

    panelShow.show();

    var panelOne;
    var panelShow;
  

    menu_a.click(function(x){
      var currentA = $(this);
      var currnetA_pannel = $(currentA.attr("href"));
      
      x.preventDefault();
      
      
      panelOne.removeClass("on");
      currentA.addClass("on");
      
    
      panelShow.hide();
      currnetA_pannel.show();
      
      panelOne = currentA;
      panelShow = currnetA_pannel;
      
  })
})

});

// best 메뉴 단품 가격 버튼 
function Button_d(price){
  let el = document.getElementById('number');
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");
  var count = 0;

  var print_price = document.getElementById("print_price");

  plus.addEventListener("click", function(){
    count += 1;
    console.log(count); 
    print_price.innerHTML = `${count*price}원(${count}개)` 
    el.value = count;
    if(count<1){
      print_price.innerHTML = "수량은 한개이상입니다."
    }
  });

  minus.addEventListener("click", function(){

    if(count<1){
      print_price.innerHTML = "수량은 한개이상입니다."
      count = 0;
      el.value = count;
    } else {
    count -= 1;
    print_price.innerHTML = `${count*price}원` 
    el.value = count;
    }
  });
}

Button_d(3900);








  


