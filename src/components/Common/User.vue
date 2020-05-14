<template>
  <div class="user-main">
    <div class="user_login" :class="{hidden:hidden2}">
      <router-link to="/login" tag="li">登录</router-link>
      <router-link to="/register" tag="li">注册</router-link>
    </div>
    <div class="user_info" :class="{hidden:!hidden2}">
      <li>用户</li>
      <li @click="lognout">登出</li>
    </div>
  </div>
</template>


<script>
import {toLogout} from '../../service/getData'
export default {
  computed: {
    hidden2: function() {
      console.log(this.$store.state.message)
      return this.$store.state.login
    }
  },
  methods: {
    lognout() {
      toLogout().then((result)=>{
        let flag = this.$store.state.flag
        this.$store.commit('upStatus',{status:result.status,message:result.message,flag:!flag})
        sessionStorage.setItem('loginStatus',false)
        this.$store.commit('loginStatus',{login:false})
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.user-main {
  min-width: 80px;
  .user_login {
    display: flex;
    justify-content: space-around;
    li {
      font-size: 12px;
      cursor: pointer;
    }
  }
  .user_info {
    display: flex;
    justify-content: space-around;
    li {
      font-size: 12px;
      cursor: pointer;
    }
  }
  .hidden {
    display: none;
  }
}
</style>