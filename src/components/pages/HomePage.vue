<template>
  <div>
    <NoticeComp msg="第一周" />
    <div class="home"></div>
    <CustomButton bclass="start-button" /> 
  </div>
</template>

<script>
import CustomButton from "../CustomButton";
import NoticeComp from "../NoticeComp";

export default {
  components: {
    CustomButton,
    NoticeComp
  }
  
};
</script>

<style scoped>
.home{
  background:url('../../assets/1-2.png') no-repeat center center;
  background-position: 100%;
  position: absolute;
  background-size: 18.142rem 100%;
  height: 16.625rem;
  width: 18.15rem;
  top: 6.1rem;
  left: 2rem;
}


</style>
