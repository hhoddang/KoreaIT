<template>
  <section>
    <ul>
      <li v-for="todoItem in todoItems" class="shadow">
        <i class="fa-regular fa-circle-check"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button">
          <i class="fa-regular fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
