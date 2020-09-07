<template>
  <div class="box">
    <myForm :userIcon="userIcon">
      <FormItem label="用户名">
        <myInput v-model="username" placeholder="请输入用户名" autocomplete="off"></myInput>
      </FormItem>
      <FormItem label="密码">
        <myInput v-model="password" type="password" placeholder="请输入密码" @focus="getIcon"></myInput>
      </FormItem>
      <FormItem>
        <button @click.prevent="login">提交</button>
      </FormItem>
    </myForm>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getPostById, toLogin } from "../service/getData";
import myForm from "./From/Form";
import FormItem from "./From/FormItem";
import myInput from "./From/Input";
import Notice from "./Common/Notice";
export default {
  components: {
    myForm,
    FormItem,
    myInput
  },
  data() {
    return {
      username: "",
      password: "",
      userIcon: ""
    };
  },
  methods: {
    login() {
      
      let result = toLogin(this.username, this.password);
      // result.then(function(value){
      //   console.log(value)
      //   console.log("this是："+this)
      //       //无法使用this.$store
      // })
      result.then(value => {
        const notice = this.$create(Notice, 
          { message: value.message, duration: 2000 }
        );
        notice.show()
       
        if (value.message === "登录成功" || value.message === "已登录") {
          sessionStorage.setItem("loginStatus", true);
          localStorage.setItem("userId", value.user._id);
          localStorage.setItem("token",value.token)
          this.$store.commit("loginStatus", { login: true });
          this.$router.push("/home");
        
        } else {
          sessionStorage.setItem("loginStatus", false);
          this.$store.commit("loginStatus", { login: false });
        }
      });

    },
    getIcon() {
      console.log('这里开始获取用户的头像')
      this.userIcon = "hahahhaha"
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