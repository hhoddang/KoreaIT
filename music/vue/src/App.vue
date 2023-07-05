<template>
  <div id="app">
    <Header></Header>
    <home></home>
    <Playbar></Playbar>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import home from "./components/home.vue";
import Playbar from "./components/Playbar.vue";
export default {
  components: {
    Header: Header,
    home: home,
    Playbar: Playbar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "SUITE-Regular";
}

body {
  text-align: center;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>


