<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">모두 지우기</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit("removeAll");
    }
  }
};
</script>

<style>
.clearAllContainer {
  width: 700px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
