<template>
  <div class="login">
    <div class="login_main">
      <div class="user_icon"></div>
      <p>Sign in to continue</p>
      <form action method="post">
        <label for="email">Email</label>
        <br />
        <input type="text" v-model="email" />
        <br />
        <label for="password">Password</label>
        <br />
        <input type="password" v-model="password1" />
        <br />
        <label for="password">Password</label>
        <br />
        <input type="password" v-model="password2" />
        <br />
        <button type="submit" @click.prevent="register">Sing in</button>
      </form>
      <p>Don't hava an account? Register</p>
    </div>
  </div>
</template>

<script>
import {toLogup} from '../service/getData'
export default {
  data() {
    return {
      email: "",
      password1: "",
      password2:""
    };
  },
  methods: {
    register() {
      console.log(this.email, this.password1,this.password2);
      toLogup(this.email,'x',this.password1,this.password2).then((result)=>{
        console.log(result)
        let flag = this.$store.state.flag
        this.$store.commit('upStatus',{status:result.status,message:result.message,flag:!flag})
        if(result.message === '注册成功') {
          sessionStorage.setItem('loginStatus',true)
          this.$store.commit('loginStatus',{login:true})
          this.$router.push('/home')
        }else {
          sessionStorage.setItem('loginStatus',false)
          this.$store.commit('loginStatus',{login:false})
        }
      })
      
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  min-height: 650px;
  .login_main {
    width: 350px;
    height: 525px;
    text-align: center;
    background-color: white;
    margin: 0 auto;
    //box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    color: #2ea0b9;
    p:nth-of-type(1) {
      height: 100px;
      color: #a1cfd9;
      line-height: 100px;
    }
    p:nth-of-type(2) {
      margin-top: 30px;
      color: #a1cfd9;
    }
    label {
      float: left;
      margin: 15px 0;
      margin-left: 5%;
    }
    input {
      width: 90%;
      height: 45px;
      background-color: #f4fafb;
    }
    button {
      width: 90%;
      height: 45px;
      background-color: #44a0b3;
      margin-top: 40px;
      color: white;
    }
  }
}
</style>