// alert("ok4");
// class 클래스믕 extends 생성 글래스명 {}

//부모 클래스
class Father{
    constructor(){}
        Bag(){alert("가방을 가지고 있다");}
    
}



//부모클래스를 상속하는 자식클래스
class im extends Father{
    constructor(){
        super();
    }
    // 멤버 메소드
    book(){alert("책을 가지고 있다");} 
}


//자식클래스를 new키워드를 사용해서 새 인스턴스 생성
var people = new im();
people.book();
people.Bag();