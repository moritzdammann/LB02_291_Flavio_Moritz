import Vue from 'vue'

//Demos_03 - Mini webshop (only read products without storing checkout)
import App from './Webshop.vue'
import store from './store/webshop.js'
// import router from './router'

//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
// router,
  store,
  render: h => h(App)
}).$mount('#app')
