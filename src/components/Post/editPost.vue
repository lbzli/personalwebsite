<template>
  <div class="edit">
    <input type="text" v-model="title" />
    <textarea cols="30" rows="10" v-model="content"></textarea>
    <button @click.prevent="submit">提交</button>
  </div>
</template>

<script>
import { getPostContentById, upPostById } from "../../service/getData";
export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      title: "",
      content: "",
      postId: ""
    };
  },
  methods: {
    submit() {
      upPostById(this.postId, this.title, this.content).then(result => {
        let flag = this.$store.state.flag;
        this.$store.commit("upStatus", {
          status: result.status,
          message: result.message,
          flag: !flag
        });
        // console.log(result);
        this.$router.push('/home')
      });
    },
    init() {
      getPostContentById(this.$route.params.id).then(result => {
        let flag = this.$store.state.flag;
        this.$store.commit("upStatus", {
          status: result.status,
          message: result.message,
          flag: !flag
        });
        console.log(result);
        if (result.status === 500) {
          this.$router.go(-1);
        } else {
          this.title = result.post.title;
          this.content = result.post.content;
          this.postId = result.post._id;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.edit {
  width: 1024px;
  min-height: 400px;
  background-color: aqua;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 50px;
  input {
    display: block;
    width: 80%;
    height: 30px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  textarea {
    display: block;
    width: 80%;
    height: 200px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  button {
    display: block;
    width: 10%;
    min-width: 100px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 480px) {
  .edit {
    width: 100%;
  }
}
</style>