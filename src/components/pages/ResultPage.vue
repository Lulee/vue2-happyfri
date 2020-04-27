<template>
  <div class="result">
    <ResultComp />
    <CustomButton b-class="share-button" @click.native="handleClick" />
    <div class="qrcode">
      <p>关注葡萄之家，获取答案</p>
      <img src="../../assets/4-4.png" />
    </div>
  </div>
</template>

<script>
import ResultComp from "../ResultComp";
import CustomButton from "../CustomButton";

export default {
  components: {
    ResultComp,
    CustomButton
  },
  //   mounted(){
  //       let body = document.querySelector('body');
  //       body.style='background-image:url(../../assets/4-1.jpg)'

  //   },
  methods: {
    handleClick() {}
  }
};
</script>

<style scoped>
.result {
  color: #3e2415;
}

.qrcode {
 
  margin: 8rem auto 0;
}

.qrcode p {
  color: #fff;
  font-size: 0.475rem;
  font-family: Microsoft YaHei;
 
  font-weight: 500;
  text-align:center;
}
.qrcode img {
  height: 5.3rem;
  width: 5.3rem;
  margin-top: 0.5rem;
}
</style>