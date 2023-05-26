// 사용자가 수정하지 말아야 할것을 수정하지못하게 방지하는것.
function Rectangle(width, height) {
  //직사각형의 넓이를 구하는 함수
  //생성자 함수를 이용하여 Rectangle 객체로 넓이를 구하기 위함
  //매개변수
  this.width = width;
  this.height = height;
  // 메소드
  // 가로값을 받아오는 메소드.
  this.getWidth = function () {
    return this.width;
  };
  // 세로값을 받아오는 메소드.
  this.getHeight = function () {
    return this.height;
  };
  // 가로세로 곱하기 해서 직사각형의 넓이를 알려주는 메소드
  this.getArea = function () {
    return this.width * this.height;
  };
}
var rectangle = new Rectangle(4,5);
console.log("가로값 : "+rectangle.getWidth()); // 가로값 확인
console.log("세로값 :"+rectangle.getHeight()); // 세로값 확인
console.log("넓이 : "+rectangle.getArea()); // 직사각형의 넓이
rectangle.width= -5;
console.log("넓이 : "+rectangle.getArea()); // 직사각형의 넓이
//문제점 직사각형의 가로,세로,넓이는 0보다 작을  수 없다 . 그런데 마이너스 값이 사용됨
//해결점 캡슐화를 이용해서 사용자가 수정하지 못하게하거나 잘못된 입력을 불가하게 만듬