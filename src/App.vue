<template>
  <div id="app2">
    <Header class="nav"></Header>
    <transition name="fade">
      <router-view class="child_view"></router-view>
    </transition>
    <div :class="{messageBox:true}">
      {{this.$store.state.message}}
      <!-- {{this.$store.state.status}}
      {{boxHidden}}-->
    </div>
    <div class="web_info">
      <a href="http://www.beian.miit.gov.cn/" target="blank" class="beianhao">桂ICP备20004272号-1</a>
      <div style="width:300px; ">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45098102000411"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
        >
          
          <img src="./image/beiantubiao.png" style="float:left;" />
          <p
            style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
          >桂公网安备 45098102000411号</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import login from './components/login'
// import home from './components/home'
// import home2 from './components/home2'

import Header from "./components/Common/Header";
export default {
  name: "App2",
  mounted() {
    this.$store.commit("loginStatus", {
      login: localStorage.getItem("loginStatus") === "true" ? true : false
    });
    // this.$store.commit('getUserInfo', JSON.parse(localStorage.getItem('user')))
    
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      this.$store.commit('getUserInfo', user)
    }
  },
  computed: {
    boxHidden: function() {
      return this.$store.state.flag;
    }
  },
  components: {
    // login
    // home,
    // home2
    Header
  },
  watch: {
    boxHidden: function(newVal) {
      let alterBox = document.querySelector(".messageBox");
      alterBox.style.opacity = 1;
      setTimeout(() => {
        alterBox.style.opacity = 0;
      }, 2000);
      console.log(newVal);
    }
  }
};
</script>
<style lang="scss" >
@import "../public/style/common";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

body {
  background-color: #330033;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: scroll;
  background-size: cover;
  height: 100%;
}
#app2 {
  height: 100%;
  position: relative; 
  .nav {
    position: relative;
    z-index: 9999;
  }
  .child_view {
    position: absolute;
    // width: 100%;
    // height: 100%;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: all 1s ease;
    margin-top: 100px;
  }
  .messageBox {
    max-width: 300px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    background-color: pink;
    position: fixed;
    top: 75px;
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    transition: opacity 1s ease;
  }
  .web_info {
    width: 100%;
    height: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    .beianhao {
      position: relative;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 1024px;
      height: 25px;
      line-height: 25px;
      margin: auto auto;
      color: #939393;
    }
  }
  @media screen and (max-width: 480px) {
    .web_info {
      .beianhao {
        width: 100%;
      }
    }
  }
}
</style>
