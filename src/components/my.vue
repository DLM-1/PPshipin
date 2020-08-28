<template>
  <main>
    <!-- <h1>我的</h1> -->
    <div id="head">
      <img src="../assets/images/2008171116443509041.png" alt />
      <p>PP用户_9527</p>
      <span>Lv1</span>
      <span class="vip"></span>
      <button>开通会员</button>
    </div>
    <div id="main">
      <p>
        <span class="xin"></span>
        <span>猜你喜欢</span>
        <span id="change">换一换</span>
      </p>
      <div id="auto">
        <ul>
          <li v-for="(item,index) in list">
            <img v-bind:src="item.src" alt />
            <p>{{item.p}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="history">
      <p>
        <span class="time"></span>
        播放记录
      </p>
      <ul>
        <li v-for="(item,index) in plist">
          <img v-bind:src="item.src" alt />
          <p>{{item.p}}</p>
          <span>{{item.watch}}</span>
        </li>
      </ul>
    </div>
    <div id="box">
      <p>
        <span class="xinxin"></span>
        我的收藏
      </p>
      <div id="center">
        <p id="center-1">暂无任何的收藏记录</p>
        <p id="center-2">现在就去收藏自己喜欢的影片吧</p>
        <button @click="backIndex()">立刻收藏</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "./src/assets/images/13360521512.jpg",
          p: "笑傲江湖",
        },
        {
          src: "./src/assets/images/15253887695.jpg",
          p: "鬼打鬼",
        },
        {
          src: "./src/assets/images/20065121035.jpg",
          p: "欲爱",
        },
        {
          src: "./src/assets/images/16433532978.jpg",
          p: "影先森私塾院",
        },
        {
          src: "./src/assets/images/10404925180.jpg",
          p: "打击侵略者",
        },
        {
          src: "./src/assets/images/10164285920.jpg",
          p: "情圣",
        },
        {
          src: "./src/assets/images/12184215888.jpg",
          p: "火凰之古墓王陵龙头杖",
        },
      ],
      plist: [
        {
          src: "./src/assets/images/w160.jpg",
          p: "猎手",
          watch: "观看00分/总40分",
        },
        {
          src: "./src/assets/images/w160 (1).jpg",
          p: "惊心动魄的飞行之旅",
          watch: "观看00分/总40分",
        },
        {
          src: "./src/assets/images/w160 (3).jpg",
          p: "抵达之谜",
          watch: "观看00分/总40分",
        },
      ],
    };
  },
  methods: {
    backIndex() {
      this.$router.replace("/index");
    },
  },
};
</script>
<style  scoped>
main {
  background: #ebedee;
}
#head {
  margin-top: 3%;
  padding-bottom: 3%;
  overflow: hidden;
  position: relative;
  background: white;
}
#head img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: black;
  float: left;
  background-size: 80%;
}
#head p {
  margin-left: 28%;
  line-height: 28px;
}

#head span {
  margin-left: 3%;
  color: red;
  /* line-height: 28px; */
}
#head button {
  height: 36px;
  width: 110px;
  background: #04aaf2;
  top: 14%;
  right: 11%;
  color: white;
  position: absolute;
  border-radius: 10px;
}
#main {
  margin-top: 2%;
  padding: 2%;
  background: white;
  position: relative;
}
#main span {
  font-size: 17px;
  line-height: 32px;
}
#main #change {
  font-size: 14px;
  color: skyblue;
  line-height: 32px;
  float: right;
}
#main #auto {
  overflow: auto;
}
#main ul {
  width: 200%;
}
#main ul li {
  width: 14%;
  margin-right: 0.3%;
  float: left;
}
#main ul li:nth-of-type(7n) {
  margin-right: 0%;
}
#main img {
  width: 100%;
}
#history {
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 2%;
  overflow: hidden;
  position: relative;
  background: white;
  overflow: auto;
}
#history ul {
  width: 100%;
}
#history ul li {
  width: 33%;
  margin-right: 0.3%;
  float: left;
}
#history ul li:nth-of-type(3n) {
  margin-right: 0%;
}
#history img {
  width: 100%;
}
#history p {
  /* 以下几行代码，超出文字出现... */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 行数 */
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  line-height: 30px;
}
#history span {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
}

#box {
  /* margin-top: 3%; */
  /* margin-bottom: 5%; */
  padding: 2%;
  position: relative;
  background: white;
}
#box #center {
  text-align: center;
  padding: 20% 0%;
}
#center #center-1 {
  font-size: 18px;
  line-height: 34px;
}
#center #center-2 {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 28px;
}
#center button {
  height: 36px;
  width: 110px;
  background: #04aaf2;
  bottom: 12%;
  right: 38%;
  color: white;
  position: absolute;
  border-radius: 10px;
}

/* 以下都是精灵图片 */
.vip {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -1369px -939px;
  width: 31px;
  height: 31px;
  transform: scale(0.5);
  position: relative;
  left: 5px;
  top: 7px;
}
.xin {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -820px -1404px;
  width: 28px;
  height: 28px;
  position: relative;
  left: 5px;
  top: 7px;
  transform: scale(0.7);
}
.time {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -770px -1404px;
  width: 28px;
  height: 28px;
  position: relative;
  left: 5px;
  top: 7px;
  transform: scale(0.7);
}
.xinxin {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -1421px -940px;
  width: 26px;
  height: 26px;
  position: relative;
  left: 5px;
  top: 7px;
  transform: scale(0.7);
}
</style>