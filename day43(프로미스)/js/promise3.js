var order = new Promise((resolve, reject) => {
  var coffee = prompt("커피를 주문하시겠습니까 ?", "아이스 아메리카노");
  if (coffee != null && coffee != " ") {
    document.getElementById("start").innerText = `${coffee}주문`;
    setTimeout(() => resolve(coffee), 3000); // 주문하는데 약간의 시간이 소요
    resolve(coffee);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
})

function display(result){
    document.getElementById("end").innerText =`${result} 커피 준비완료`;
}
function showErr(err){
    document.getElementById("start").innerText = err;
}

// 소비코드
// order then메소드가 실행되면 promise 객체가 리턴
// 입력 상태에 따라서 상태가 바뀜
order
.then(display)
.catch(showErr)