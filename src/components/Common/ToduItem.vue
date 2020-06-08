<template>
  <div class="item">
    <input type="checkbox" v-model="status" :class="{del:status}" />
    <span @click="remove">×</span>
    <label :class="{del_label:status}">{{object.target}}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: this.object.status
    };
  },
  props: ["object"],
  methods: {
    remove() {
      console.log(this.object);
      this.$emit("delete", this.object);
    }
  },
  watch: {
    status(newVal) {
      console.log(newVal);
      this.object.status = newVal;
      this.$emit("upstatus", this.object);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  margin-bottom: 20px;
  background-color: white;
  line-height: 35px;
  font-size: 14px;
  color: #4d4d4d;
  text-indent: 3em;
  position: relative;
  border-radius: 5px;
  &:hover {
    span {
      display: block;
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
  > input {
    position: absolute;
    width: 1px;
    height: 1px;
    left: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  > span {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    right: 4px;
    margin: auto 0;
    text-align: center;
    text-indent: 0em;
    line-height: 20px;
    font-size: 20px;
    color: #cccccc;
    cursor: pointer;
    display: none;
    &:hover {
      color: #4d4d4d;
    }
  }
  > input::after {
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
  // > input:checked {
  //   &::after {
  //     content: "✓";
  //   }
  //   ~label {
  //       color:#D9D9D9;
  //       text-decoration: line-through;
  //   }
  // }
  .del {
    &::after {
      content: "✓";
    }
  }
  .del_label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
}
</style>