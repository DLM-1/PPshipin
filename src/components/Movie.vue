<template>
  <main>
    <div id="movie">
      <div class="index-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/images/2006011015001235439.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2004212205595113183.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2004281030019493792.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2005291718374256118.jpg" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="only">
        <span></span>
        <h2>独家精选</h2>
        <ul>
          <li v-for="(item,index) in listOnly">
            <router-link :to="'/show/'+item.id">
              <img v-bind:src="item.src" alt />
            </router-link>
            <img src="../assets/images/vip.png" alt id="vip" v-bind:class="item.show" />
            <div id="index-text">
              <b>{{item.b}}</b>
              <p>{{item.p}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="new">
        <span></span>
        <h2>最新上线</h2>
        <div id="shownew">
          <ul>
            <li v-for="(item,index) in listnew">
              <router-link :to="'/show/'+item.id">
                <img v-bind:src="item.src" alt />
              </router-link>
              <img src="../assets/images/vip.png" alt id="vip" v-bind:class="item.show" />
              <div id="index-text">
                <p>{{item.p}}</p>
                <b id="newone">{{item.b}}</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="suoyin-x">
        <span></span>
        <h2>院线前瞻</h2>
        <ul>
          <li v-for="(item,index) in list" v-if="(index>=min*4) && (index<max*4)">
            <router-link :to="'/show/'+item.id">
              <img v-bind:src="item.src" alt />
            </router-link>
            <img src="../assets/images/vip.png" alt id="vip" v-bind:class="item.show" />
            <div id="index-text">
              <b>{{item.b}}</b>
              <p>{{item.p}}</p>
            </div>
          </li>
        </ul>
        <button @click="changeOnce()">换一换</button>
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
      if (this.min * 6 > this.list.length - 1) {
        this.max = 1;
        this.min = 0;
      }
    },
    changeTwo() {
      this.max++;
      this.min++;
      if (this.min * 4 > this.listTwo.length - 1) {
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
          src: "./src/assets/images/2005261030596142121.gif",
          b: "哪吒之魔童降世",
          p: "太乙真人出场秀",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/14580812010_500X667.jpg",
          b: "绝地求生",
          p: "大吉大利今晚吃鸡",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/15255132753_500X667.jpg",
          b: "浪漫樱花",
          p: "郭富城浪漫追爱",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2005281535426163768.jpg",
          b: "中国机长",
          p: "万米高空惊险救援",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/15255132753_500X667.jpg",
          b: "终结者：黑暗命运",
          p: "施瓦辛格英雄迟暮",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/1909241435205978579.jpg",
          b: "奇葩朵朵",
          p: "学霸的青春",
          show: "show",
          id: "zjz",
        },
      ],
      listnew: [
        {
          src: "./src/assets/images/2005181601462826850.jpg",
          b: "灭绝",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2005141557063431144.jpg",
          b: "惊涛迷局",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2005091746378992474.jpg",
          b: "别告诉她",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004271811428183787.jpg",
          b: "利刃出鞘",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/1912261203061104851.jpg",
          b: "小羊肖恩2：末日农场",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212248015851924.gif",
          b: "终结者：黑暗命运",
          p: "·热播中——————",
          show: "",
          id: "zjz",
        },
      ],
      list: [
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
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
#movie {
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
  font-size: 20px;
  line-height: 30px;
  margin: 10px 0px 0px 18px;
}
.only ul {
  width: 100%;
  overflow: hidden;
}
.only ul li {
  width: 33%;
  margin-right: 0.33%;
  position: relative;
  float: left;
}
.only img {
  width: 100%;
}

.new {
  margin-bottom: 2%;
  position: relative;
}
.new span {
  display: inline-block;
  height: 25px;
  width: 25px;
  background: yellow;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.new h2 {
  font-size: 20px;
  line-height: 30px;
  margin: 10px 0px 0px 18px;
}
.new #shownew {
  overflow: auto;
}
.new ul {
  width: 200%;
}
.new ul li {
  width: 16%;
  margin-right: 0.33%;
  position: relative;
  float: left;
}
.new img {
  width: 100%;
}
.new #newone {
  font-size: 14px;
}

.suoyin-x {
  overflow: auto;
  position: relative;
  margin-bottom: 2%;
}
.suoyin-x span {
  display: inline-block;
  height: 25px;
  width: 25px;
  background: yellow;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.suoyin-x h2 {
  font-size: 20px;
  line-height: 30px;
  margin: 10px 0px 0px 18px;
}
.suoyin-x button {
  width: 98%;
  height: 47px;
  margin-right: 0.5%;
  font-size: 14px;
  font-style: normal;
  background: rgba(0, 0, 0, 0.05);
  border-style: none;
}
.suoyin-x button:nth-of-type(2n) {
  margin-right: 0%;
}

.suoyin-x ul {
  width: 100%;
}
.suoyin-x ul li {
  width: 49%;
  position: relative;
  float: left;
}
.suoyin-x ul li:nth-of-type(2n) {
  margin-left: 2%;
}
main img {
  width: 100%;
}
#vip {
  position: absolute;
  right: 2%;
  top: -2%;
  height: 22px;
  width: 34px;
}

#index-text {
  height: 54px;
}
#index-text b {
  font-size: 12px;
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
  font-size: 12px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.4);
}
.show {
  display: none;
}
</style>