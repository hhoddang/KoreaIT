<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="할일을 메모하세요."
      v-on:keyup.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa-solid fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem != "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
  
};
</script>

<style>
input:focus {
  outline: none;
}
.inputBox{
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size:0.9rem;
}
.addContainer{
  float:right;
  background:linear-gradient(to right,#6478f8,#8763fb);
  width: 3em;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color:#fff;
  vertical-align: middle;
}
</style>
