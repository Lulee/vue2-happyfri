<template>
  <div id="app">
    <router-view class="view"></router-view>
    <!-- <HomePage /> -->
  </div>
</template>

<script>
// import HomePage from './components/pages/HomePage'

export default {
  // name: 'App'
  // components:{
  //   HomePage
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
body{
  /* 使背景图片充满整个屏幕 */
  background: url("./assets/1-1.jpg") no-repeat center center;
  background-size: cover;
  background-attachment:fixed;
}
</style>
