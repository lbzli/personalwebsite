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
export default {
  mounted() {
    let flag;
    if (!this.$store.state.login) {
      flag = this.$store.state.flag;
      this.$store.commit("upStatus", {
        status: 404,
        message: "您还没有登录",
        flag: !flag
      });
      this.$router.push('/home')
    } else {
      this.getallPost();
    }
    
  },
  data() {
    return {
      posts: null
    };
  },
  components: {
    Date,
    Todo,
    Item
  },
  methods: {
    getallPost() {
      getUserPosts(localStorage.getItem('userId')).then(result => {
        this.posts = result.posts;
        //console.log(result)
      });
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