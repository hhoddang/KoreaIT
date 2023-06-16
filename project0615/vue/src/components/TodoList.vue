<template>
  <section>
    <ul>
      <li v-for="(todoItem,index) in propsdata" class="shadow">
        <i class="checkBtn fa-regular fa-circle-check" ></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="fa-regular fa-trash-can" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    removeTodo(todoItem , index){
      this.$emit('removeTodo',todoItem, index)
    }
  }
};
</script>

<style scoped>
ul{
  list-style: none;
  padding-left:0;
  margin-top:0;
  text-align: center;
}
ul li{
  display: flex;
  min-height:50px; height:50px;
  margin:0.5rem 0;
  padding:0 0.9rem;
  background:#fff;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color:#62acde;
  margin-right:50px;
}
.removeBtn{
  margin-left:auto;
  color:#de4343;
  line-height: 45px;
}
</style>
