<template>
  <div id="app">
    <Header></Header>
    <contents></contents>
    <Playbar></Playbar>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import contents from "./components/contents.vue";
import Playbar from "./components/Playbar.vue";
export default {
  components: {
    Header: Header,
    contents: contents,
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


