<template>
  <div class="numberCarouse">
    <ul :style="{left:currentPoint}">
      <li :class="{active:0==parentmark}">01</li>
      <li :class="{active:1==parentmark}">02</li>
      <li :class="{active:2==parentmark}">03</li>
      <li :class="{active:3==parentmark}">04</li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
    return {
      currentPoint:'0px',
    };
  },
  props:['parentmark'],
  watch: {
      parentmark:function(newVla) {
          this.currentPoint = -newVla*240 + 'px'
      }
  },
};
</script>

<style lang="scss" scoped>
.numberCarouse {
  width: 240px;
  height: 240px;
  overflow: hidden;
  position: absolute;
  ul {
    width: 960px;
    height: 240px;
    position: absolute;
    transition: left 1s ease;
    left: 0;
    li {
      float: left;
      width: 240px;
      height: 240px;
      font-size: 120px;
      color: #4B4F56;
      font-weight: 600;
      text-align: center;
      line-height: 240px;
      opacity: 0;
      transition: opacity 0.1s ease;
    }
    .active {
      opacity: 1;
    }
  }
}
</style>