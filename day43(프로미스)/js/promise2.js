var food = true;
var box1 = new Promise((resolve, reject) => {
    // box1인 Promise 객체   프로미스를 만드는 제작코드 (프로듀싱 코드)

    if (food) { //참일경우
        // 프로미스 함수에서 resolve 함수로 음식을 주문합니다. 라는 글자를 넘겨주는것
        // resolve 함수가 어떤 일을 하는지는 모름.
        resolve("음식을 주문합니다.");
    }else{
        // 프로미스 함수에서 resolve 함수로 음식을 주문하지 않았습니다. 라는 글자를 넘겨주는것
        // reject 함수가 어떤 일을 하는지는 모름.
        reject("음식을 주문하지 않았습니다.");
    }
});

box1 //실제 resolve가 하는 일은 box1의 then 메소드에 있다.
.then(
    result=>console.log(result)
)
.catch(
    err=>console.log(err)
) //프로미스를 실행하는 코드는 소비코드 라고한다. (컨슈밍코드)
.finally(
    ()=>console.log("완료")
)
//성공이나 실패와 상관없이 마지막에 보여줄 실행 문구