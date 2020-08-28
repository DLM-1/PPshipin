<template>
  <main>
    <!-- <h1>搜索</h1> -->
    <header>
      <p>
        <span id="search"></span>
        <!-- <span></span> -->
        <input type="text" id="inp" />
        <span id="search-1">搜索</span>
      </p>
    </header>
    <nav>
      <h2>热门搜索</h2>
      <ul>
        <li v-for="(item,index) in list">
          <span v-bind:class="{one:index==0,two:index==1,three:index==2}">{{index+1}}</span>
          <router-link :to="'/show/'+item.id">{{item.p}}</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>  

<script>
export default {
  data() {
    return {
      list: [
        {
          p: "战斗之夜",
          id: "zjz",
        },
        {
          p: "猎手",
          id: "ls",
        },
        {
          p: "午夜蝴蝶",
          id: "zjz",
        },
        {
          p: "剑安天下",
          id: "ls",
        },
        {
          p: "迷局1931",
          id: "zjz",
        },
        {
          p: "2020赛季中超新闻",
          id: "ls",
        },
        {
          p: "塞上风云记",
          id: "zjz",
        },
        {
          p: "天堂不相信眼泪",
          id: "ls",
        },
        {
          p: "神医传奇",
          id: "zjz",
        },
        {
          p: "红色宝藏",
          id: "ls",
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  margin: 2% 3%;
}
header {
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding-bottom: 2%;
}
/* header input {
  width: 10%;
  background: #f8f8f8;
  border-style: none;
  border-radius: 10px;
  line-height: 30px;
} */
#search {
  background: url("../assets/images/ic_search.png") no-repeat;
  position: absolute;
  left: 3%;
  top: 6px;
  height: 38px;
  width: 38px;
  background-size: 60%;
}
header #inp {
  width: 80%;
  background: #f8f8f8;
  border-style: none;
  border-radius: 30px;
  line-height: 36px;
}
header #search-1 {
  width: 20%;
  text-align: center;
  float: right;
  line-height: 36px;
}
.one {
  background: #ef785f;
  color: white;
}
.two {
  background: #faa96a;
  color: white;
}
.three {
  background: #ffde87;
  color: white;
}
nav span {
  display: inline-block;
  height: 20px;
  width: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  margin-right: 3%;
  font-size: 12px;
}
nav h2 {
  font-size: 20px;
  padding-top: 4%;
  line-height: 40px;
}
nav ul {
  margin: 3% 0%;
}
nav li {
  /* line-height: 50px; */
  font-size: 17px;
  line-height: 22px;
  margin: 3vh 0%;
}
</style>