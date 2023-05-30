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

var intervalDistance = 1250; // 정류장사이 고정거리

//버스요금계산함수
function calculator() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var result = document.getElementById("result");
  var type = document.querySelector("[name=people]:checked").value;

  //   alert(start); // 배열의 index 자리 출력
  //   alert(end);
  //   alert("stationList.length:" + stationList.length);

  if (Number(start) == Number(end)) {
    result.insertAdjacentHTML(
      "afterbegin",
      `<p> 출발 정거장과 도착 정거장이 같습니다. </p>`
    );
  }

  if (Number(start) > Number(end)) {
    //출발 정류장이 도착 정류장보다 앞에 있을 시.
    stationCount = stationList.length - Number(start) + Number(end);
  } else {
    //출발 정류장이 도착정류장보다 뒤에 있을시
    stationCount = Number(end) - Number(start);
  }
  var distance = stationCount * intervalDistance;
  var cost = busCost(distance, type);
  //출발 정류장과 도착 정류장 사이의 거리
  //총정거장  이동거리는 =  이동거리 x 정거장간의 고정거리
  result.insertAdjacentHTML(
    "afterbegin",
    `<p>출발정거장은   ${stationList[start]}  이며   도착정거장은  ${stationList[end]}  입니다. </p>`
  );

  result.insertAdjacentHTML(
    "afterbegin",
    `<p> 총 ${stationCount} 개의 정류장을 거쳤습니다. 이동거리는 ${distance} m 입니다.</p>`
  );

  var stationCount = 0; // 정류장간의 정류장수에 대한 초기화
  result.insertAdjacentHTML(
    "afterbegin",
    `<p> 버스요금은 \ ${cost}원  입니다.</p>`
  );
}

//비용을 계산하는 함수
function busCost(distance, type) {
  var baseAmout =
    type == "adult" ? 1250 : type == "young" ? 720 : type == "child" ? 450 : 0;

  if (distance <= 10000) {
    // 10km 이내일 경우 기본요금
    return baseAmout;
  } else if (distance <= 30000) {
    // 10km ~ 30km 이내라면 5km마다 100원 추가
    return baseAmout + Math.ceil((distance - 10000) / 5000) * 100;
    //Math.ceil();
  } else {
    //30km 이상이라면 3km 마다 100원 추가
    return (
      baseAmout +
      (20000 / 5000) * 100 +
      Math.ceil((distance - 30000) / 3000) * 100
    );
  }
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
