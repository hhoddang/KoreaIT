// alert("ok");
// var modalButton = document.getElementById("modalButton");
// modalButton.addEventListener("click", modalWindow);

// function modalWindow() {
  // 모달창 생성 반투명,컨텐츠 가림목적
  var modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");

  //모달창 내부    팝업내용
  var innerDiv = document.createElement("div");
  innerDiv.classList.add("inner");
  innerDiv.innerHTML = `
    <p>내용</p>
    <div><img src="images/americano.JPG" alt=""></div>
    `;

  //모달창 반투명 div의 자식으로 팝업내용 div를 추가
  modalDiv.appendChild(innerDiv);

  //모달창 배치
  document.body.appendChild(modalDiv);

  innerDiv.addEventListener("click", function () {
    close_modalWindow(modalDiv);
  });
// }

// 모달창 삭제 함수          매개변수
function close_modalWindow(modalDiv) {
  document.body.removeChild(modalDiv);
}
