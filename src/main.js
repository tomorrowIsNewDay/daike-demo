import Vue from 'vue'
import App from './App.vue'
// import { http } from './api/http'
import http from './http/index'
import router from './router'
import Vant from 'vant'

import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(http)

// Object.defineProperty(Vue.prototype, '$http', {
//   get(){
//     return http
//   }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

