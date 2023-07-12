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
        <div class="TodayList">
          <div>
            <ul>
              <li v-for="music in music">
                <a href="#">
                  <img :src="music.img" alt="">
                  <h2>{{ music.name }}</h2>
                  <span>{{ music.artist }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="TodayChart">
        <h3>장르별 스테이션</h3>
        <div class="TodayList">
          <div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      music :[
        {
          name:"I AM",
          artist:"IVE(아이브)",
          img:"https://musicmeta-phinf.pstatic.net/album/009/334/9334427.jpg?type=r480Fll&v=20230524152040"
        },
        {
          name:"퀸카 (Queencard)",
          artist:"(여자)아이들",
          img:"https://musicmeta-phinf.pstatic.net/album/009/637/9637036.jpg?type=r480Fll&v=20230523141228"
        },
        {
          name:"이브, 프시케 그리고 푸른 수염의 아내",
          artist:"LE SSERAFIM (르세라핌)",
          img:"https://musicmeta-phinf.pstatic.net/album/009/615/9615768.jpg?type=r480Fll&v=20230523135926"
        },
        {
          name:"Spicy",
          artist:"aespa",
          img:"https://musicmeta-phinf.pstatic.net/album/009/620/9620172.jpg?type=r480Fll&v=20230605164400"
        },
        {
          name:"Kitsch",
          artist:"IVE(아이브)",
          img:"https://musicmeta-phinf.pstatic.net/album/009/334/9334427.jpg?type=r480Fll&v=20230524152040"
        },
        {
          name:"UNFORGIVEN(feat. Nile Rodgers)",
          artist:"LE SSERAFIM (르세라핌)",
          img:"https://musicmeta-phinf.pstatic.net/album/009/615/9615768.jpg?type=r480Fll&v=20230523135926"
        }
      ]
    }
  }
};
</script>
<style>
body {
  background: #000;
}

#contentWrap {
  padding-left: 245px;
  padding-bottom:100px;
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
  height: 350px;
  margin-top: 20px;
  display: flex;
}

.eventBanner .eventImg {
  height: auto;
}
.eventBanner .eventImg img {
  width: 100%;
  height: 100%;
}
.eventBanner .eventText {
  width: 70%;
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
  color: #ffffff90;
  text-align: left;
  line-height: 30px;
}
.eventBanner .eventText span {
  display: block;
  color: #ffffff90;
  text-align: left;
}
.eventBanner .eventText .eventTextbox {
  
  margin-top: 60px;
}

#content .TodayChart h3 {
  color: #fff;
  text-align: left;
  font-size: 3
  0px;
}

#content .genreMusic h3 {
  color: #fff;
  text-align: left;
  font-size: 40px;
}
.TodayChart {
  margin-top: 20px;
}
.TodayChart .TodayList div {
  margin-top:20px;
}
.TodayChart .TodayList ul{
  display: flex;
  justify-content: space-between;
}
.TodayChart .TodayList li:first-child{
  margin-left:0;
}
.TodayChart .TodayList li{
  width: 285px;
  margin:0 10px;
}
.TodayChart .TodayList li a{
  font-size:12px;
  display: block;
}
.TodayChart .TodayList li img{
  width: 100%;
}
.TodayChart .TodayList li h2{
  color:#fff;
  text-align: left;
  font-size:14px;
}
.TodayChart .TodayList li span{
  display: block;
  color:#ffffff70;
  text-align: left;
  margin-top:5px;
}
</style>
