var step1 = (callback) => {
  setTimeout(() => {
    console.log("음식재료와 요리도구준비");
    callback();
  }, 2000);
};

var step2 = (callback) => {
  setTimeout(() => {
    console.log("요리시작");
    callback();
  }, 1000);
};

var step3 = (callback) => {
  setTimeout(() => {
    console.log("요리완료");
    callback();
  }, 2000);
};

step1(function () {
  step2(function () {
    step3(function () {
      console.log("음식이 다 되었습니다");
    });
  });
});

console.log("음식주문");
