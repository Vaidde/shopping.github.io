<template>
  <div>
    <Header></Header>
    <!-- 路由元件出口 -->
    <router-view></router-view>
    <!-- 在首頁、搜尋頁面顯示，在登錄、註冊頁面隱藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style >

</style>
