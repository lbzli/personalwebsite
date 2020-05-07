<template>
  <div class="login">
    <div class="login_main">
      <div class="user_icon"></div>
      <p>Sign in to continue</p>
      <form action method="post">
        <label for="email">Email</label>
        <br />
        <input type="text" name="Email" id="email" />
        <br />
        <label for="password">Password</label>
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Sing in</button>
      </form>
      <p>Don't hava an account? Register</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  min-height: 650px;
  .login_main {
    width: 350px;
    height: 450px;
    text-align: center;
    background-color: white;
    margin: 0 auto;
    //box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    color: #a1cfd9;
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
      color: white
      ;
    }
  }
}
</style>