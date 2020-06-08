<template>
  <div :class="['todo-item', todo.status ? 'completed' : '']">
    <input type="checkbox" class="toggle" v-model="todo.status" @change="upstatus"/>
    <label>{{todo.target}}</label>
    <button class="destory" @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: this.todo.status
    };
  },
  props: ["todo"],
  methods: {
    deleteTodo() {
      this.$emit("del", this.todo);
    },
    upstatus(){
        console.log(this.todo.status)
        this.$emit("upstatus",this.todo)
    }
  },
  
};
</script>

<style lang="scss" scoped>
.todo-item {
  height: 35px;
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  font-size: 14px;
  line-height: 35px;
  text-indent: 3em;
  border-radius: 5px;
  &:hover {
    .destory:after {
      content: "×";
    }
  }
  label {
    width: 75%;
    text-align: left;
    display: inline-block;
    text-indent: 0em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
}
.toggle {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  &:after {
    // content url('../assets/images/round.svg')
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    color: #000;
    text-align: center;
    line-height: 20px;
    top: -11px;
    left: 5px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }
  &:checked:after {
    content: "✓";
  }
}
.destory {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 30px;
  height: 30px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>


