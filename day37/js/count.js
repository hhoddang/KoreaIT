class Counter {
  constructor() {
    // 멤버 변수
    this.clickedCount = 0;
    var button = document.getElementById("button");
    var clickedCountText = document.getElementById("clickedCountText");

    // 이벤트 리스너 정의
    button.addEventListener("click",()=>{
        this.clickedCount += 1 ;// 클릭할때마다 1 씩 더해지는 함수 
        clickedCountText.textContent = this.clickedCount;
    });
  }
}
