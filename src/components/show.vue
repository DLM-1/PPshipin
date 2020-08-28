<template>
  <main>
    <div id="baoguo">
      <header>
        <h1 @click="backIndex()">
          <img src="../assets/images/logo.svg" alt />
        </h1>
        <router-link to="/select">
          <input type="text" />
        </router-link>
        <span id="select"></span>
        <router-link to="/my">
          <span id="my"></span>
        </router-link>
      </header>

      <!-- 视频简介部分 -->
      <div id="show" v-for="(item,index) in list" v-if="item.id==msg">
        <video v-bind:src="item.src" controls></video>
        <div class="openapp">
          <p>安装PP视频，开通视频会员免广告畅享赛事</p>
        </div>
        <div id="introduction">
          <p>
            <span id="lei">{{item.leixin}}</span>
            <span id="tv">{{item.name}}</span>
            <span id="grade">{{item.grade}}</span>
            <span id="share"></span>
            <span id="install"></span>
          </p>
          <p>{{item.dao}}</p>
          <p>{{item.yan}}</p>
          <p>{{item.lei}}</p>
          <div id="hide" v-show="hiding">
            <p>{{item.di}}</p>
            <p>{{item.year}}</p>
            <p>{{item.jian}}</p>
          </div>
          <p id="change" @click="change">更多详情</p>
        </div>
      </div>

      <!-- 剧集部分 -->
      <div id="tvnum" v-if="('ls'==msg)">
        <p>
          剧集
          <span>更新至第集/共20集</span>
        </p>
        <ul>
          <li
            v-for="(item,index) in Nlist"
            v-bind:class="{show:index==num}"
            v-on:click="changeshow(index)"
          >
            <router-link to="/show/ls">{{item.num}}</router-link>
          </li>
        </ul>
      </div>

      <!-- 相关明星  -->
      <div id="star" v-if="('ls'==msg)">
        <p>相关明星</p>
        <div id="star-show">
          <ul>
            <li v-for="(item,index) in starlist">
              <img v-bind:src="item.src" alt />
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- 为你推荐 -->
      <div id="pushy" v-on:click="changehide()">
        <p id="pp">
          为你推荐
          <span id="move" v-bind:class="{hide:hi==0}">⬅横滑发现更多➡</span>
        </p>
        <div>
          <ul>
            <li v-for="(item,index) in pushylist">
              <img v-bind:src="item.src" alt />
              <p>{{item.p}}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- 精彩评论 -->
      <div id="talk">
        <p>精彩评论</p>
        <ul>
          <li v-for="(item,index) in talklist">
            <img v-bind:src="item.src" alt />
            <div>
              <span>{{item.username}}</span>
              <p>{{item.p}}</p>
              <p>
                <span id="left">{{item.day}}</span>
                <span id="right">{{item.num}}</span>
                <span id="zan"></span>
              </p>
            </div>
          </li>
        </ul>
        <div class="openapp-bottom">
          <p>安装PP视频，开通视频会员免广告畅享赛事</p>
        </div>
      </div>

      <footer>
        <p>
          Copyright©2020上海聚力传媒技术有限公司pptv.com
          <span>版权所有</span>
        </p>
        <p>沪ICP备09010723号网络视听许可证0908250号</p>
      </footer>
      <div id="last">
        <img src="../assets/images/logo.svg" alt />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    backIndex() {
      this.$router.replace("/index");
    },
    change() {
      if (this.hiding == 0) {
        this.hiding = 1;
      } else {
        this.hiding = 0;
      }
    },
    changeshow(a) {
      this.num = a;
    },
    changehide() {
      this.hi = 0;
    },
  },
  data() {
    return {
      msg: "",
      hiding: 0,
      num: 0,
      hi: 1,
      list: [
        {
          leixin: "电影",
          src: "./src/assets/media/video01.mp4",
          name: "战斗之夜",
          grade: "7.8",
          dao: "导演: 罗兰·艾默里奇",
          yan:
            "演员: 卢克·伊万斯,帕特里克·威尔森,伍迪·哈里森,曼迪·摩尔,艾德·斯克林,亚历山大·路德韦格,丹尼斯·奎德,达伦·克里斯,尼克·乔纳斯,艾伦·艾克哈特,卢克·克莱恩坦克,基恩·约翰逊",
          lei: "类型: 国内院线,新上线,VIP电影,VIP尊享,历史,战争",
          di: "地区: 美国",
          year: "年份: 2019",
          jian:
            "简介: 　　电影讲述的是第二次世界大战太平洋战争重要转折点——中途岛海战：经此一役，日本海军受到“降维打击”，美日海上实力反转，从而扭转了整个太平洋战场的局势。影片通过参战士兵和飞行员一个个鲜活的故事，带领观众逐步进入1942年6月初发生在太平洋中途岛附近那场令人难以置信的战争……",
          id: "zjz",
        },
        {
          leixin: "电视剧",
          src: "./src/assets/media/video02.mp4",
          name: "猎手",
          grade: "6.9",
          dao: "导演: 耿明吉",
          yan: "演员: 李思博,于震,王挺,钱迪迪,石兆琪",
          lei: "类型: 战争",
          di: "地区: 内地",
          year: "年份: 2020",
          jian:
            "简介: 1943年秋，在山西与河北交界处的榆树镇，日军疯狂地屠杀、驱赶当地百姓，建立无人区，并在无人区的核心位置磨盘岭，阴谋秘密设立化学武器装配、储运基地，实施“A字”计划。枣树村的百姓因抗拒日军的暴行，被凶残的日军集体屠杀。幸免于难的猎户杨天柱发誓为亲人们报仇，展开了一系列的复仇行动。在一次伏击日军的战斗中，杨天柱等人陷入险境。危急时刻，八路军县大队赶到，将他们解救，几人参加了八路军。日军的阴谋被八路军获悉，八路军两次出击，成功伏击日军的工程人员和运往磨盘岭的设备。八路军与敌人斗智斗勇，成功摧毁了在建的日军基地，并一举歼灭了榆树镇守敌，解放了榆树镇。杨天柱等人，在党的教育下，在战火的洗礼中，成长为一名为民族而战的八路军优秀战士。",
          id: "ls",
        },
      ],
      Nlist: [
        {
          num: "1",
        },
        {
          num: "2",
        },
        {
          num: "3",
        },
        {
          num: "4",
        },
        {
          num: "5",
        },
      ],
      starlist: [
        {
          src: "./src/assets/images/yan1.jpg",
          name: "耿明吉",
        },
        {
          src: "./src/assets/images/yan2.jpg",
          name: "李思博",
        },
        {
          src: "./src/assets/images/yan3.jpg",
          name: "钱迪迪",
        },
        {
          src: "./src/assets/images/yan1.jpg",
          name: "耿明吉",
        },
        {
          src: "./src/assets/images/yan2.jpg",
          name: "李思博",
        },
        {
          src: "./src/assets/images/yan3.jpg",
          name: "钱迪迪",
        },
      ],
      pushylist: [
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
      talklist: [
        {
          src: "./src/assets/images/suning-icon.png",
          username: "PP用户_851638",
          p:
            "中国能拍部让人观看战争片落泪得吗？驾驶着一身伤痕的飞机摇摇晃晃载落在甲板上时我流泪了",
          day: "03-13 11:46:10",
          num: "19",
        },
        {
          src: "./src/assets/images/suning-icon.png",
          username: "PP用户_953169",
          p: "很好看，6元看一步大片很值得，看的我差点没流眼泪。向主角们致敬！",
          day: "2019-12-08 10:48:00",
          num: "20",
        },
        {
          src: "./src/assets/images/suning-icon.png",
          username: "PP用户_993261",
          p:
            "州长真忙。。还的处理政务还的拍电影[熊猫冰冻][熊猫冰冻][熊猫冰冻][熊猫冰冻]",
          day: "04-23 08:58:23",
          num: "19",
        },
      ],
    };
  },
  mounted() {
    this.msg = this.$route.params.st;
  },
};
</script>


<style scoped>
main {
  background: #ebecee;
}
#baoguo {
  overflow: auto;
}
header {
  width: 98%;
  height: 34px;
  padding: 2%;
  display: inline-block;
  position: relative;
  top: 0px;
  background: white;
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
#show {
  padding: 0% 3%;
  background: white;
}
#show video {
  width: 100%;
}
.openapp {
  text-align: center;
  background: #00afec;
  font-size: 16px;
  color: white;
  line-height: 46px;
  border-radius: 3px;
  margin: 3vh;
}
.openapp-bottom {
  text-align: center;
  background: #00afec;
  font-size: 17px;
  color: white;
  line-height: 46px;
  border-radius: 3px;
  margin-top: 36px;
}
#introduction p {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin: 1% 0%;
  line-height: 18px;
  position: relative;
}
/* 简介的图标 */
#introduction #tv {
  font-size: 17px;
  line-height: 48px;
  color: black;
}
#introduction #grade {
  color: orange;
}
#introduction #share {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -1316px -939px;
  width: 33px;
  height: 33px;
  position: absolute;
  right: 37px;
  top: 7px;
  transform: scale(0.5);
}
#introduction #install {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -2183px -636px;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 7px;
  top: 5px;
  transform: scale(0.5);
}
#introduction #change {
  text-align: center;
  font-size: 15px;
  color: black;
  line-height: 30px;
}
/* 剧集 */
#tvnum {
  padding: 0% 3%;
  background: white;
  margin-bottom: 2%;
  overflow: hidden;
}
#tvnum p {
  font-size: 20px;
  line-height: 50px;
}
#tvnum span {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.3);
}
#tvnum ul {
  width: 100%;
}
#tvnum li {
  width: 17.6%;
  height: 50px;
  margin: 1%;
  float: left;
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
}
#tvnum ul li:nth-of-type(5n) {
  margin-right: 0%;
}
/* 相关明星 */
#star {
  padding: 0% 3%;
  background: white;
  margin-bottom: 2%;
}
#star #star-show {
  overflow: auto;
  text-align: center;
}
#star ul {
  width: 150%;
}
#star li {
  width: 15%;
  margin-right: 1%;
  float: left;
}
#star img {
  width: 100%;
  border-radius: 50%;
}
/* 推荐部分 */
#pushy {
  padding: 0% 3%;
  background: white;
}
#pushy div {
  overflow: auto;
}
#pushy #pp {
  line-height: 30px;
}
#pushy ul {
  width: 200%;
}
#pushy ul li {
  width: 14%;
  margin-right: 0.3%;
  float: left;
}
#pushy ul li:nth-of-type(7n) {
  margin-right: 0%;
}
#pushy img {
  width: 100%;
}
#move {
  float: right;
  font-size: 12px;
  line-height: 20px;
  color: #00afec;
}
#talk {
  margin-top: 2%;
  padding: 0% 3%;
  background: white;
  overflow: hidden;
}
#talk p {
  position: relative;
}
#talk li {
  margin: 4vh 0%;
}
#talk img {
  border-radius: 50%;
  float: left;
  height: 50px;
  right: 50px;
}
#talk span {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 24px;
}
#talk #left {
  float: left;
}

#talk #right {
  float: right;
}
/* 点赞 */
#talk #zan {
  display: inline-block;
  background: url("..//assets/images/spritesheet.png") no-repeat -1020px -1404px;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 12px;
  top: -4px;
  transform: scale(0.7);
}
footer {
  text-align: center;
  background: #f5f5f5;
  color: rgba(0, 0, 0, 0.5);
}
footer p {
  font-size: 10px;
  line-height: 14px;
}
footer span {
  font-size: 11px;
}
#last {
  text-align: center;
  margin: 5% 0%;
}
#last img {
  width: 20%;
}
/* 图标 */
#my {
  background: url("../assets/images/ren01.png") no-repeat;
  position: absolute;
  right: 3%;
  top: 1px;
  height: 40px;
  background-size: 80%;
}

#select {
  background: url("../assets/images/ic_search.png") no-repeat;
  position: absolute;
  left: 29%;
  top: 14px;
  height: 38px;
  background-size: 35%;
}

/* 路由样式 */
.show {
  display: inline-block;
  background: #00afec;
  border: 1px solid #00afec;
  line-height: 50px;
  width: 69px;
  color: #00afec;
}

#lei {
  width: 14%;
  background: orange;
  display: inline-block;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  color: white;
}
.hide {
  display: none;
}
</style>