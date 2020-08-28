<template>
  <main>
    <!-- <h1>这是详情索引页</h1> -->
    <header>
      <h1 @click="backIndex()">
        <img src="../assets/images/logo.svg" alt />
      </h1>
      <router-link to="/select">
        <input type="text" />
      </router-link>
      <span id="select"></span>
      <span id="list" @click="back()"></span>
    </header>
    <div>
      <ul class="tlist">
        <li v-for="(item,index) in list">
          <router-link v-bind:to="item.path">
            <img v-bind:src="item.src" alt />
          </router-link>
          <p>{{item.p}}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    backIndex() {
      this.$router.replace("/index");
    },
  },
  data() {
    return {
      list: [
        {
          src: "./src/assets/images/推荐01.png",
          p: "推荐",
          path: "/index",
        },
        {
          src: "./src/assets/images/电视剧01.png",
          p: "电视剧",
          path: "/index",
        },
        {
          src: "./src/assets/images/电影01.png",
          p: "电影",
          path: "/index",
        },
        {
          src: "./src/assets/images/动漫01.png",
          p: "动漫",
          path: "/index",
        },
        {
          src: "./src/assets/images/搞笑01.png",
          p: "搞笑",
          path: "/index",
        },
        {
          src: "./src/assets/images/vip01.jpg",
          p: "vip尊享",
          path: "/vip",
        },
        {
          src: "./src/assets/images/zongyi01.jpg",
          p: "综艺",
          path: "/zongyi",
        },
        {
          src: "./src/assets/images/teach01.jpg",
          p: "教育",
          path: "/teach",
        },
        {
          src: "./src/assets/images/child01.jpg",
          p: "少儿",
          path: "/child",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  width: 98%;
  height: 34px;
  padding: 2%;
  display: inline-block;
  position: relative;
  top: 0px;
  background: #f8f8f8;
  left: 0px;
}
header h1 {
  width: 25%;
  float: left;
}
header img {
  width: 100%;
  height: 30px;
}
header input {
  width: 55%;
  height: 30px;
  margin: 0px 2%;
  border-style: none;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.1);
}
header span {
  width: 13%;
}
.tlist {
  width: 100%;
  text-align: center;
}
.tlist li {
  float: left;
  width: 20%;
  padding: 1vh;
  border: 0.1px solid rgba(0, 0, 0, 0.3);
}
.tlist img {
  height: 50px;
  width: 50px;
}

#select {
  background: url("../assets/images/ic_search.png") no-repeat;
  position: absolute;
  left: 29%;
  top: 14px;
  height: 38px;
  background-size: 35%;
}
#list {
  background: url("..//assets/images/spritesheet.png") no-repeat -730px -1485px;
  position: absolute;
  right: 6%;
  top: 16%;
  height: 27px;
  width: 27px;
  transform: scale(0.9);
}
</style>