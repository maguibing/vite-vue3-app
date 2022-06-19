import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import List from '../components/List.vue'
import User from '../components/User.vue'
import UserHome from '../components/UserHome.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/list', component: List },
  {
    path: '/user/:id',
    component: User,
    children: [{ path: '', component: UserHome }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
