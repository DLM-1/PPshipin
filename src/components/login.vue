<template>
  <div class="inlogin">
    <h1>
      <img src="../assets/images/suningyigou.png" alt />
    </h1>
    <h2>苏宁易购登录</h2>
    <div class="in-input">
      <p>
        <input type="text" name id="p-number" />
      </p>
      <p>
        <input type="text" id="p-word" />
        <span>获取验证码</span>
      </p>
    </div>
    <p class="login-in" @click="loginIn()">立刻登录</p>

    <p class="w-suning">
      <span></span>
      使用苏宁易购帐号登录
    </p>
    <div class="l-foot">
      <span>其他登录方式</span>
      <p>
        <span class="p"></span>
        <span class="q"></span>
        <span class="w"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginIn() {
      this.$router.push("/my");
    },
  },
};
</script>

<style scoped>
.inlogin h1 {
  margin-top: 8%;
  margin-bottom: 2%;
}
.inlogin h2 {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 6%;
}
.inlogin {
  text-align: center;
  margin: 0px 5%;
}
.in-input input {
  width: 100%;
  height: 50px;
  border-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.in-input p {
  position: relative;
}
.in-input span {
  position: absolute;
  right: 3%;
  top: 15px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.3);
}
.login-in {
  background: blue;
  margin-top: 3%;
  border-radius: 30px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  font-size: 20px;
  line-height: 50px;
}
h1 img {
  display: inline-block;
  height: 65px;
  width: 65px;
}
.w-suning {
  margin-top: 14%;
}
.w-suning span {
  display: inline-block;
  background: url("../assets/images/suning-icon.png") no-repeat;
  height: 30px;
  width: 30px;
  background-size: 130%;
}
.w-suning {
  font-size: 18px;
}
.l-foot {
  margin-top: 45%;
}
.l-foot span {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 16px;
  margin-top: 18px;
}
.p {
  display: inline-block;
  background: url("../assets/images/pptv-circle.png") no-repeat;
  height: 55px;
  width: 55px;
  background-size: 110%;
  margin-right: 12%;
}
.q {
  display: inline-block;
  background: url("../assets/images/qq.png") no-repeat;
  height: 55px;
  width: 55px;
  background-size: 110%;
}
.w {
  display: inline-block;
  background: url("../assets/images/weibo.png") no-repeat;
  height: 55px;
  width: 55px;
  background-size: 110%;
  margin-left: 12%;
}
</style>