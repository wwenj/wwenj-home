<template>
  <div class="app">
    <div class="mark-b" :style="isMarkA?'left: -100vw':''"></div>
    <div class="mark-w" :style="isMarkA?'right: -100vw':''"></div>
    <div class="mark-box" @click="boxClick" :id="isMarkB1?'':'markBox'" :style="isMarkB?'':'opacity: 0.6;display: block'"></div>
    <div class="mark-con" :style="isMarkB?'':'transform: rotateY(0deg)'">
      <p>本网站仅为个人网站，记录分享，交流学习，未有任何商业用图</p>
      <p class="mark-con-title">初次见面，请多关照</p>
      <a href="#">如有侵权请联系我</a>
      <label class="checkbox">
        <input type="checkbox" id="checkbox" v-model="isCheck">不再提示</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "Foot",
  data() {
    return {
      isMarkA: 1,
      isMarkB: 1,
      isMarkB1: 0,
      isCheck: false
    };
  },
  mounted() {
    if (localStorage.mark !== '1' && sessionStorage.mark !== '1') {
      this.start();
    }
  },
  methods: {
    start: function() {
      this.isMarkA = 0;
      this.isMarkB = 0;
      this.isMarkB1 = 1;
    },
    /* 点出 */
    boxClick: function() {
      var that = this;
      this.isMarkB = 1;
      setTimeout(function() {
        that.isMarkB1 = 0;
        that.isMarkA = 1;
      }, 700);
      if (this.isCheck === true) {
        localStorage.setItem("mark", "1");
      } else {
        sessionStorage.setItem("mark", "1");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mark-b {
  width: 0;
  height: 0;
  position: fixed;
  top: 0;
  left: 0vw;
  border-width: 100vh 100vw 0 0;
  border-style: solid;
  border-color: #222 transparent;
  z-index: 50;
  transition: all 1.2s;
}

.mark-w {
  width: 0;
  height: 0;
  position: fixed;
  bottom: 0vh;
  right: 0vw;
  border-width: 0 0 100vh 100vw;
  border-style: solid;
  border-color: yellow transparent;
  z-index: 50;
  transition: all 1.2s;
}

.mark-box {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #222;
  opacity: 0;
  /* display: none; */
  z-index: 51;
  transition: all 0.8s;
}
#markBox {
  /* opacity: 0.6; */
  display: none;
  /* transition: all 0.8s; */
}
.mark-con {
  width: 320px;
  height: 220px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -110px;
  margin-left: -160px;
  border: 1px solid #fff;
  border-radius: 15px;
  z-index: 100;
  box-shadow: 0px 0px 15px #888888;
  color: #fff;
  padding: 30px 30px;
  box-sizing: border-box;
  font-family: "微软雅黑";
  transform: rotateY(90deg);
  transition: all 0.8s;
}
.markCon {
  transform: rotateY(0deg);
}
.mark-con p {
  text-align: center;
  line-height: 27px;
  font-size: 16px;
  color: rgb(224, 222, 222);
}

.mark-con .mark-con-title {
  color: #fff;
  margin-top: 15px;
  font-size: 19px;
  text-shadow: 1px 1px 1px #fff;
}

.mark-con a {
  font-size: 12px;
  color: #ccc;
  float: right;
  margin-top: 25px;
  transition: all 0.3s;
}
.mark-con a:hover {
  color: #fff;
  text-decoration: underline;
}
.checkbox {
  display: inline-block;
  margin-top: 26px;
  color: #ee5a0b;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
}
.checkbox input {
  width: 13px;
  height: 13px;
  vertical-align: middle;
}
</style>
