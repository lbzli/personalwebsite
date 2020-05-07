<template>
  <div class="wordCarousel">
    <ul :style="{top:currentPoint}">
      <li :class="{active:0==parentmark}">Branding</li>
      <li :class="{active:1==parentmark}">Awesome</li>
      <li :class="{active:2==parentmark}">Creative</li>
      <li :class="{active:3==parentmark}">Portfolio</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPoint: "0px"
    };
  },
  props: ["parentmark"],
  watch: {
    parentmark: function(newVla) {
      this.currentPoint = -newVla * 80 + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.wordCarousel {
  width: 400px;
  height: 80px;
  overflow: hidden;
  position: absolute;
  ul {
    width: 400px;
    height: 320px;
    position: absolute;
    transition: top 1s ease;
    top: 0;
    li {
      width: 100%;
      height: 80px;
      font-size: 56px;
      color: aliceblue;
      font-weight: 500;
      text-align: center;
      line-height: 80px;
      opacity: 0;
      transition: opacity 0.1s ease;
    }
    .active {
      opacity: 1;
    }
  }
}
</style>