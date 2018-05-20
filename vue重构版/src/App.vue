<template>
  <div class="app">
    <Start></Start>
    <Heade></Heade>
    <Home></Home>
    <Foot></Foot>
  </div>
</template>

<script>
import Heade from "./components/heade";
import Foot from "./components/foot";
import Home from "./components/home";
import Start from "./components/start";
export default {
  components: {
    Heade,
    Foot,
    Home,
    Start
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body::-webkit-scrollbar {
  width: 6px;
  background-color: rgb(251, 245, 245);
}
body::-webkit-scrollbar-thumb {
  height: 150px;
  background-color: #555;
}
</style>
