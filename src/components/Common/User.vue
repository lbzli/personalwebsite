<template>
  <div class="user-main">
    <div class="user_login" :class="{hidden:hidden2}">
      <router-link to="/login" tag="span">登录</router-link>
      <router-link to="/register" tag="span">注册</router-link>
    </div>
    <div class="user_info" :class="{hidden:!hidden2}">
      <li>用户</li>
      <li @click="lognout">登出</li>
    </div>
  </div>
</template>


<script>
import { toLogout } from "../../service/getData";
import Notice from "../Common/Notice";
export default {
  computed: {
    hidden2: function() {
      return this.$store.state.login;
    }
  },
  methods: {
    lognout() {
      toLogout().then(() => {
        // let flag = this.$store.state.flag
        // this.$store.commit('upStatus',{status:result.status,message:result.message,flag:!flag})
        const notice = this.$create(Notice, {
          message: "登出成功",
          duration: 2000
        });
        notice.show();

        localStorage.setItem("loginStatus", false);
        localStorage.removeItem("token");
        this.$store.commit("loginStatus", { login: false });

        this.$store.commit("clearUserInfo", {});
        localStorage.removeItem("user");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-main {
  min-width: 80px;
  .user_login {
    display: flex;
    justify-content: space-around;
    span {
      font-size: 12px;
      cursor: pointer;
    }
  }
  .user_info {
    display: flex;
    justify-content: space-around;
    span {
      font-size: 12px;
      cursor: pointer;
    }
  }
  .hidden {
    display: none;
  }
}
</style>