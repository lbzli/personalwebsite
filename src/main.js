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
    login:false,
    user: null
  },
  mutations: {
    upStatus(state, payload) {
      state.status = payload.status
      state.message = payload.message
      state.flag = payload.flag
    },
    loginStatus(state, payload) {
      state.login = payload.login
    },
    getUserInfo(state, payload) {
      state.user = {}
      state.user.userName = payload.userName
      state.user.id = payload.id
      state.user.icon = payload.icon
      state.user.menu = payload.menu
    },
    // eslint-disable-next-line no-unused-vars
    clearUserInfo(state, payload) {
      state.user = null
    },
    upusericon(state, payload){
      state.user.icon = payload.icon
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
