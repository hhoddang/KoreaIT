// alert("ok");

class FirstClass{
    constructor(x,y="10시"){  //constructor 함수는 필수로 사용
        //멤버 변수
        this.x = x;
        this.y = x+y;
        return y;
    }

    study (){
        alert("공부");
    }
};




var Fristclass1 = new FirstClass ("아침");
alert(Fristclass1.x + Fristclass1.y);
Fristclass1.study();