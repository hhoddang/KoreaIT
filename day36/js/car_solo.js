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
    return this.ModelName;
  }
  getModelYear() {
    return this.ModelYear;
  }

  setModelName(ModelName) {
    this.ModelName = ModelName;
  }
  setModelYear(ModelYear) {
    this.ModelYear = ModelYear;
  }
}

var car1 = new Car("트레일블레이저", 2023); //새 객체 생성 (인스턴스화)
var ModelName = car1.getModelName();
car1.setModelName("트래버스");
alert(car1.ModelName); // 트레일 블레이저

// class 클래스명 extends 생성클래스명 {}
class ElectricCar extends Car {
  constructor(ModelName, ModelYear, chargeTime) {
    super(ModelName, ModelYear); // 부모개체가 가지고있는 멤버변수 상속
    // ElectricCar객체만의 멤버변수
    this.chargeTime = chargeTime; //충전시간
  }

  //ElectricCar 멤버메소드
  setChargeTime(time) {
    this.chargeTime = time;
  }
  getChargetime(){
    return this.chargeTime;
  }
}

var ElectricCar1 = new ElectricCar("볼트EUV", 2023 , 30); // 전기 자동차 클래스 새 객체 생성
ElectricCar1.setChargeTime(20);
alert(ElectricCar1.chargeTime);

