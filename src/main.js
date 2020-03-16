import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue'
// import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueAxios, axios) //追記
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
