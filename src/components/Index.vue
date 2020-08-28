<template>
  <section>
    <div class="index-h2">
      <h2>
        <img src="../assets/images/1909041420119026082.jpg" alt />
      </h2>
    </div>
    <!-- mint-ui组件实现轮播图 -->
    <div class="index-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../assets/images/2008271423037810697.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/2004212205595113183.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/2008261734194880776.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/2008271106121322727.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- <h1>index</h1> -->
    <div id="humanHead">
      <img src="../assets/images/2008171116443509041.png" alt />
      <span>《抵达之谜》李现主演电影处女作 ·》</span>
    </div>
    <div class="suoyin-x">
      <span id="part1"></span>
      <h2>重磅影视</h2>
      <ul>
        <li v-for="(item,index) in list" v-if="(index>=min*8) && (index<max*8)">
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
      
        <button @click="tv()">电视剧频道></button>
      <button @click="changeOnce()">换一换</button>
    </div>
    <div class="suoyin-x">
      <span id="part2"></span>
      <h2>热门电影</h2>
      <ul>
        <li v-for="(item,index) in listtwo" v-if="(index>=tmin*6) && (index<tmax*6)">
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
        <button @click="movie()">电影频道></button>
      <button @click="changetwo()">换一换</button>
    </div>
    <div class="suoyin-x">
      <span id="part3"></span>
      <h2>搞笑趣事</h2>
      <ul>
        <li v-for="(item,index) in listthree" v-if="(index>=thmin*6) && (index<thmax*6)">
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
        <button @click="funny()">搞笑频道></button>
      </router-link>
      <button @click="changethree()">换一换</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    changeOnce() {
      this.max++;
      this.min++;
      if (this.min * 8 > this.list.length) {
        this.max = 1;
        this.min = 0;
      }
    },
    changetwo() {
      this.tmax++;
      this.tmin++;
      if (this.tmin * 6 > this.listtwo.length - 1) {
        this.tmax = 1;
        this.tmin = 0;
      }
    },
    changethree() {
      this.thmax++;
      this.thmin++;
      if (this.thmin * 6 > this.listthree.length - 1) {
        this.thmax = 1;
        this.thmin = 0;
      }
    },
    movie(){
      this.$router.replace("/movie")
    },
    tv(){
      this.$router.replace("/tv")
    },
    funny(){
      this.$router.replace("/funny")
    },
  },
  data() {
    return {
      max: 1,
      min: 0,
      tmax: 1,
      tmin: 0,
      thmax: 1,
      thmin: 0,

      list: [
        {
          src: "./src/assets/images/1910221638127250199.gif",
          b: "反贪风暴3",
          p: "两岸联动 铲除黑恶势力",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008191734375429183.jpg",
          b: "绝地战警",
          p: "嘴炮二人组爆笑破案",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2008241756288600122.jpg",
          b: "午夜蝴蝶·正邪博弈",
          p: "邱心志于波谍海暗战",
          id: "zjz",
          show: "",
        },
        {
          src: "./src/assets/images/2008220840000012901.jpg",
          b: "冰锋·全网独播",
          p: "铁血神探智破日军诡计",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "猎手·草根复仇记",
          p: "天柱再次救下富家小姐",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "男人的秘密.极品渣男",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "男人的秘密.极品渣男",
          p: "绿茶与正宫当众挑衅",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "潘多拉的秘密·三角恋",
          p: "美女特工深陷情感漩涡",
          id: "zjz",
          show: "show",
        },
        // 上面是第八个
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "zjz",
          show: "show",
        },
      ],
      listtwo: [
        {
          src: "./src/assets/images/1910221638127250199.gif",
          b: "反贪风暴3",
          p: "两岸联动 铲除黑恶势力",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008191734375429183.jpg",
          b: "绝地战警",
          p: "嘴炮二人组爆笑破案",
          show: "show",
        },
        {
          src: "./src/assets/images/2008241756288600122.jpg",
          b: "午夜蝴蝶·正邪博弈",
          p: "邱心志于波谍海暗战",
          show: "",
        },
        {
          src: "./src/assets/images/2008220840000012901.jpg",
          b: "冰锋·全网独播",
          p: "铁血神探智破日军诡计",
          show: "show",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "猎手·草根复仇记",
          p: "天柱再次救下富家小姐",
          show: "show",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "男人的秘密.极品渣男",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "男人的秘密.极品渣男",
          p: "绿茶与正宫当众挑衅",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "潘多拉的秘密·三角恋",
          p: "美女特工深陷情感漩涡",
          id: "ls",
          show: "show",
        },
        // 上面是第八个
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
      ],
      listthree: [
        {
          src: "./src/assets/images/1910221638127250199.gif",
          b: "反贪风暴3",
          p: "两岸联动 铲除黑恶势力",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008191734375429183.jpg",
          b: "绝地战警",
          p: "嘴炮二人组爆笑破案",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008241756288600122.jpg",
          b: "午夜蝴蝶·正邪博弈",
          p: "邱心志于波谍海暗战",
          show: "",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008220840000012901.jpg",
          b: "冰锋·全网独播",
          p: "铁血神探智破日军诡计",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "猎手·草根复仇记",
          p: "天柱再次救下富家小姐",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2008241733412128422.jpg",
          b: "男人的秘密.极品渣男",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "男人的秘密.极品渣男",
          p: "绿茶与正宫当众挑衅",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "潘多拉的秘密·三角恋",
          p: "美女特工深陷情感漩涡",
          show: "show",
          id: "zjz",
        },
        // 上面是第八个
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "zjz",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "zjz",
        },
      ],
    };
  },
};
</script>
<style >
.index-swipe .mint-swipe .mint-swipe-items-wrap {
  padding-bottom: 60.8%;
  /* height: 200px; */
}
.index-swipe img {
  /* 设置百分比，参照物是父级宽度 */
  width: 100%;
}
.mint-swipe-indicators {
  bottom: 30px;
  left: 10%;
}
.mint-swipe-indicators .mint-swipe-indicator {
  border-radius: 0px;
}
.mint-swipe-indicators .mint-swipe-indicator.is-active {
  background: red;
  width: 12px;
  height: 12px;
}
</style>
<style scoped>
.mm {
  display: none;
}
#humanHead {
  width: 100%;
}
#humanHead img {
  width: 30%;
  position: relative;
  margin-bottom: -30px;
  top: -30px;
}
#humanHead span {
  float: right;
  text-align: center;
  line-height: 50px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}
.suoyin-x {
  position: relative;
  margin-bottom: 6%;
}
.suoyin-x span {
  display: inline-block;
  height: 25px;
  width: 25px;
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
#part1 {
  background: yellow;
}
#part2 {
  background: red;
}
#part3 {
  background: pink;
}
.suoyin-x button {
  width: 49%;
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
section {
  margin: 0px 2%;
}
.index-h2 {
  width: 100%;
}
.index-h2 img {
  width: 100%;
}
section ul {
  width: 100%;
}
section ul li {
  width: 49%;
  position: relative;
  float: left;
}
ul li:nth-of-type(2n) {
  margin-left: 2%;
}
section img {
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
</style>