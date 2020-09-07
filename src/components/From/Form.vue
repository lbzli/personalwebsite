<template>
  <div id="box">
    <div class="user_icon">
      <!-- <img src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=2270510574,2326044837&fm=85&app=92&f=JPEG?w=121&h=75&s=9EC72BDA1AC824495C3BFE06030060F5" alt=""> -->
      {{userIcon}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["userIcon"]
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
    width: 50px;
    height: 50px;
    background-color: pink;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-bottom: 25px;
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
}
</style>