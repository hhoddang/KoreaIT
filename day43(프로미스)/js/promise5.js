var food = function () {
  return new Promise((resolve, reject) => {
    resolve("음식을 주문합니다.");
  });
};

var step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("음식재료와 요리도구준비");
    }, 3000);
  });
};
var step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("요리시작");
    }, 2000);
  });
};
var step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("요리완료");
    }, 2000);
  });
};

// 소비코드
food()
  .then((result) => step1(result)) // 음식 주문이 성공하면 실행
  .then((result) => step2(result)) // 음식재료와 요리도구가 준비되면 실행
  .then((result) => step3(result)) // 요리가 완료되면 실행
  .then((result) => console.log(result)) // 요리완료
  .then(() => console.log("음식이 준비 되었습니다.")); //
