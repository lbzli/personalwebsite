import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import create from './util/create'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$create = create
const store = new Vuex.Store({
  state:{
    status:200,
    message: '',
    flag: false,
    login:false
  },
  mutations: {
    upStatus(state, payload) {
      state.status = payload.status
      state.message = payload.message
      state.flag = payload.flag
    },
    loginStatus(state, payload) {
      state.login = payload.login
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
