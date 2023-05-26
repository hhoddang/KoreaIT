//alert("ok");

class FirstClass {
    constructor(){
        this.im = "자동차";
    }
    ability1(){
        return alert("하늘을 날아다닌다");
    }
    ability2(){
        return alert(10000);
    }
}
var car = new FirstClass();
alert(car.im);
car.ability1();

car.ability2();
