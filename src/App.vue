<template>
  <div class="app-window">
    <SiderBar :Conversas="Contatos" />

    <Area />
  </div>
</template>

<script>
import SiderBar from "./components/Sidebar";
import Area from "./components/Area";
export default {
  name: "App",
  data() {
    return {   

      Contatos: {
      }


    };
  },
  components: {
    SiderBar,
    Area,
  },
  methods: {},
};
</script>

<style >
* {
  box-sizing: border-box;
}
body {
  background-color: #d2dbdc;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.app-window {
  display: flex;
  height: 100vh;
  background-color: #ededed;
}
</style>



