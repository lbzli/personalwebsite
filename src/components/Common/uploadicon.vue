<template>
  <div class="icon">
    <img class="old" :src="icon" />
    <img ref="icon" class="new" />
    <form
      id="myform"
      ref="form"
      method="post"
      enctype="multipart/form-data"
      class="form"
      name="myform"
    >
      <input type="file" @change="getFile($event)" accept=".png, .jpeg, .jpg" :name="userName" />
    </form>
    <button @click="sub" class="sub">提交</button>
    <p>请提交你的新头像,提交成功后会返回首页</p>
  </div>
</template>

<script>
let formdata = new FormData();
import { baseUrl } from "../../config/constant";
export default {
  mounted() {
    this.icon = JSON.parse(localStorage.getItem("user")).icon;
    this.userName = JSON.parse(localStorage.getItem("user")).userName;
  },
  data() {
    return {
      icon: "",
      userName: ""
    };
  },
  methods: {
    getFile(e) {
      // console.log(e.target.files);
      let obj = e.target.files[0];
      // console.log(obj);
      let fr = new FileReader();
      let _this = this;
      fr.onload = function() {
        _this.$refs.icon.src = this.result;
      };
      fr.readAsDataURL(obj);

      formdata.append("myform", obj);
      // console.log(formdata);
    },
    async sub() {
      let token = window.localStorage.getItem("token");
      let headers = { Accept: "application/json" };
      if (token) {
        headers.Authorization = "Bearer " + token;
      }
      let result = await fetch("http://localhost:3000/avatar", {
        method: "POST",
        headers,
        body: formdata
      });
      result.json().then(value => {
        console.log(value);
        console.log(baseUrl + value.filename);
        this.$store.commit("upusericon", { icon: baseUrl + value.filename });
        localStorage.setItem("user", JSON.stringify(this.$store.state.user));
        location.assign('/')
      })
      
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 500px;
  height: 250px;
  position: relative;
  background-color: rgba(100, 100, 100, 0.3);
  border-top: 0px solid white;
  img {
    display: block;
    height: 100px;
    background-color: blueviolet;
    box-shadow: 1px 1px 10px transparent;
    top: 30px;
  }

  .old {
    position: absolute;
    left: 50px;
  }
  .new {
    position: absolute;
    right: 50px;
  }
  .form {
    margin-top: 150px;
    display: flex;
    justify-content: space-around;
  }
  .sub {
    width: 80px;
    height: 20px;
    position: absolute;
    right: 100px;
    top: 150px;
    font-weight: 600;
  }
  p{
    text-align: center;
    line-height: 30px;
    color: white;
    font-weight: 700;
    margin-top: 30px;
  }
}
</style>