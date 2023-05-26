// alert("ok1");

// 객체 변환 데이터를 보관하는 클래스
class ResultData {
  constructor() {
    // 멤버변수
    this.result;
    this.myName;
    this.myScore;
  }
}

// 데이터를 변환하기 위한 함수
function convertData(k) {
  var box = new ResultData(); //  새 객체 생성
  box.result = k.result;
  box.myName = k.myName;
  box.myScore = k.myScore;
  alert(`${box.myName}${box.myScore}점`);
}

//객체
var response_A = {
  result: true,
  myName: "사람",
  myScore: 100,
};

// 데이터 변환
convertData(response_A);
