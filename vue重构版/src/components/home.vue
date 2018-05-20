<template>
  <div class="app">
    <transition name="fade">
      <div v-show="isToTop==='1'" @click="toTop" class="toTop">
        <img src="../../static/img/totop.png" alt="返回顶部" title="返回顶部">
      </div>
    </transition>
    <div class="concent">
      <div class="con1">
        <img src="../../static/img/con1.jpg" alt="" class="head-bg" id="con1">
        <img src="../../static/img/con11.jpg" alt="" class="head-bg con11" id="con11">
        <img src="../../static/img/conAdd.jpg" class="conAdd" id="conAdd">
        <div class="con1-con">
          <h2>Hello World !</h2>
          <p>95后理工男，</p>
          <p>慢慢向IT界靠近的前端小学生</p>
          <p class="guanyu">
            <a href="https://github.com/wwenj" target="_Blank">
              <img src="../../static/img/github.png" title="GitHub" width="25" height="25">
            </a>
            <a href="https://www.zhihu.com/people/wwenj" target="_Blank">
              <img src="../../static/img/zhi.png" title="知乎" width="25" height="25">
            </a>
            <a href="http://blog.wwenj.com/" target="_Blank">
              <img src="../../static/img/you.png" title="博客" width="25" height="25">
            </a>
            <a href="https://juejin.im/user/settings/profile" target="_Blank">
              <img src="../../static/img/jue.png" title="掘金" width="25" height="25">
            </a>
          </p>
        </div>
      </div>
      <div class="con2" id="con2">
        <h3>尝试实现响应式设计</h3>
        <p>配合单页架构营造顺滑体验</p>
        <div class="con2-pic"></div>
      </div>
      <div class="con3">
        <div class="nodejs"></div>
        <p class="con3-p1">NODEJS 强力驱动</p>
        <p class="con3-p2">网站构建过程使用以下框架插件</p>
        <p class="con3-p3">vuejs vuerouter vuex mintui nodejs
          <a href="https://github.com/wwenj/wwenj-home">网站源码</a>
        </p>
      </div>
      <div class="con4" id="con4"></div>
      <div class="con5">
        <a href="http://resume.wwenj.com/" class="con5-left" target="_Blank">关于作者</a>
        <a href="http://blog.wwenj.com/index.php/9.html" class="con5-right" target="_Blank">关于本网站</a>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "../assets/eventBus.js";
export default {
  name: "Home",
  data() {
    return {
      isToTop: 0
    };
  },
  mounted() {
    var that = this;
    bus.$on("toTopEvent", function(mse) {
      // 兄弟组件通信
      that.isToTop = mse;
    });
  },
  methods: {
    toTop: () => {
      bus.$emit("toTopEvent");
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style scoped>
@media (max-width: 1000px) {
  .con1-con {
    display: none;
  }
  #con1 {
    display: none;
  }
  #con11 {
    display: block;
  }
}
@media (max-width: 800px) {
  #con2 {
    display: none;
  }
}
@media (max-width: 600px) {
  #con4 {
    display: none;
  }
}
@media (max-width: 400px) {
  #conAdd {
    display: block;
  }
  #con11 {
    display: none;
  }
}
.conAdd {
  width: 100%;
  height: auto;
  display: none;
}
.app {
  width: 100%;
  overflow: hidden;
}
.con11 {
  display: none;
}
.head-bg {
  width: 100%;
  height: auto;
}
.con1 {
  width: 100%;
  padding-top: 1px;
  margin-top: 30px;
  box-sizing: border-box;
  position: relative;
}
.con1-con {
  width: 100%;
  position: absolute;
  top: 0;
}
.con1 h2 {
  max-width: 1200px;
  width: 90%;
  color: #fff;
  font-size: 50px;
  font-family: "Georgia";
  margin: auto;
  margin-top: 12%;
  margin-bottom: 5%;
  font-weight: bold;
  text-shadow: 5px 5px 10px #a3df24;
}
.con1 p {
  max-width: 1200px;
  width: 90%;
  margin: auto;
  margin-top: 2%;
  color: #fff;
  font-size: 20px;
  text-shadow: 4px 4px 8px rgb(59, 58, 59);
}
.con1 .guanyu {
  margin-top: 40px;
}
.con1 .guanyu a {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  background: rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 50px;
  transition: all 0.4s;
}
.con1 .guanyu a img {
  vertical-align: middle;
}
.con1 .guanyu a:hover {
  background: #fff;
}
/*第二图*/
.con2:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: -40px;
  left: 0;
  border-style: solid;
  border-width: 40px 100vw 0 0;
  border-color: transparent #222;
}
.con2 {
  width: 100%;
  height: 610px;
  background: #222;
  position: relative;
  padding-top: 150px;
  box-sizing: border-box;
  box-shadow: 0px -8px 15px #222 inset;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #222),
    color-stop(1, #333)
  );
  /* filter:alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr=#222,endcolorstr=#333,gradientType=0); */
  background: -ms-linear-gradient(top, #222, #333);
}
.con2 h3 {
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 10px;
  color: #fff;
  text-align: center;
}
.con2 p {
  text-align: center;
  color: #ddd;
  margin-top: 30px;
  font-size: 21px;
}
.con2-pic {
  width: 590px;
  height: 185px;
  background: url("../../static/img/con2.png") no-repeat;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -295px;
}
/*第三图*/
.con3 {
  width: 100%;
  max-height: 690px;
  padding-bottom: 35%;
  padding-top: 20%;
  box-sizing: border-box;
  background: rgb(233, 233, 233);
}
.nodejs {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: url("../../static/img/node.js.png") no-repeat;
  background-size: 100px 100px;
}
.con3 .con3-p1 {
  color: #80bd01;
  line-height: 50px;
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
}
.con3 .con3-p2 {
  font-size: 24px;
  color: #555;
  margin-top: 20px;
  font-weight: 400;
  text-align: center;
}
.con3 .con3-p3 {
  width: 380px;
  padding: 0 25px;
  margin: auto;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 15px;
  background: #555;
  color: #fff;
}
.con3 .con3-p3 a {
  display: inline-block;
  padding-left: 10px;
  color: #80bd01;
}
.con3 .con3-p3 a:hover {
  text-decoration: underline;
}
/* 第四图 */
.con4 {
  width: 100%;
  height: 300px;
  /* background: #27a3ca; */
  /* background-image: -webkit-gradient(linear,left top,right bottom,color-stop(.5,#2a97e4),color-stop(1,#21b3ac)); */
  background: url("../../static/img/con4-bg.jpg");
}
/* 第五图 */
.con5 {
  width: 100%;
  height: 150px;
  background: #fff;
  text-align: center;
  line-height: 150px;
  font-size: 14px;
}
.con5 a {
  display: inline-block;
  width: 120px;
  height: 35px;
  line-height: 35px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 15px;
}
.con5-left {
  color: #ffffff;
  background-image: -ms-linear-gradient(top, #fa7d3c, #f55f10);
  background-image: -webkit-linear-gradient(top, #fa7d3c, #f55f10);
}
.con5-right {
  color: #333;
  border: 1px solid #d3d3d3;
}
/* 返回顶部 */
.toTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 30px;
  bottom: 40px;
  background: rgb(122, 122, 122);
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 2px;
  z-index: 100;
}
.toTop:hover {
  background: rgb(114, 113, 113);
}
.toTop img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.fade-enter {
  opacity: 0;
  right: 0px;
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  right: 80px;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave-to {
  right: 0px;
  opacity: 0;
}
</style>
