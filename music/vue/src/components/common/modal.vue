<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <input
              type="text"
              class="loginId"
              placeholder="아이디(이메일)"
            /><br />
            <input
              type="password"
              class="loginPassword"
              placeholder="비밀번호"
            /><br />
            <div>
              <input type="checkbox" class="remId" /> <span>아이디 저장</span>
            </div>
            <button type="submit" class="loginBtn">로그인</button>
            <div class="find">
              <ul class="idpw">
                <li><a href="#">아이디 찾기</a></li>
                <li><a href="#">비밀번호 찾기</a></li>
              </ul>
              <span class="signUp">회원가입</span>
            </div>
            <div class="snslogin">
              <div class="snsimgbox" v-for="sns in sns" :key="sns.id">
                <img :src="sns.snsImgUrl" />
              </div>
            </div>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              X
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  data() {
    return {
      sns: [
        {
          snsImgUrl: require("../../assets/images/naver.png")
        },
        {
          snsImgUrl: require("../../assets/images/kakao.png")
        },
        {
          snsImgUrl: require("../../assets/images/apple.png")
        }
      ]
    };
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  padding-top: 100px;
}

.modal-container {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
  padding: 30px 230px;
  box-sizing: border-box;
}

.modal-header h3 {
  color: #000;
  font-size: 30px;
  margin-top: 50px;
}

.modal-body {
  margin-top: 50px;
  text-align: left;
}
.modal-body .loginId {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
}
.modal-body .loginPassword {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom:10px;
  border: none;
  border-bottom: 1px solid #ccc;
}
.modal-body input {
  outline: none;
}

.modal-body .remId {
  color: #000;
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 5px;
}
.modal-body div span {
  display: inline-block;
  color: #000;
}
.modal-body .loginBtn {
  display: block;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #92ceff;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;
}


.modal-body .find {
  margin-top: 5px;
}
.modal-body .find .idpw {
  float: left;
}
.modal-body .find .idpw li {
  float: left;
  box-sizing: border-box;
  margin: 0 5px;
}


.modal-body .find .idpw li a {
  font-size: 13px;
  color: #111;
}
.modal-body .find .signUp {
  float: right;
  font-size: 13px;
  color: #111;
  cursor: pointer;
}
.modal-default-button {
  position: absolute;
  right: 30px;
  top: 20px;
  width: 30px;
  height: 30px;
  border: none;
  color: #92ceff;
  background: none;
  font-size: 30px;
  cursor: pointer;
}
.snslogin {
  clear:both;
  display: flex;
  justify-content: center;
  margin:0 auto;
}
.snslogin div {
  width: 50px;
  height: 50px;
  margin:40px 7px 0 7px;
}
.snslogin div img {
  width: 100%;
  border-radius: 50%;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


