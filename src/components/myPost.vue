<template>
  <div class="myPost">
    <div class="content">
      <div>
        <Item
          v-for="post in posts"
          :key="post._id"
          :title="post.title"
          :content="post.content"
          :authorName="post.author.name"
          :createTime="post.created_at"
          :postid="post._id"
        ></Item>
      </div>
      <div class="tocreate" v-if="createPost" @click="toCreatePost">你还没有创建文章，点击创建</div>
    </div>
    <Date class="date"></Date>
    <Todo class="todo"></Todo>
  </div>
</template>

<script>
import Item from "./Home/postItem";
import Date from "./Common/Date";
import Todo from "./Common/Todo";
import { getUserPosts } from "../service/getData";
import Notice from "./Common/Notice";
export default {
  mounted() {
    // let flag;
    if (!this.$store.state.login) {
      // flag = this.$store.state.flag;
      // this.$store.commit("upStatus", {
      //   status: 404,
      //   message: "您还没有登录",
      //   flag: !flag
      // });
      const notice = this.$create(Notice, {
        message: "您还没有登录",
        duration: 2000
      });
      notice.show();
      this.$router.push("/home");
    } else {
      this.getallPost();
    }
  },
  data() {
    return {
      posts: null,
      createPost: false
    };
  },
  components: {
    Date,
    Todo,
    Item
  },
  methods: {
    getallPost() {
      getUserPosts(localStorage.getItem("userId")).then(result => {
        this.posts = result.posts;
        if (result.posts && result.posts.length === 0) {
          this.createPost = true;
        } else {
          this.createPost = false;
        }
        if (result.status === 401) {
          const noticeErr = this.$create(Notice, {
            message: result.message,
            duration: 2000
          });
          noticeErr.show();
          this.$store.commit("loginStatus", { login: false });
          this.$router.push("/home");
        }
        //console.log(result)
      });
    },
    toCreatePost() {
      this.$router.push("/post/create");
    }
  }
};
</script>

<style lang="scss" scoped>
.myPost {
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 274px;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    .tocreate {
      position: absolute;
      width: 250px;
      height: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 100px;
      background-color: white;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .date {
    position: absolute;
    right: 0;
    top: 0;
  }
  .todo {
    position: absolute;
    right: 0;
    top: 285px;
  }
}
@media screen and (max-width: 480px) {
  .myPost {
    width: 100%;
    padding: 0;
    .date {
      display: none;
    }
    .todo {
      display: none;
    }
  }
}
</style>