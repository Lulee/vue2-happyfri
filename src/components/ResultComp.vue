<template>
  <div class="scores-container">
    <p>
      <span class="score-number">80</span>
      <span class="score-unit">分</span>
    </p>
    <div class="tips">智商离爆表只差一步了！</div>
  </div>
</template>

<script>
export default {
  name: "ResultComp"
};
</script>

<style scoped>
.scores-container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../assets/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
</style>