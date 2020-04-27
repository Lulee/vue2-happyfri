<template>
  <div class="question">
    <!-- RadioGroup -->
    <div v-if="question">
      <h2>{{question.topic_name}}</h2>
      <div v-for="(answer,index) in question.topic_answer" :key="answer.topic_answer_id">
        <input
          type="radio"
          :id="answer.topic_answer_id"
          :value="answer.answer_name"
          v-model="checkedValue"
        />
        <label :for="answer.topic_answer_id">{{choicesArr[index]}}.{{answer.answer_name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionComp",
  props: ["question"],
  data() {
    return {
      choicesArr: ["A", "B", "C", "D"],
      checkedValue: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  display: inline-block;
  font-size: 0.6rem;
  color: #fff;
  vertical-align: middle;
  line-height: 0.7rem;

  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
</style>
