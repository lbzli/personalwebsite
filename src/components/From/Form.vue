<template>
  <div id="box">
    <div class="user_icon">
      <div class="icon">
         <img ref="iconimg" alt="">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {baseUrl}  from '../../config/constant.js'
export default {
  data() {
    return {
      // eslint-disable-next-line no-undef
      icon: baseUrl
    };
  },
  props: ["userIcon"],
  watch:{
    userIcon:function (newval) {
      this.$refs.iconimg.src = baseUrl+'login/'+newval
    }
  }
};
</script>

<style lang="scss" scoped>
#box {
  margin: 0 auto;
  width: 350px;
  min-width: 100px;
  background-color: white;
  border-top: 0.1px solid white;
  border-bottom: 0.1px solid white;
  .user_icon {
    display: flex;
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 25px;
    margin-top: -30px;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
    .icon {
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>