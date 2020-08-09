import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/home/home.vue'
import Join from '../views/join/join.vue'
import Project from '../views/project/project.vue'
import Contact from '../views/contact/contact.vue'
import About from '../views/about/about.vue'
import Solution from '../views/solution/solution.vue'
import PuxingSmartParking from '../views/PuxingSmartParking/PuxingSmartParking.vue'




Vue.use(VueRouter)

const routes = [


  {
    path:'/',
    redirect:'/home'

  },

  {
    path:'/puxingSmartParking',
    name:"PuxingSmartParking",
    component:PuxingSmartParking
  },


  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },

  {
    path:'/solution',
    name:'Solution',
    component: Solution
  },


  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },


  {
    path:'/about',
    name: 'About',
    component: About,
    
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
