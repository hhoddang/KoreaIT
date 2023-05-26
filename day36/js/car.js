// alert("ok");
class Car {
  // 자동차 클래스객체 , 추상화 (값이 하나도 들어가있지 않음)
  constructor(ModelName, ModelYear) {
    // class내부에 필수로 들어가야함.
    //멤버변수
    //자동차 모델명,
    this.ModelName = ModelName;
    this.ModelYear = ModelYear;
  }

  //멤버 메소드
  getModelName() {
    return this.ModelName
  }
  getModelYear() {
    return this.ModelYear
  }

  setModelName(ModelName) {
    this.ModelName = ModelName
  }
  setModelYear(ModelYear) {
    this.ModelYear = ModelYear
  }

}

var car1 = new Car("트레일블레이저",2023);//새 객체 생성 (인스턴스화)
var ModelName = car1.getModelName();
car1.setModelName("트래버스");
car1.setModelYear("2023");
alert(car1.ModelName+car1.ModelYear);

