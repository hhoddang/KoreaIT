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
      <div class="playBtn">
        플레이
      </div>
      <div class="playList"></div>
    </div>
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
#playBarWrap .musicInfo .song{
  margin-left: 10px;
}
#playBarWrap .musicInfo .song p {
  font-size: 14px;
  text-align: left;
  color:#ffffff90;
}
#playBarWrap .musicInfo .song p:first-child{
  margin-bottom:5px;
  font-weight: bold;
  color:#fff;
}
#playBarWrap .playBtn{
  width: 280px;
  height: 55px;
  margin:0 auto;
  margin-top:25px;
}

</style>
