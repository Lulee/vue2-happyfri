<template>
  <div>
    <NoticeComp msg="题目" />
    <QuestionComp />
    <CustomButton bclass="next-button" />
  </div>
</template>

<script>
import QuestionComp from "../QuestionComp";
import CustomButton from "../CustomButton";
import NoticeComp from "../NoticeComp";
export default {
  components: {
    QuestionComp,
    CustomButton,
    NoticeComp
  }
};
</script>