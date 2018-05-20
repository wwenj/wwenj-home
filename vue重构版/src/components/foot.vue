<template>
  <div class="app" id="blog-foot12580">
    <div class="food">
      <div class="food-top">
        <div class="foottop-left">
          <h3>小编留言</h3>
          <p>本网站是作者学习路上的一个见证，记录和敦促我的学习生活，也希望借此结交更多前辈好友。记录作者在学习生活的点点滴滴，愿与你一同进步，共勉！</p>
        </div>
        <div class="foottop-midd">
          <h3>相关连接</h3>
          <p>
            <a href="http://blog.wwenj.com/" target="_Blank">博文</a>
          </p>
          <p>
            <a href="http://yun.wwenj.com/" target="_Blank">实验室</a>
          </p>
          <p>
            <a href="http://resume.wwenj.com/" target="_Blank">简历</a>
          </p>
        </div>
        <div class="foottop-right">
          <h3>关于</h3>
          <p>
            <a href="http://resume.wwenj.com/" target="_Blank">关于作者</a>
          </p>
          <p class="guanyu">
            <span>
              <a href="https://github.com/wwenj" target="_Blank">
                <img src="../../static/img/github.png" title="GitHub" width="25" height="25">
              </a>
            </span>
            <span>
              <a href="https://www.zhihu.com/people/wwenj" target="_Blank">
                <img src="../../static/img/zhi.png" title="知乎" width="25" height="25">
              </a>
            </span>
            <span>
              <a href="http://blog.wwenj.com/" target="_Blank">
                <img src="../../static/img/you.png" title="博客" width="25" height="25">
              </a>
            </span>
            <span>
              <a href="https://juejin.im/user/settings/profile" target="_Blank">
                <img src="../../static/img/jue.png" title="掘金" width="25" height="25">
              </a>
            </span>
          </p>
        </div>
      </div>
      <div class="food-midd"></div>
      <div class="food-bottom">
        <p>Copyright & copy; 2018 @王文健. All rights reserved.</p>
        <p id="foot-aa">感谢
          <a href="http://bh-lay.com/" target="_Blank"> 小剧客栈 </a>提供的参考设计，阿里云提供的优质云服务，使我完成本网站的首页制作</p>
        <div class="suo">
          <input type="text" :style="isBg==1?'background-color: #cfcece':''" @focus="inputFocus" @blur="inputBlur">
          <input type="button" value="搜索">
        </div>
        <div class="jing">
          <img src="../../static/img/jing.png" width="14" height="16" target="_Blank">
          <a href="http://www.beian.gov.cn/portal/index" target="_Blank">吉ICP备17002762号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {
      isBg: 0
    };
  },
  mounted() {},
  methods: {
    inputFocus: function() {
      this.isBg = 1;
    },
    inputBlur: function() {
      this.isBg = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  width: 100%;
  background: #333333;
  padding-top: 30px;
}
@media (max-width: 1090px) {
  #blog-foot12580 .foottop-midd {
    display: none;
  }
  #blog-foot12580 .food-top .foottop-right {
    width: 35%;
    float: right;
  }
}
@media (max-width: 820px) {
  #blog-foot12580 .food-top {
    display: none;
  }
  #blog-foot12580 .food-midd {
    display: none;
  }
}
@media (max-width: 570px) {
  #blog-foot12580 #foot-aa {
    display: none;
  }
  #blog-foot12580 .suo {
    display: none;
  }
  #blog-foot12580 .food-bottom {
    padding-bottom: 10px;
  }
  #blog-foot12580 {
    padding-top: 10px;
  }
}
#blog-foot12580 .food {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
}

#blog-foot12580 .food-top {
  width: 100%;
  height: 130px;
}

#blog-foot12580 .foottop-left {
  width: 50%;
  float: left;
}

#blog-foot12580 .foottop-midd {
  width: 25%;
  float: left;
}

#blog-foot12580 .foottop-right {
  width: 25%;
  float: left;
}

#blog-foot12580 .food-top h3 {
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 20px;
  font-weight: 400;
  color: rgb(165, 161, 161);
}

#blog-foot12580 .food-top p {
  color: #888;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 10px;
  padding: 0 8px;
  box-sizing: border-box;
}

#blog-foot12580 .food-top a {
  color: #888;
  font-size: 14px;
  transition: all 0.5s;
}

#blog-foot12580 .food-top a:hover {
  color: #fff;
  text-decoration: underline;
}

#blog-foot12580 .guanyu span {
  display: inline-block;
  width: 42px;
  height: 42px;
  border: 1px solid #555;
  border-radius: 100%;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  /* line-height: 42px;
    vertical-align: bottom; */
  padding: 7px 7px;
  box-sizing: border-box;
  transition: all 0.5s;
}

#blog-foot12580 .guanyu span:hover {
  background: #fff;
}

#blog-foot12580 .guanyu span a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

#blog-foot12580 .food-midd {
  width: 100%;
  height: 0;
  /* margin-top: 10px; */
  border-bottom: 1px solid #444;
}

#blog-foot12580 .food-bottom {
  width: 100%;
  max-height: 150px;
  margin: 0 auto;
}

#blog-foot12580 .food-bottom p {
  color: #888;
  font-size: 13px;
  margin-top: 20px;
  text-align: center;
}

#blog-foot12580 .food-bottom p a {
  color: rgb(204, 201, 201);
  transition: all 0.5s;
  text-decoration: underline;
}

#blog-foot12580 .food-bottom p a:hover {
  color: #f70;
}

#blog-foot12580 .suo {
  text-align: center;
  margin-top: 20px;
}

#blog-foot12580 .suo input[type="text"] {
  width: 200px;
  height: 30px;
  border: none;
  text-indent: 10px;
  margin-right: 5px;
  background: #444;
  color: #222;
  outline: none;
  border-radius: 2px;
  transition: all 0.5s;
}

#blog-foot12580 .suo input[type="button"] {
  width: 50px;
  height: 30px;
  background: #707070;
  box-shadow: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  border-radius: 3px;
  color: #222;
  transition: all 0.5s;
  outline: none;
}

#blog-foot12580 .suo input[type="button"]:hover {
  background: #fff;
}

#blog-foot12580 .jing {
  text-align: center;
  height: 20px;
  margin-top: 15px;
  font-size: 12px;
  line-height: 16px;
}

#blog-foot12580 .jing a {
  color: #888;
  transition: all 0.3s;
}

#blog-foot12580 .jing a:hover {
  color: #fff;
  text-decoration: underline;
}

#blog-foot12580 .jing img {
  vertical-align: top;
  margin-right: 5px;
}
</style>
