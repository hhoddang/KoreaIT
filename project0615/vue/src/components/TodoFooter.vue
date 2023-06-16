<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
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
  width: 8em;
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
