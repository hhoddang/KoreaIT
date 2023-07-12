<template>
  <div id="playBar">
    <div id="playBarWrap">
      <div class="musicInfo">
        <img src="../assets/images/playBar1.jpg" alt="" />
        <div class="song">
          <p>The Girl From Ipanema (Feat. Astrud Gilberto)</p>
          <p>Stan Getz, Joao Gilberto</p>
        </div>
      </div>
      <ul class="playBtn">
        <li class="Playsuffle">
          <img src="../assets/images/suffle.png" alt="" />
        </li>
        <li class="PlayPrev"><img src="../assets/images/prev.png" alt="" /></li>
        <li class="play">
          <img
            :src="require(`../assets/images/${playimg}.png`)"
            @click="changeImg"
            alt=""
          />
        </li>
        <li class="PlayNext"><img src="../assets/images/next.png" alt="" /></li>
        <li class="PlayRepeat">
          <img src="../assets/images/repeat.png" alt="" />
        </li>
      </ul>
      <div class="playList">
        <div class="listVolume">
          <img
            :src="require(`../assets/images/${muteimg}.png`)"
            @click="changeImg2"
            alt=""
          />
          <audio class="Volume" controls ref="player"></audio>
        </div>
        <div class="musiclist">
          <img src="../assets/images/playlist.png" alt="" />
        </div>
      </div>
      <div class="openlist">
        <ul>
          <li v-for="music in music">
            <a href="#">
              <img :src="music.img" alt="" />
              <span>{{ music.name }}</span>
              <p>{{ music.artist }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playimg: "play",
      muteimg: "volume",
      music: [
        {
          name: "I AM",
          artist: "IVE(아이브)",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/334/9334427.jpg?type=r480Fll&v=20230524152040"
        },
        {
          name: "퀸카 (Queencard)",
          artist: "(여자)아이들",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/637/9637036.jpg?type=r480Fll&v=20230523141228"
        },
        {
          name: "이브, 프시케 그리고 푸른 수염의 아내",
          artist: "LE SSERAFIM (르세라핌)",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/615/9615768.jpg?type=r480Fll&v=20230523135926"
        },
        {
          name: "Spicy",
          artist: "aespa",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/620/9620172.jpg?type=r480Fll&v=20230605164400"
        },
        {
          name: "Kitsch",
          artist: "IVE(아이브)",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/334/9334427.jpg?type=r480Fll&v=20230524152040"
        },
        {
          name: "UNFORGIVEN(feat. Nile Rodgers)",
          artist: "LE SSERAFIM (르세라핌)",
          img:
            "https://musicmeta-phinf.pstatic.net/album/009/615/9615768.jpg?type=r480Fll&v=20230523135926"
        }
      ]
    };
  },
  methods: {
    changeImg() {
      if (this.playimg === "play") {
        this.playimg = "pause";
      } else {
        this.playimg = "play";
      }
    },
    changeImg2() {
      if (this.muteimg === "volume") {
        this.muteimg = "mute";
      } else {
        this.muteimg = "volume";
      }
    },
    showlist(){

    }
    
  }
};
</script>
<style>
#playBar {
  width: 100%;
  height: 80px;
  background: rgb(33, 33, 33);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100000;
}

#playBarWrap .musicInfo {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 45px;
  display: flex;
}

#playBarWrap .musicInfo img {
  width: 45px;
  height: 45px;
}
#playBarWrap .musicInfo .song {
  margin-left: 10px;
}
#playBarWrap .musicInfo .song p {
  font-size: 14px;
  text-align: left;
  color: #ffffff90;
}
#playBarWrap .musicInfo .song p:first-child {
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
}
#playBarWrap .playBtn {
  width: 280px;
  height: 55px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
}
#playBarWrap .playBtn li {
  margin: 0 10px;
  cursor: pointer;
}
#playBarWrap .playBtn li:nth-child(2) img {
  width: 70%;
}
#playBarWrap .playBtn li:nth-child(4) img {
  width: 70%;
}
#playBarWrap .playBtn li img {
  width: 90%;
}
#playBarWrap .playBtn li:nth-child(3) {
  position: relative;
}

/* #playBar #playTime {
  width: 100%;
  height: 3px;
  background: #888888;
  border-radius: 20px;
} */

#playBar .playList {
  position: absolute;
  height: 40px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}
#playBar .playList .listVolume {
  width: 17px;
  display: flex;
  margin-right: 100px;
  position: relative;
}
#playBar .playList .listVolume img {
  width: 100%;
  cursor: pointer;
}
#playBar .playList .listVolume .Volume {
  width: 80px;
  height: 3px;
  background: #888888;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
#playBar .playList .musiclist {
  width: 25px;
}
#playBar .playList .musiclist img {
  width: 100%;
  cursor: pointer;
}
#playBar .openlist {
  position: absolute;
  right: 0px;
  bottom: 80px;
  transition: 0.5s;
}
#playBar .openlist ul {
  width: 700px;
  background: #212121;
  padding: 20px 20px;
  box-sizing: border-box;
}
#playBar .openlist ul li {
  width: 100%;
  height: 90px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  padding-right:10px;
}
#playBar .openlist ul li:hover {
  background: #3c3c3c;
}
#playBar .openlist ul li a {
  color: #fff;
}
#playBar .openlist ul li img {
  width: 90px;
  float: left;
}
#playBar .openlist ul li a span {
  margin-left: 30px;
  line-height: 90px;
  float: left;
}
#playBar .openlist ul li a p {
  display: block;
  float: right;
  line-height: 90px;
  font-size: 14px;
  color: #ccc;
}
</style>
