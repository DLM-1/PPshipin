<template>
  <main>
    <div id="tv">
      <div class="index-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/images/2008231554114818519.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2004212205595113183.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2008061759076969756.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/2008211558252443416.jpg" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="suoyin-x">
        <span></span>
        <h2>重磅影视</h2>
        <ul>
          <li v-for="(item,index) in list" v-if="(index>=min*6) && (index<max*6)">
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
      <div class="suoyin-x">
        <span></span>
        <h2>重磅影视</h2>
        <ul>
          <li v-for="(item,index) in listOne">
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
      <div class="suoyin-x">
        <span></span>
        <h2>重磅影视</h2>
        <ul>
          <li v-for="(item,index) in listTwo" v-if="(index>=tmin*4) && (index<tmax*4)">
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
        <button @click="changeTwo()">换一换</button>
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
      this.tmax++;
      this.tmin++;
      if (this.tmin * 4 > this.listTwo.length - 1) {
        this.tmax = 1;
        this.tmin = 0;
      }
    },
  },
  data() {
    return {
      max: 1,
      min: 0,
      tmax: 1,
      tmin: 0,

      list: [
        {
          src: "./src/assets/images/2008171049201418314.jpg",
          b: "潘多拉的秘密·致命玫瑰",
          p: "刘璃被叛徒出卖遭围攻",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008041120587392045.jpg",
          b: "手枪队·抗日男人帮",
          p: "大哥杜凌云战死沙场",
          show: "show",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          id: "ls",
          show: "show",
        },
        {
          src: "./src/assets/images/2008041120587392045.jpg",
          b: "手枪队·抗日男人帮",
          p: "大哥杜凌云战死沙场",
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
          show: "",
        },
        {
          src: "./src/assets/images/2008261110456204615.jpg",
          b: "功勋",
          p: "柳云龙变身“结巴特工”",
          show: "",
          id: "ls",
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
      listOne: [
        {
          src: "./src/assets/images/2008261110456204615.jpg",
          b: "功勋",
          p: "柳云龙变身“结巴特工”",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008261054225463706.jpg",
          b: "战地花开",
          p: "189团激战谍报小分队",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008101736537270732.jpg",
          b: "壮丁也是兵",
          p: "徐梵溪演绎抗战版穆桂英",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008141516535638228.jpg",
          b: "豆娘",
          p: "假小子逆袭抗日战士",
          show: "",
          id: "ls",
        },
      ],
      listTwo: [
        {
          src: "./src/assets/images/2008261110456204615.jpg",
          b: "功勋",
          p: "柳云龙变身“结巴特工”",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008261054225463706.jpg",
          b: "战地花开",
          p: "189团激战谍报小分队",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "",
        },
        {
          src: "./src/assets/images/2008101736537270732.jpg",
          b: "壮丁也是兵",
          p: "徐梵溪演绎抗战版穆桂英",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2008141516535638228.jpg",
          b: "豆娘",
          p: "假小子逆袭抗日战士",
          show: "",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "ls",
        },
        {
          src: "./src/assets/images/2004212205595113183.jpg",
          b: "I will be back! 终结者最后的话语震撼人心",
          p: "年老的终结者依旧是敲厉害的",
          show: "show",
          id: "ls",
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
#tv {
  overflow: auto;
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

main ul {
  width: 100%;
}
main ul li {
  width: 49%;
  position: relative;
  float: left;
}
ul li:nth-of-type(2n) {
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
</style>