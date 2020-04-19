<template>
  <div class="body">
    <div class="nav">
      <ul>
        <li>HOME</li>
        <li>WORK</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.body {
  width: 100%;
  height: 100%;
  .nav {
    width: 11.25rem;
    height: 16.75rem;
    position: fixed;
    top: 50%;
    margin-top: -8.375rem;
    margin-left: 20rem;
    background: url("../../public/image/nav_bg.png") no-repeat top center;
    padding-top: 1rem;
    ul {
      text-align: center;
      padding-top: 1rem;
      li {
          padding: 0.7rem;
          margin-top: 0.3rem;
          font-size: 18px;
          font-weight: 700;
          color: #FF5E99;
          cursor: pointer;
      }
      li:hover {
          background: url("../../public/image/nav_active.png");
          color: white;
      }
    }
  }
  .nav::after {
        position: absolute;
        content: "";
        display: block;
        width: 11.25rem;
        height: 1rem;
        bottom: 0;
        margin-bottom: -1rem;
        background: url("../../public/image/nav_bg.png") no-repeat bottom center;
    }
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 100px;
    background: url("../../public/image/bg.gif") center;
  }
}
</style>