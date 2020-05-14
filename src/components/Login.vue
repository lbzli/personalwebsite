<template>
  <div class="login">
    <div class="login_main">
      <div class="user_icon"></div>
      <p>Sign in to continue</p>
      <form action method="post">
        <label for="email">Email</label>
        <br />
        <input type="text"  v-model="email"/>
        <br />
        <label for="password">Password</label>
        <br />
        <input type="password"  v-model="password"/>
        <br />
        <button type="submit" @click.prevent="login">Sing in</button>
      </form>
      <p>Don't hava an account? Register</p>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {getPostById,toLogin} from '../service/getData'
export default {
  data() {
    return {
      email:'',
      password:'',
    }
  },
  methods: {
    login() {
      console.log(this.email,this.password)
      let result = toLogin(this.email,this.password)
      // result.then(function(value){
      //   console.log(value)
      //   console.log("this是："+this)
      //       //无法使用this.$store
      // })
      result.then((value) => {
        console.log(value)
        let flag = this.$store.state.flag
        this.$store.commit('upStatus',{status:value.status,message:value.message,flag:!flag})
        if(value.message === '登录成功'||value.message === '已登录') {
          sessionStorage.setItem('loginStatus',true)
          localStorage.setItem('userId',value.user._id)
          this.$store.commit('loginStatus',{login:true})
          this.$router.push('/home')
          console.log(value)
        }else {
          sessionStorage.setItem('loginStatus',false)
          this.$store.commit('loginStatus',{login:false})
        }
      })
      
      // console.log(getPostById('5eb82f6f720a63305c760a3d'))
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  min-height: 650px;
  .login_main {
    width: 350px;
    height: 450px;
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
      text-indent: 2em;
    }
    button {
      width: 90%;
      height: 45px;
      background-color: #44a0b3;
      margin-top: 40px;
      color: white
      ;
    }
  }
}
</style>