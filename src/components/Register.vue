<template>
  <div class="box">
    <myForm>
      <FormItem label="用户名">
        <myInput v-model="username" placeholder="请输入用户名" autocomplete="off"></myInput>
      </FormItem>
      <FormItem label="密码">
        <myInput v-model="password1" type="password" placeholder="请输入密码"></myInput>
      </FormItem>
      <FormItem label="重复密码">
        <myInput v-model="password2" type="password" placeholder="请重复输入密码"></myInput>
      </FormItem>
      <FormItem>
        <button @click.prevent="register">提交</button>
      </FormItem>
    </myForm>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {toLogup} from '../service/getData'
import myForm from "./From/Form";
import FormItem from "./From/FormItem";
import myInput from "./From/Input";
import Notice from './Common/Notice'

export default {
  components: {
    myForm,
    FormItem,
    myInput
  },
  data() {
    return {
      username: "",
      password1: "",
      password2: ""
    };
  },
  methods: {
    register() {
      console.log(this.username, this.password1, this.password2);
      toLogup(this.username, "x", this.password1, this.password2).then(result => {
        const notice = this.$create(Notice,{
          message:result.message,
          duration: 2000
        })
        notice.show()
        // console.log(result);
        // let flag = this.$store.state.flag;
        // this.$store.commit("upStatus", {
        //   status: result.status,
        //   message: result.message,
        //   flag: !flag
        // });
        if (result.message === "注册成功") {
          sessionStorage.setItem("loginStatus", true);
          this.$store.commit("loginStatus", { login: true });
          this.$router.push("/home");
        } else {
          sessionStorage.setItem("loginStatus", false);
          this.$store.commit("loginStatus", { login: false });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 45px;
  background-color: #44a0b3;
  margin-top: 40px;
  color: white;
  outline: none;
  cursor: pointer;
  margin-bottom: 30px;
}
</style>