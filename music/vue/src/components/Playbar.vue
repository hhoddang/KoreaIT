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
        <li class="play"><img src="../assets/images/play.png" alt="" /></li>
        <li class="PlayNext"><img src="../assets/images/next.png" alt="" /></li>
        <li class="PlayRepeat">
          <img src="../assets/images/repeat.png" alt="" />
        </li>
      </ul>
      <div class="playList">
        <div class="listVolume">
          <img src="../assets/images/medium-volume.png" alt="" />
          <audio class="Volume" controls ref="player"></audio>
        </div>
        <div class="musiclist">
          <img src="../assets/images/playlist.png" alt="" />
        </div>
      </div>
    </div>
    <div id="playTime"></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#playBar {
  width: 100%;
  height: 80px;
  background: rgb(33, 33, 33);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000001;
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

#playBar #playTime {
  width: 100%;
  height: 3px;
  background: #888888;
  border-radius: 20px;
}

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
  margin-right:100px;
  position:relative;
}
#playBar .playList .listVolume img{
  width: 100%;
}
#playBar .playList .listVolume .Volume{
  width: 80px;
  height: 3px;
  background:#888888;
  position:absolute;
  left:20px;
  top:50%;
  transform: translateY(-50%);
}
#playBar .playList .musiclist{
  width: 25px;
}
#playBar .playList .musiclist img{
  width: 100%;
}
</style>
