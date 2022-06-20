import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import List from '../components/List.vue'
import User from '../components/User.vue'
import UserHome from '../components/UserHome.vue'
import Develop from '../components/Develop.vue'
import Edit from '../components/Edit.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/list', component: List, name: 'list' },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    props: true,
    // 当子路由的path 为空时 "" 会默认展示子路由的组件 如果有path 默认第一次加载不会展示UserHome
    children: [{ path: 'userHome', component: UserHome }],
  },
  {
    path: '/develop',
    name: 'develop',
    component: Develop,
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  //   hash: createWebHashHistory(),
  routes,
})

// 路由前置守卫
// router.beforeEach((to, from) => {})

export default router
