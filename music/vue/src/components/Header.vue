<template>
  <div id="header">
    <h1>Music<span>Streaming</span></h1>
    <nav>
      <p>
        지금 당신의 음악,<br />
        Music Streaming
      </p>
      <div class="login">
        <button class="login" id="show-modal" @click="showModal = true">
          로그인
        </button>
        <div to="body">
          <modal :show="showModal" @close="showModal = false">
            <template #header>
              <h3>로그인</h3>
            </template>
          </modal>
        </div>
      </div>
      <div class="search">
        <input type="search" />
      </div>
      <ul class="gnb">
        <li>
          <a href="#">최신앨범</a>
        </li>
        <li>
          <a href="#">인기앨범</a>
        </li>
        <li>
          <a href="#">실시간 차트</a>
        </li>
        <li>
          <a href="#">장르별 차트</a>
        </li>
        <li>
          <a href="#">서비스 소개</a>
        </li>
      </ul>
      <ul class="gnb2">
        <li>
          <a href="#">MY Music</a>
        </li>
        <li>
          <a href="#">최근 들은 곡</a>
        </li>
        <li>
          <a href="#">많이 들은 곡</a>
        </li>
        <li>
          <a href="#">좋아한 음악</a>
        </li>
      </ul>
      <button class="appInt">모바일앱 설치</button>
    </nav>
  </div>
</template>

<script>
import Modal from "./common/modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
  
};
</script>

<style>
#header {
  width: 245px;
  height: 850px;
  background: #000;
  position: fixed;
  top: 0;
  bottom: 50px;
  color: #fff;
  z-index: 1000000;
  border-right:1px solid #ffffff70;
}
#header > h1 {
  text-indent: 25px;
  line-height: 80px;
  font-size: 36px;
  font-style: italic;
  text-align: center;
}
#header > h1 > span {
  display: inline;
  font-size: 18px;
}
nav {
  position: absolute;
  top: 85px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 130px;
}

nav > p {
  padding: 8px 0;
  border-top: 1px solid #ccc;
}

.login {
  padding: 10px 0;
  border-top: 1px solid #ccc;
}

.login > button {
  width: 100%;
  height: 45px;
  border: none;
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-family: "NanumBarunGothic";
  font-weight: bold;
  cursor: pointer;
}
.login > span {
  display: block;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;
  text-indent: 30px;
  color: #ffffff70;
}

.search input {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #1a1a1a;
  margin-top: 10px;
  outline: none;
  caret-color: #91eae4;
  color: #fff;
  font-weight: bold;
  padding: 10px 10px 10px 44px;
}
.gnb {
  margin: 20px 0;
}
.gnb li {
  padding: 10px 0;
  box-sizing: border-box;
}
.gnb li:hover a {
  color: #fff;
  font-weight: bold;
}
.gnb li a {
  display: block;
  color: #ffffff70;
  font-size: 20px;
}
.gnb2 {
  padding-top: 20px;
  border-top: 1px solid #ccc;
}
.gnb2 li {
  padding: 10px 0;
  box-sizing: border-box;
}
.gnb2 li:hover a {
  color: #fff;
  font-weight: bold;
}
.gnb2 li a {
  display: block;
  color: #ffffff70;
  font-size: 20px;
}
nav .appInt {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background: #000;
  color: #ffffff50;
  border-radius: 10px;
  border: 1px solid #1a1a1a;
  cursor: pointer;
}
nav .appInt:hover {
  color: #fff;
  border: 1px solid #fff;
}
</style>
