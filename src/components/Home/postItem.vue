<template>
  <div class="item" @click="toPost">
    <h5>
      <a href="#">{{title}}</a>
    </h5>

    <div class="info">
      <ul>
        <li>{{authorName}}</li>
        <li>{{createTime}}</li>
        <li>阅读（15）</li>
        <li>喜欢（2）</li>
      </ul>
    </div>
    <div class="content" v-html="content"></div>
    <div class="image">
      <img
        src="http://demo.qfpffmp.cn/cssthemes6/3rdw_4_devblog/assets/images/blog/blog-post-thumb-1.jpg"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toPost() {
      this.$router.push("/post/" + this.postid);
    }
  },
  props: ["title", "content", "authorName", "createTime", "postid"]
};
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  padding: 10px;
  padding-left: 18%;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  a {
    color: #292929;
    font-size: 20px;
  }
  .info ul {
    padding: 0;
    margin: 10px 0;
    width: 50%;
    display: flex;
    justify-content: space-between;
    li {
      font-size: 12px;
      color: #8f8f8f;
    }
  }
  .content {
    margin: 10px 0;
    font-size: 12px;
  }
  .image {
    width: 15%;
    height: 75%;
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    img {
      width: 100%;
      margin: auto 0;
    }
  }
}

@media screen and (max-width: 480px) {
  .item {
    padding-left: 10px;
    .info {
      width: 100%;
      ul {
        width: 100%;
      }
    }
    .image {
      display: none;
    }
  }
}
</style>