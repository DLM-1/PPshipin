<template>
  <main>
    <div id="funny">
      <div class="index-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/images/2008061653093504649.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2008061648593464684.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2008061649423486090.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2008061649583491452.jpg" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="only">
        <span></span>
        <h2>开心一刻</h2>
        <ul>
          <li v-for="(item,index) in listOnly" v-if="(index>=min*4) && (index<max*4)">
            <router-link :to="'/show/'+item.id">
              <img v-bind:src="item.src" alt />
            </router-link>
            <div id="index-text">
              <b>{{item.b}}</b>
              <p>{{item.p}}</p>
            </div>
          </li>
        </ul>
        <button @click="changeOnce()">换一换</button>
      </div>
      <div id="video">
        <span id="head"></span>
        <h2>猜你喜欢</h2>
        <ul>
          <li v-for="(item,index) in videolist">
            <video v-bind:src="item.src" controls></video>
            <img v-bind:src="item.Isrc" alt />
            <p>
              {{item.name}}
              <span>+</span>
              <span>关注</span>
              <img src="../assets/images/xin.jpg" alt id="xin" />
              <img src="../assets/images/talk.jpg" alt id="talk" />
              <img src="../assets/images/syin.jpg" alt id="syin" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    changeOnce() {
      this.max++;
      this.min++;
      if (this.min * 4 > this.listOnly.length - 1) {
        this.max = 1;
        this.min = 0;
      }
    },
  },
  data() {
    return {
      max: 1,
      min: 0,

      listOnly: [
        {
          src: "./src/assets/images/fu03.jpg",
          b: "办公室杠精图鉴",
          p: "你身边有这样的人吗",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu02.jpg",
          b: "直男带娃吐槽大会",
          p: "千万不要让妈妈看到",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu03.jpg",
          b: "当画师玩起了你画我猜？",
          p: "全程笑出猪叫！",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu04.jpg",
          b: "当男生看乘风破浪的姐姐",
          p: "可以说很有共鸣了",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu03.jpg",
          b: "办公室杠精图鉴",
          p: "你身边有这样的人吗",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu02.jpg",
          b: "直男带娃吐槽大会",
          p: "千万不要让妈妈看到",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu04.jpg",
          b: "当画师玩起了你画我猜？",
          p: "全程笑出猪叫！",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/fu03.jpg",
          b: "当男生看乘风破浪的姐姐",
          p: "可以说很有共鸣了",
          show: "",
          id: "zjz",
        },
      ],
      videolist: [
        {
          src: "./src/assets/media/video01.mp4",
          Isrc: "./src/assets/images/funny01.jpg",
          name: "大神有药",
        },
        {
          src: "./src/assets/media/video01.mp4",
          Isrc: "./src/assets/images/funny02.jpg",
          name: "大树君TreeMan",
        },
        {
          src: "./src/assets/media/video02.mp4",
          Isrc: "./src/assets/images/funny03.jpg",
          name: "你们听我说",
        },
      ],
    };
  },
};
</script>
<style>
.index-swipe .mint-swipe .mint-swipe-items-wrap {
  padding-bottom: 60.8%;
  /* height: 200px; */
}
.index-swipe img {
  /* 设置百分比，参照物是父级宽度 */
  width: 100%;
}
</style>
<style scoped>
#funny {
  overflow: auto;
  padding: 0% 2%;
}
.only {
  margin-bottom: 2%;
  position: relative;
}
.only span {
  display: inline-block;
  height: 25px;
  width: 25px;
  background: yellow;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.only h2 {
  font-size: 24px;
  line-height: 46px;
  margin: 10px 0px 0px 18px;
}
.only ul {
  width: 100%;
  overflow: hidden;
}
.only ul li {
  width: 49%;
  margin-right: 1%;
  position: relative;
  float: left;
}
.only img {
  width: 100%;
}

.only button {
  width: 98%;
  height: 47px;
  margin-right: 0.5%;
  font-size: 14px;
  font-style: normal;
  background: rgba(0, 0, 0, 0.05);
  border-style: none;
}
#index-text {
  height: 54px;
}
#index-text b {
  font-size: 14px;
  /* 以下几行代码，超出文字出现... */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 行数 */
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  line-height: 24px;
}
#index-text p {
  font-size: 13px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.4);
}
main img {
  width: 100%;
}

#video ul {
  width: 100%;
}
#video {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#video #head {
  display: inline-block;
  height: 25px;
  width: 25px;
  background: yellow;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
#video h2 {
  font-size: 24px;
  line-height: 46px;
  margin: 10px 0px 0px 18px;
}
#video video {
  width: 100%;
}
#video img {
  width: 10%;
  float: left;
  border-radius: 50%;
}
#video p {
  font-size: 14px;
  line-height: 38px;
  position: relative;
}
#video span {
  font-size: 12px;
  margin-left: 2vh;
  color: #00adef;
}
#video li {
  margin-top: 3vh;
}
#video p img {
  height: 32px;
  width: 7%;
}
#xin {
  position: absolute;
  right: 19%;
  top: 1vh;
}
#talk {
  position: absolute;
  right: 12%;
  top: 1vh;
}
#syin {
  position: absolute;
  right: 3%;
  top: 1vh;
}
</style>