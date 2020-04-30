<template>
  <div class="scores-container">
    <p class="scores">
      <span class="score-number">{{scores}}</span>
      <span class="score-unit">分</span>
    </p>
    <div class="tips">{{tips}}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "ResultComp",
  computed: mapGetters(["scores", "tips", "answerIds"]),
  created() {
    this.fetchAnswers().then(() => {
      this.computeScores(this.answerIds);
    });
  },
  methods: {
    ...mapMutations(["computeScores"]),
    ...mapActions(["fetchAnswers"])
  }
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
.scores {
  position: absolute;
  width: 100%;
  top: 3rem;
  font-size: 1.4rem;
  font-weight: 900;
  -webkit-text-stroke: 0.05rem #412318;
  font-family: Microsoft YaHei;
}
.score-number {
  font-family: Tahoma, Helvetica, Arial;
  color: #a51d31;
}
.tips {
  position: absolute;
  top: 7rem;
  width: 9rem;
  left: 0.6rem;
  color: #3e2415;
  font-size: 0.65rem;
  text-align: center;
}
</style>