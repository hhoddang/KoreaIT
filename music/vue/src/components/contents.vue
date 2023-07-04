<template>
  <div id="contentWrap">
    <div id="addbox">
      <div id="addText">
        <span>취향을 선택하고 나만의 PlayList 만들기</span>
        <button class="hideadd">X</button>
      </div>
    </div>
    <div id="content">
      <div class="eventBanner">
        <div class="eventImg">
          <img src="../assets/images/event.png" alt="" />
        </div>
        <div class="eventText">
          <div class="eventTextbox">
            <h2>
              New Release #150 :<br />
              샤이니, 올리비아 로드리고
            </h2>
            <p>
              여덟 번째 정규 앨범과 함께 팬들 곁으로 돌아온 샤이니, 컴백 직후 팝
              음악계에 돌풍을 일으키고 있는 올리비아 로드리고까지.<br />
              지금 주목해야 할 신곡들을 VIBE 매거진에서 확인하세요. 글 : 박희아,
              이대화
            </p>
            <span>MAG · 2023.07.04</span>
          </div>
        </div>
      </div>
      <div class="TodayChart">
        <h3>실시간 차트</h3>
        <ul v-for="Today in Today">
          <li>
            {{ Today.text }}
          </li>
        </ul>
      </div>
      <div class="genreMusic">
        <h3>장르별 차트</h3>
        <ul v-for="genre in genre">
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  el: "app",
  data() {
    return {
      Today: [
       
      ]
    };
  }
};
</script>
<style>
body {
  background: #000;
}

#contentWrap {
  padding-left: 245px;
}
#addText {
  width: 100%;
  height: 50px;
  background: rgb(107, 52, 141);
  position: relative;
}
#addText span {
  color: #fff;
  line-height: 50px;
}
.hideadd {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
}
#content {
  width: auto;
  margin: 0 75px;
}
.eventBanner {
  width: 100%;
  margin-top: 20px;
  height: 350px;
}

.eventBanner .eventImg {
  width: 35%;
  height: 100%;
  float: left;
}
.eventBanner .eventImg img {
  width: 100%;
  height: 100%;
}
.eventBanner .eventText {
  width: 65%;
  height: 100%;
  float: right;
  position: relative;
  padding-left: 70px;
  box-sizing: border-box;
  background: linear-gradient(to right, #2d1e37, #181b22, #2d1e37);
}
.eventBanner .eventText h2 {
  color: #fff;
  text-align: left;
  font-size: 50px;
}
.eventBanner .eventText p {
  margin-top: 30px;
  color: #ffffff90;
  text-align: left;
  line-height: 30px;
}
.eventBanner .eventText span {
  display: block;
  color: #ffffff90;
  text-align: left;
  margin-top: 20px;
}
.eventBanner .eventText .eventTextbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#content .TodayChart h3 {
  color: #fff;
  text-align: left;
  font-size: 40px;
}

#content .genreMusic h3 {
  color: #fff;
  text-align: left;
  font-size: 40px;
}
</style>
