<template>
  <div class="todo">
    <input type="text" name id placeholder="今天的任务" v-model="inputtext" @keydown.enter="add" />
    <transition-group name="list-complete" tag="div">
      <!-- <item v-for="(value, index) in content" :key="index" :object="value" @delete="remove" @upstatus="upstatus" class="list-complete-item"></item> -->
      <item2
        :todo="todo"
        v-for="(todo, index) in content"
        :key="index"
        @del="remove"
        @upstatus="upstatus"
        class="list-complete-item"
      ></item2>
    </transition-group>
  </div>
</template>

<script>
// import item from "./ToduItem";
import item2 from "./todoitem";
export default {
  data() {
    return {
      inputtext: "",
      content: []
    };
  },
  components: {
    //item,
    item2
  },
  mounted() {
    this.content = localStorage.getItem("mydata")
      ? JSON.parse(localStorage.getItem("mydata"))
      : [];
  },
  methods: {
    add() {
      // let data = localStorage.getItem('mydata')
      this.content.push({ target: this.inputtext, status: false });
      localStorage.setItem("mydata", JSON.stringify(this.content));
    },
    remove(val) {
      // console.log(val)
      // console.log(Array.isArray(this.content))
      // console.log(this.content.indexOf(val))
      this.content.splice(this.content.indexOf(val), 1);
      localStorage.setItem("mydata", JSON.stringify(this.content));
    },
    upstatus(val) {
      this.content[this.content.indexOf(val)].status = val.status;
      localStorage.setItem("mydata", JSON.stringify(this.content));
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  width: 258px;
  > input {
    display: block;
    box-sizing: border-box;
    padding-left: 15px;
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
.list-complete-item {
  transition: all 1s ease;
  width: 100%;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  //   transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>