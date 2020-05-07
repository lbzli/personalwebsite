<template>
  <div class="home">
    <div class="header_contain">
      <NumberCarouse class="num_carousel" :parentmark="parentMark"></NumberCarouse>
      <Carousel class="main_carousel" :parentmark="parentMark" @markChange="toChange"></Carousel>
      <WordCarousel class="word_carousel" :parentmark="parentMark"></WordCarousel>
      <div class="mark">
        <ul>
          <li @click="change(0)"></li>
          <li @click="change(1)"></li>
          <li @click="change(2)"></li>
          <li @click="change(3)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NumberCarouse from "./NumberCarouse";
import Carousel from "./Carousel";
import WordCarousel from "./WordCarousel";
export default {
  data() {
    return {
      parentMark: 0,
      bimg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588534781286&di=0cbd8bc57bccd8805640890ae7c286b4&imgtype=0&src=http%3A%2F%2Fpic3.16pic.com%2F00%2F52%2F38%2F16pic_5238782_b.jpg"
    };
  },
  methods: {
    change(i) {
      this.parentMark = i;
    },
    toChange(newVal) {
      this.parentMark = newVal;
    }
  },
  components: {
    NumberCarouse,
    Carousel,
    WordCarousel
  }
};
</script>

<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.header_contain {
  width: 100%;
  height: 630px;
  position: relative;
  .mark {
    width: 250px;
    height: 6px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 150px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 40px;
        height: 6px;
        background-color: aqua;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
  .main_carousel {
    right: 0;
    top: 200px;
  }
  .word_carousel {
    top: 40%;
    left: 30%;
  }
  .num_carousel {
    top: 7%;
    left: 32%;
  }

  @media screen and (max-width: 480px) {
    .main_carousel {
      width: 100%;
      top: 200px;
    }
    .word_carousel {
      top: 40%;
      left: 0;
    }
    .num_carousel {
      top: 7%;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
