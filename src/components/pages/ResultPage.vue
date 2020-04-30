<template>
  <div class="result">
    <ResultComp />
    <CustomButton b-class="share-button" @click.native="shouldShowCover(true)" />
    <div class="qrcode">
      <p>关注葡萄之家，获取答案</p>
      <img src="../../assets/4-4.png" />
    </div>
    <div class="share-cover" v-show="showCover" @click="shouldShowCover(false)">
      <img src="../../assets/5-2.png" />
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
  data() {
    return {
      showCover: false
    };
  },
  methods: {
    shouldShowCover(value) {
      this.showCover = value;
    }
  }
};
</script>

<style scoped>
.result {
  color: #3e2415;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../assets/4-1.jpg) no-repeat;
  background-size: 100% 100%;
}

.qrcode {
  margin: 8rem auto 0;
}

.qrcode p {
  color: #fff;
  font-size: 0.475rem;
  font-family: Microsoft YaHei;

  font-weight: 500;
  text-align: center;
}
.qrcode img {
  height: 5.3rem;
  width: 5.3rem;
  margin-top: 0.5rem;
}

.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../assets/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share-cover img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>