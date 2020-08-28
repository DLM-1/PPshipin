// 引入包
import VueRouter from 'vue-router'

// import 自己命名 from 路径/如果是文件包，直接书写文件名字
import first from '../../components/First.vue'
import index from '../../components/Index.vue'
import tv from '../../components/Tv.vue'
import ddtv from '../../components/ddtv.vue'
import movie from '../../components/Movie.vue'
import funny from '../../components/Funny.vue'
import list from '../../components/list.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import select from '../../components/select.vue'
import show from '../../components/show.vue'
import vip from '../../components/vip.vue'
import zongyi from '../../components/zongyi.vue'
import teach from '../../components/teach.vue'
import child from '../../components/child.vue'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: first,
            children: [
                {
                    path: '/index',
                    component: index
                },
                {
                    path: '/tv',
                    component: tv
                },

                {
                    path: '/ddtv',
                    component: ddtv
                },
                {
                    path: '/movie',
                    component: movie
                },
                {
                    path: '/funny',
                    component: funny
                },
                {
                    path: '/vip',
                    component: vip
                },
                {
                    path: '/zongyi',
                    component: zongyi
                },
                {
                    path: '/teach',
                    component: teach
                },
                {
                    path: '/child',
                    component: child
                },
            ],
            redirect: '/index'
        },
        {
            path: '/list',
            component: list
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/my',
            component: my
        },
        {
            path: '/select',
            component: select
        },
        {
            path: '/show/:st',
            component: show
        },
    ]
})