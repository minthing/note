import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 불러오는 파일이 app.js가 아니라 새 파일로 받아옴
    // 일단 캐시에 올라감 (prefetch)
    // 만약 다른 페이지에는 prefetch true로 주고 싶다면 component: () => import(/* webpackChunkName: "about", weppackPrefetch:true */ '../views/About.vue')
    component: () => import('../views/About.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import('../views/Basic.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import('../views/DataBinding.vue')
  },
  {
    path: '/inputtext',
    name: 'InputText',
    component: () => import('../views/InputText.vue')
  },
  {
    path: '/attribute',
    name: 'Attribute',
    component: () => import('../views/Attribute.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/rander',
    name: 'Rander',
    component: () => import('../views/Rander.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('../views/Event.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/Computed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
