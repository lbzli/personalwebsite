<template>
  <div class="home">
    <div class="content">
      <ul>
        <li>
          <h5>
            <a href="#">我的个人博客，是我的小家，也是我的时光机</a>
          </h5>

          <div class="info">
            <ul>
              <li>[宝宝博客]</li>
              <li>2018-11-13</li>
              <li>阅读（15）</li>
              <li>喜欢（2）</li>
            </ul>
          </div>
          <p>我叫戴亦洋，小名叫兜兜，这是我的个人博客，也是我的小家，他也是一个时光机。爸爸妈妈在上面记录我成长的点滴，人生虽百味，但我的个人博客记录的都是一些欢乐时光，虽然这其中参杂了不少爸爸妈妈的焦虑，伴随我成长的同时，我知道，他们也在成长。就让这个博客做个见证吧，我们要做快乐的一家人。</p>
          <div class="image">
            <img
              src="http://demo.qfpffmp.cn/cssthemes6/3rdw_4_devblog/assets/images/blog/blog-post-thumb-1.jpg"
              alt
            />
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Date class="date"></Date>
    <Todo class="todo"></Todo>
  </div>
</template>

<script>
import Date from '../Common/Date'
import Todo from '../Common/Todo'
export default {
  data() {
    return {};
  },
  components: {
      Date,
      Todo
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 274px;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
    > ul > li {
      width: 100%;
      min-height: 100px;
      box-sizing: border-box;
      padding: 10px;
      padding-left: 18%;
      background-color: white;
      margin-bottom: 20px;
      border-radius: 10px;
      position: relative;
      a {
        color: #292929;
        font-size: 20px;
      }
      .info ul {
        padding: 0;
        margin: 10px 0;
        width: 50%;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 12px;
          color: #8f8f8f;
        }
      }
      p {
        margin: 10px 0;
        font-size: 12px;
      }
      .image {
        width: 15%;
        position: absolute;
        top: 15px;
        left: 15px;
        img {
          width: 100%;
          margin: auto 0;
        }
      }
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
  .home {
    width: 100%;
    padding: 0;
    .content > ul {
        padding: 0 10px;
      li {
        padding-left: 10px;
        .info {
          width: 100%;
          ul {
            width: 100%;
          }
        }
        .image {
          display: none;
        }
      }
    }
    .date {
      display: none;
    }
    .todo {
      display: none;
    }
  }
}
</style>