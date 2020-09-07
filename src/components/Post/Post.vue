<template>
  <div class="post">
    <div class="content">
      <h3>{{this.post.title}}</h3>
      <div class="content_main" v-html="this.post.content"></div>
      <span @click="toedit()">编辑</span>
      <span @click="tocreate()">发帖</span>
      <span @click="todelete()">删除</span>
      <!-- <span @click="tocomment()">发表评论</span> -->
    </div>
    <div v-for="(comment, index) in comments" :key="index">
      <div class="comment_item">
        <span class="name">{{comment.author.name}}</span>
        <span class="time">{{comment.created_at}}</span>
        <div class="comment_content" v-html="comment.content"></div>
      </div>
    </div>
    <Date class="date"></Date>
    <Todo class="todo"></Todo>
    <div class="warring">
      是否删除该文章？
      <span @click="delete_y">是</span>
      <span @click="delete_n">否</span>
    </div>
    <div class="commentbox">
      <textarea cols="30" rows="10" placeholder="请输入评论内容" v-model="commentContent"></textarea>
      <span @click="comment">提交</span>
    </div>
  </div>
</template>

<script>
import {
  getPostById,
  deletePostById,
  createComment
} from "../../service/getData";
import Date from "../Common/Date";
import Todo from "../Common/Todo";
import Notice from "../Common/Notice";
export default {
  mounted() {
    this.warrDom = document.querySelector(".warring");
    this.commentDom = document.querySelector(".commentbox");
    this.getData();
  },
  data() {
    return {
      post: {},
      comments: {},
      warrDom: null,
      commentDom: null,
      commentContent: ""
    };
  },
  methods: {
    getData() {
      //console.log(this.$route.params.id);
      getPostById(this.$route.params.id).then(result => {
        this.post = result.post;
        this.comments = result.comments;
        //console.log(result);
      });
    },
    toedit() {
      if (!this.$store.state.login) {
        let notice = this.$create(Notice, {
          message: "您还未登录，无法编辑",
          duration: 2000
        });
        notice.show();
      } else {
        this.$router.push("/post/" + this.$route.params.id + "/edit");
      }
    },
    tocreate() {
      if (!this.$store.state.login) {
        let notice = this.$create(Notice, {
          message: "您还未登录，无法新建文章",
          duration: 2000
        });
        notice.show();
      } else {
        this.$router.push("/post/create");
      }
    },
    todelete() {
      this.warrDom.style.display = "block";
    },
    tocomment() {
      this.commentDom.style.display = "block";
    },
    comment() {
      if (!this.$store.state.login) {
        let notice = this.$create(Notice, {
          message: "您还未登录，无法删除文章",
          duration: 2000
        });
        notice.show();
      } else {
        createComment(this.$route.params.id, this.commentContent).then(
          result => {
            let notice = this.$create(Notice, {
              message: result.message,
              duration: 2000
            });
            notice.show();
            //console.log(result)
            this.getData();
          }
        );
      }

      this.commentDom.style.display = "none";
    },
    delete_y() {
      
      if (!this.$store.state.login) {
        let notice = this.$create(Notice, {
          message: '您还未登录，无法删除',
          duration: 2000
        })
        notice.show()
      } else {
        deletePostById(this.$route.params.id).then(result => {
          let notice = this.$create(Notice, {
          message: result.message,
          duration: 2000
        })
        notice.show()
          this.$router.push("/home");
          // console.log(result);
        });
      }

      this.warrDom.style.display = "none";
    },
    delete_n() {
      this.warrDom.style.display = "none";
    }
  },
  components: {
    Date,
    Todo
  }
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 274px;
  position: relative;
  .content {
    width: 100%;
    min-height: 400px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    &:hover {
      > span {
        opacity: 1;
      }
    }
    > span {
      position: absolute;
      width: 80px;
      height: 20px;
      background-color: #c7c7c7;
      text-align: center;
      line-height: 20px;
      border-radius: 2px;
      right: 5px;
      opacity: 0;
      transition: opacity 0.5s ease;
      cursor: pointer;
      &:nth-of-type(1) {
        top: 10px;
      }
      &:nth-of-type(2) {
        top: 40px;
      }
      &:nth-of-type(3) {
        top: 70px;
      }
      &:nth-of-type(4) {
        top: 100px;
      }
    }

    h3 {
      text-align: center;
      line-height: 40px;
    }
    .content_main {
      text-indent: 2em;
    }
  }
  .comment_item {
    width: 100%;
    min-height: 50px;
    background-color: #efefef;
    border-radius: 5px;
    margin-bottom: 20px;
    span {
      margin-right: 30px;
    }
    .comment_content {
      text-indent: 2em;
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
  .warring {
    transition: display 0.5s ease;
    border-radius: 5px;
    width: 200px;
    height: 75px;
    position: absolute;
    background-color: rgb(29, 25, 26);
    color: white;
    left: 275px;
    top: 50px;
    text-align: center;
    display: none;
    span {
      position: absolute;
      width: 45px;
      height: 20px;
      background-color: #ffffff;
      text-align: center;
      line-height: 20px;
      color: #000;
      bottom: 10px;
      &:nth-of-type(1) {
        left: 10px;
      }
      &:nth-of-type(2) {
        right: 10px;
      }
    }
  }
  .commentbox {
    transition: display 0.5s ease;
    border-radius: 5px;
    width: 250px;
    height: 230px;
    position: absolute;
    background-color: #330033;
    color: white;
    left: 275px;
    top: 50px;
    text-align: center;
    display: none;
    textarea {
      margin-top: 20px;
      outline: none;
    }
    span {
      position: absolute;
      width: 80px;
      height: 20px;
      background-color: #ffffff;
      text-align: center;
      line-height: 20px;
      color: #000;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 480px) {
  .post {
    width: 100%;
    padding: 0;
    .date {
      display: none;
    }
    .todo {
      display: none;
    }
    .warring {
      right: 0;
      left: 0;
      top: 50px;
      margin: 0 auto;
    }
  }
}
</style>