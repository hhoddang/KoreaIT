// 사용자가 수정하지 말아야 할것을 수정하지못하게 방지하는것.
function Rectangle() {
  //직사각형의 넓이를 구하는 함수
  //생성자 함수를 이용하여 Rectangle 객체로 넓이를 구하기 위함
  //매개변수로 입력받은 값을 width와 height로 할당
  //Rectangle 생성자 함수 (객체) 속성에 추가되지 않게 만든다.
  var width;  //변수생성
  var height; //변수생성
  this.width = width;
  this.height = height;
  //메소드

  //두개의 변수에 접근할 수 있게 set이 들어간 메소드  setWidth 와 setHeight 생성
  // 가로값 메소드 : 음수값이 입력되면 메세지로 알려주는 조건문
    this.setWidth = function(x){   
        if(x < 0){
            alert("음수값은 입력할 수 없습니다.")
        }else{// 입력받은 값이 양수라면 변수width에 입력받은 값을 할당
            width= x;
        }
    }
  // 세로값 메소드 : 음수값이 입력되면 메세지로 알려주는 조건문.
    this.setHeight = function(y){   
        if(y < 0){
            alert("음수값은 입력할 수 없습니다.")
        }else{ // 입력받은 값이 양수라면 변수height에 입력받은 값을 할당
            height = y;
        }
    }
  // 메소드
  // 가로값을 받아오는 메소드.
  this.getWidth = function () { // 사용자로부터 매개변수 x로 입력 받는다
    return width;
  };
  // 세로값을 받아오는 메소드.
  this.getHeight = function () { // 사용자로부터 매개변수 y로 입력 받는다
    return height;
  };
  // 가로세로 곱하기 해서 직사각형의 넓이를 알려주는 메소드
  this.getArea = function () {
    return width * height ;
  };
}


//생성자 함수가 바뀌었으므로 호출 방식도 바뀌어야한다.

var rectangle = new Rectangle();
rectangle.setWidth(4);
console.log("가로값 : " + rectangle.getWidth()); // 가로값 확인
rectangle.setHeight(10);
console.log("세로값 :" + rectangle.getHeight()); // 세로값 확인
console.log("넓이 : " + rectangle.getArea()); // 직사각형의 넓이
//문제점 직사각형의 가로,세로,넓이는 0보다 작을  수 없다 . 그런데 마이너스 값이 사용됨
//해결점 캡슐화를 이용해서 사용자가 수정하지 못하게하거나 잘못된 입력을 불가하게 만듬
