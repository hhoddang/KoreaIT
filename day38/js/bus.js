// alert("ok");

//버스정거장 리스트 배열에 담기
let stationList = [
  "청백아파트1단지",
  "대우아파트",
  "청백아파트",
  "월계주공2단지앞",
  "월계주공2단지",
  "월계공단",
  "염광고등학교",
  "신창중학교후문",
  "유원극동아파트",
  "쌍용스윗닷홈아파트",
  "초안아파트.흥화브라운빌아파트",
  "한승미메이드아파트",
  "창3동염광아트빌",
  "북서울농협창동지점",
  "신화초교입구",
  "신창교",
  "북부수도사업소",
  "번동사거리",
  "창동서울탁주앞",
  "창동.신창시장",
  "국립현대미술관창동레지던시",
  "창림초교창동신창아파트앞",
  "도봉문화정보도서관",
  "창동주공4단지",
  "녹천북부역",
  "창1동대우그린아파트",
  "창일중학교",
  "창동역서측",
  "상아아파트",
  "창동주공1단지",
  "창5동현대1차아파트",
  "도봉구보건소앞",
  "쌍문동금호1차삼익아파트",
  "쌍문동현대.한양아파트",
  "쌍문동성원아파트",
  "세그루학원",
  "둘리뮤지엄.대우이안극동아파트",
  "옛고을길입구",
  "정의여중고입구",
  "창동고등학교",
];

//버스요금계산함수
function calculator() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var result = document.getElementById("result");

  //   result.innerHTML = `<p>출발정거장은   ${stationList[start]}  이고    도착정거장은  ${stationList[end]}  입니다 </p>`;
  result.insertAdjacentHTML("afterbegin" , `<p>출발정거장은   ${stationList[start]}  이며   도착정거장은  ${stationList[end]}  입니다 </p>`);
}

//웹브라우저에 html이 처음 띄워졌을때
//정거장 이름이 보여지게 만든다
function loadstationList() {
  var busMapStation = []; // station option에 들어갈 정거장
  for (var i in stationList) {
    busMapStation.push(`<option value="${i}"> ${stationList[i]} </option>`);
  }
  document.getElementById("start").innerHTML = busMapStation.join("");
  document.getElementById("end").innerHTML = busMapStation.join("");
}

window.addEventListener("load", function () {
  loadstationList();
});
