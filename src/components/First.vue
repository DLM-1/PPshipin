<template>
  <main>
    <div id="posi">
      <header>
        <h1 @click="backIndex()">
          <img src="../assets/images/logo.svg" alt />
        </h1>
        <router-link to="/select">
          <input type="text" />
        </router-link>
        <span id="select"></span>
        <router-link to="/login">
          <span id="my"></span>
        </router-link>
        <router-link to="/list">
          <span id="list"></span>
        </router-link>
      </header>
      <nav>
        <ul>
          <li v-for="(item,index) in list">
            <router-link :to="item.path">{{item.con}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  methods: {
    backIndex() {
      this.$router.replace("/index");
    },
  },
  data() {
    return {
      list: [
        {
          con: "推荐",
          path: "/index",
        },
        {
          con: "电视剧",
          path: "/tv",
        },
        {
          con: "电影",
          path: "/movie",
        },
        {
          con: "搞笑",
          path: "/funny",
        },
        {
          con: "动漫",
          path: "/ddtv",
        },
        {
          con: "vip尊享",
          path: "/vip",
        },
        {
          con: "综艺",
          path: "/zongyi",
        },
        {
          con: "教育",
          path: "/teach",
        },
        {
          con: "少儿",
          path: "/child",
        },
      ],
    };
  },
};
</script>


<style scoped>
/* 默认自带的类，点中以后自带的 */
.router-link-active {
  display: inline-block;
  border-radius: 30px;
  background: #00adef;
  width: 80%;
  line-height: 24px;
  color: white;
}

main {
  overflow: auto;
}

header {
  width: 98%;
  height: 24px;
  margin: 2%;
  display: inline-block;
  position: relative;
  margin-bottom: 12px;
  top: 0px;
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
  width: 41%;
  height: 30px;
  margin: 0px 2%;
  border-style: none;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.1);
}
header span {
  width: 13%;
}
#my {
  background: url("../assets/images/ren01.png") no-repeat;
  position: absolute;
  right: 13%;
  top: -8px;
  height: 40px;
  background-size: 80%;
}

#list {
  background: url("../assets/images/liebiao01.png") no-repeat;
  position: absolute;
  right: 0%;
  top: -8px;
  height: 40px;
  background-size: 80%;
}

#select {
  background: url("../assets/images/ic_search.png") no-repeat;
  position: absolute;
  left: 28%;
  top: 8px;
  height: 38px;
  background-size: 35%;
}
nav {
  width: 100%;
  overflow: auto;
}
nav ul {
  width: 200%;
  border-top: 1px solid black;
}
nav li {
  display: inline-block;
  margin: 5px 0px;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  width: 11%;
}
</style>