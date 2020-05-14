<template>
  <nav>
    <ul>
      <router-link to="/home" tag="li">首页</router-link>
      <router-link to="/about" tag="li">关于我</router-link>
      <router-link to="/article" tag="li">文章</router-link>
      <User></User>
    </ul>
  </nav>
</template>

<script>
import User from './User'
export default {
  components: {
    User
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100px;
  line-height: 100px;
  font-family: "Nunito", sans-serif;
  color: white;
  ul {
    width: 30%;
    float: right;
    margin-right: 10%;
    display: flex;
    justify-content: space-around;
    li {
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 480px) {
    ul {
      width: 100%;
      margin: 0;
    }
  }
}
</style>