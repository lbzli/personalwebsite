<template>
  <div class="create" id="box">
    <input type="text" v-model="title" placeholder="请输入文章标题" />
    <textarea cols="30" rows="15" v-model="content" placeholder="请输入文章内容(您可以使用markdown语法)"></textarea>
    <button @click.prevent="submit">提交</button>
  </div>
</template>

<script>
import { createPost } from "../../service/getData";
import Notice from "../Common/Notice";
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
          const notice = this.$create(Notice,{
            message: result.message,
            duration: 2000
          })
          notice.show()

          // let flag = this.$store.state.flag;
          // this.$store.commit("upStatus", {
          //   status: result.status,
          //   message: result.message,
          //   flag: !flag
          // });
          this.$router.push('/home')
        })
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