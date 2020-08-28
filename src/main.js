import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'

// 配置每一个组件可以使用vue-router
Vue.use(VueRouter)
Vue.use(Mint)
// 引入路由
import router from '../src/assets/js/router.js'
import '../node_modules/mint-ui/lib/style.css'
//定义全局样式
import './assets/css/cssreset.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
