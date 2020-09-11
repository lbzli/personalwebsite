<template>
  <div class="user">
    <div class="user_info" v-if="user">
      <img :src="user.icon"  @click="upicon"/>
      <span class="user_name">{{user.userName}}</span>
    </div>
    <div class="user_login" v-else>
      <router-link to="/login" tag="span">登录</router-link>
      <router-link to="/register" tag="span">注册</router-link>
    </div>
    <div class="user_menu" v-if="user">
      <router-link class="menu_item" v-for="(menu, index) in user.menu" :key="index" tag="div" :to="menu.target">{{menu.title}}</router-link>
      <div class="menu_item" @click="lognout">退出登录</div>
    </div>
  </div>
</template>

<script>
//import { baseUrl } from '../../config/constant';
import Notice from "../Common/Notice";
export default {
  updated() {
    this.$nextTick(() => {
      console.log(this.$refs);
      // this.$refs.icon.src = baseUrl + user.userName
    });
  },
  data() {
    return {
      UserMenu: ["这里就是标题一", "这里就是标题二", "这里就是标题三"]
    };
  },
  props: ["user"],
  methods: {
    getref() {
      console.log(this.$refs.icon);
    },
    lognout() {
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
    },
    upicon() {
        console.log('你点击了头像')
        this.$router.push("/uploadicon");
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  min-width: 100px;

  .user_login {
    margin-top: 25px;
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    * {
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .user_info {
    margin-top: 25px;
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
    }
    .user_name {
      font-size: 16px;
      font-weight: 700;
    }
  }
  .user_menu {
    height: 0px;
    transition: all 1s ease;
    overflow: hidden;
    font-size: 14px;
    .menu_item {
      background-color: #330033;
      box-shadow: 1px 1px 3px white;
      padding: 0 10px;
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 600;
    }
  }
  &:hover {
    .user_menu {
      height: 180px;
    }
  }
}
</style>