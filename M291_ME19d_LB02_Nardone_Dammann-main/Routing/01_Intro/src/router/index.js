/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../views/About.vue')
  }, {
    path: '/messages',
    name: 'messageFeed',
    component: () =>
        import('../views/MessageFeed.vue')
  }, {
    path: '/message',
    name: 'message',
    component: () =>
        import('../views/Message.vue'),
        /* Passing the Content */
        props: true
  }, {
    path: '/single',
    name: 'singlemessage',
    component: () =>
        //import('../views/SingleMessage.vue'),
        import('../views/SingleMessageAlternative.vue'),
        /* Passing the Content */
        props: true
  }
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
