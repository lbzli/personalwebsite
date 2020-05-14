<template>
  <div class="create">
    <input type="text" v-model="title" placeholder="请输入文章标题" />
    <textarea cols="30" rows="10" v-model="content" placeholder="请输入文章内容"></textarea>
    <button @click.prevent="submit">提交</button>
  </div>
</template>

<script>
import { createPost } from "../../service/getData";
export default {
  mounted() {
    
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {
      createPost(this.title, this.content)
        .then((result)=>{
          let flag = this.$store.state.flag;
          this.$store.commit("upStatus", {
            status: result.status,
            message: result.message,
            flag: !flag
          });
          this.$router.push('/home')
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.create {
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