<template>
  <div class="home">
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
import Item from "./postItem";
import Date from "../Common/Date";
import Todo from "../Common/Todo";
import { getPosts } from "../../service/getData";
export default {
  mounted() {
    this.getallPost();
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
      getPosts().then(result => {
        this.posts = result.posts;
        //console.log(result)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
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
  .home {
    width: 100%;
    padding: 0;
    // .content > ul {
    //   padding: 0 10px;
    //   li {
    //     padding-left: 10px;
    //     .info {
    //       width: 100%;
    //       ul {
    //         width: 100%;
    //       }
    //     }
    //     .image {
    //       display: none;
    //     }
    //   }
    // }
    .date {
      display: none;
    }
    .todo {
      display: none;
    }
  }
}
</style>