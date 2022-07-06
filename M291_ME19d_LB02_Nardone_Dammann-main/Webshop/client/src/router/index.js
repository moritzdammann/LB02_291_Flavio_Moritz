import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
Vue.use(VueRouter);

export const routes =[
    {
        path: '/home',
        name: 'home',
        component: 'Home'
    }
]


const router = VueRouter({
        routes
    }
)

export default router;

