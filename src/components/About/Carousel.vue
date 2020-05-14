<template>
  <div class="contain">
    <ul :style="{left:currentPoint}">
      <li v-for="(image,index) in img" :key="index">
        <a>
          <img :src="image" alt @click="change(index)" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPoint: "0px",
      color: "rgb(38, 128, 128)",
      activeColor: "#fff",
      imgclass: "imgactive",
      img: [
        "http://demo.qfpffmp.cn/cssthemes6/cpts_2016_dam/assets/images/1.jpg",
        "http://demo.qfpffmp.cn/cssthemes6/cpts_2016_dam/assets/images/2.jpg",
        "http://demo.qfpffmp.cn/cssthemes6/cpts_2016_dam/assets/images/3.jpg",
        "http://demo.qfpffmp.cn/cssthemes6/cpts_2016_dam/assets/images/4.jpg"
      ]
    };
  },
  props: ["parentmark"],
  watch: {
    parentmark: function(newVla) {
      this.currentPoint = -newVla * 590 + "px";
    }
  },
  methods: {
    change(i) {
      this.currentPoint = -i * 590 + "px";
      this.$emit("markChange", i);
    }
  }
};
</script>
<style lang="scss" scoped>
.contain {
  width: 60%;
  height: 350px;
  position: absolute;
  overflow: hidden;
  ul {
    width: 2500px;
    position: absolute;
    transition: left 1s ease;
    left: 0;
    li {
      width: 560px;
      height: 350px;
      border-radius: 10px;
      overflow: hidden;
      float: left;
      margin-right: 30px;
      img {
        width: 560px;
        transition: all 1s ease;
      }
    }
    @media screen and (max-width: 480px) {
      li {
        border-radius: 0;
      }
    }
  }
}
</style>