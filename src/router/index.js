import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/Login')
const Home = () => import('@/views/Home')
const Welcome = () => import('@/views/Welcome')
const User = () => import('@/views/User')
const Roles = () => import('@/views/Roles')
const Rights = () => import('@/views/Rights')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    // 重定向
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome, name: 'welcome' },
      { path: '/user', component: User, name: 'user' },
      { path: '/roles', component: Roles, name: 'roles' },
      { path: '/rights', component: Rights, name: 'rights' }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
