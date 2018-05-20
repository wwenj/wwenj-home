<template>
  <div class="heade">
    <div class="nav-box" :id="isNav==1?'hide':'show'">
      <div class="nav">
        <a href="http://www.wwenj.com" class="logo-home">
          <img src="../../static/img/logo1.png" alt="" width="30" height="30">
          <span>Home</span>
        </a>
        <div class="nav-con">
          <a href="http://blog.wwenj.com/" target="_Blank">博文</a>
          <a href="http://resume.wwenj.com/" target="_Blank">简历</a>
          <a href="http://yun.wwenj.com/" target="_Blank">实验室</a>
          <a href="http://liuyan.wwenj.com/">留言</a>
        </div>
        <div class="bot" @click="openMark"></div>
      </div>
      <!-- 与after两个三角形一个模糊然后覆盖 -->
      <div class="blur"></div>
    </div>
    <div class="iphoe-nav-con" :id="isMark==1?'show':'markHide'">
      <a href="http://blog.wwenj.com/" target="_Blank">博文</a>
      <a href="http://resume.wwenj.com/" target="_Blank">简历</a>
      <a href="http://yun.wwenj.com/" target="_Blank">实验室</a>
      <a href="http://liuyan.wwenj.com/">留言</a>
      <span @click="closeMark">X</span>
    </div>
  </div>
</template>

<script>
import bus from "../assets/eventBus.js";
export default {
  name: "Heade",
  data() {
    return {
      isNav: 0,
      isMark: 0,
      F: 1
    };
  },
  mounted() {
    var that = this;
    bus.$on("toTopEvent", function() {
      // 兄弟组件通信
      that.isNav = 0;
    });
    if (document.addEventListener) {
      document.addEventListener("DOMMouseScroll", this.scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  },
  methods: {
    scrollFunc: function(e) {
      this.timeScroll();
      e = e || window.event;
      if (e.wheelDelta) {
        this.F = e.wheelDelta;
      } else if (e.detail) {
        this.F = e.detail;
      }
      if (this.F === 3) {
        // 兼容火狐
        // console.log("火狐向下");
        this.isNav = 1;
      } else if (this.F === -3) {
        // console.log("火狐向上");
        this.isNav = 0;
      } else {
        if (this.F < 0) {
          // 其他浏览器
          this.isNav = 1;
          // console.log("向下");
        } else {
          this.isNav = 0;
          // console.log("向上");
        }
      }
    },
    timeScroll: function() {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        bus.$emit("toTopEvent", "1");
      } else if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
        bus.$emit("toTopEvent", "0");
      }
    },
    openMark: function() {
      this.isMark = 1;
    },
    closeMark: function() {
      this.isMark = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 平板样式 */
@media (max-width: 1030px) {
  .heade .nav-box {
    box-shadow: 0px 0px 0px red inset;
  }
}
/* 手机端样式 */
@media (max-width: 600px) {
  .heade .nav-con {
    display: none;
  }
  .heade .bot {
    display: block;
  }
}
/* 手机端导航菜单 */
.bot {
  display: none;
  width: 40px;
  height: 40px;
  float: right;
  background: url("../../static/img/nav.png") no-repeat;
  background-size: 40px 40px;
  margin-top: 12px;
  cursor: pointer;
}
/* 手机端显示菜单栏 */
.iphoe-nav-con {
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.897);
  position: fixed;
  top: -300px;
  z-index: 50;
  padding-top: 40px;
}
.iphoe-nav-con a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  transition: all 0.3s;
  color: #fff;
}
.iphoe-nav-con span {
  display: inline-block;
  color: #fff;
  font-weight: 200;
  font-size: 30px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
}
#markHide {
  top: -300px;
  transition: all 0.4s;
}
/* 导航栏显示消失动画 */
#show {
  top: 0;
  transition: all 0.4s;
}
#hide {
  top: -90px;
  transition: all 0.4s;
}
/* 头部 */
.heade {
  width: 100%;
  position: fixed;
  z-index: 20;
}
.nav-box {
  width: 100%;
  height: 50px;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 1px 2px #ccc inset;
}
/* 导航logo 菜单 */
.nav {
  width: 88%;
  max-width: 1200px;
  height: 50px;
  margin: auto;
}
/* 斜线阴影 */
.blur {
  position: absolute;
  width: 0;
  height: 0;
  top: 50px;
  left: 0;
  border-style: solid;
  border-width: 0 0 30px 100vw;
  border-color: transparent #fff;
}
.nav-box:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: -35px;
  left: 0;
  border-style: solid;
  border-width: 0 0 30px 100vw;
  border-color: transparent rgba(0, 0, 0, 0.15);
  filter: blur(2px);
}
/* 导航logo */
.logo-home {
  float: left;
}
.logo-home img {
  vertical-align: bottom;
}
.logo-home {
  display: inline-block;
  width: 130px;
  height: 50px;
}
.logo-home span {
  display: inline-block;
  height: 50px;
  line-height: 72px;
  vertical-align: bottom;
  font-size: 25px;
  font-weight: bold;
}
/*导航选项*/
.nav-con {
  height: 50px;
  float: right;
  line-height: 55px;
  /* border: 1px solid black; */
}
.nav-con a {
  display: inline-block;
  padding: 0 15px;
  margin-right: 15px;
  font-size: 15px;
  transition: all 0.3s;
  color: #666;
}
.nav-con a:hover {
  color: #f70;
}
</style>
