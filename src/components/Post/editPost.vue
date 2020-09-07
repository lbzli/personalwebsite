<template>
  <div class="edit" id="box">
    <input type="text" v-model="title" />
    <textarea cols="30" rows="10" v-model="content"></textarea>
    <button @click.prevent="submit">提交</button>
  </div>
</template>

<script>
import { getPostContentById, upPostById } from "../../service/getData";
import Notice from "../Common/Notice";
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
        // let flag = this.$store.state.flag;
        // this.$store.commit("upStatus", {
        //   status: result.status,
        //   message: result.message,
        //   flag: !flag
        // });
        // console.log(result);
        const notice = this.$create(Notice, {
          message: result.message,
          duration: 2000
        });
        notice.show();
        this.$router.push("/home");
      });
    },
    init() {
      getPostContentById(this.$route.params.id).then(result => {
        // let flag = this.$store.state.flag;
        // this.$store.commit("upStatus", {
        //   status: result.status,
        //   message: result.message,
        //   flag: !flag
        // });
        // console.log(result);
        if (result.status === 500 || result.status === 401) {
          const notice = this.$create(Notice, {
            message: result.message,
            duration: 2000
          });
          notice.show();
          this.$router.go(-1);
        } else {
          // console.log(result.post)
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
#box {
  width: 600px;
  min-height: 500px;
  background-color: white;
  box-sizing: border-box;
  padding-top: 50px;
  input {
    display: block;
    width: 80%;
    height: 30px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 30px;
    outline: none;
  }
  textarea {
    display: block;
    width: 80%;
    height: 300px;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 30px;
    outline: none;
  }
  button {
    display: block;
    width: 30%;
    min-width: 100px;
    height: 30px;
    margin: 0 auto;
    border-radius: 5px;
    cursor: pointer;
  }
}
@media screen and (max-width: 480px) {
  #box {
    width: 100%;
  }
}
</style>