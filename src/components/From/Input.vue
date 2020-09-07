<template>
  <div>
    <input :value="value" @input="onInput($event)" v-bind="$attrs" @focus="getIcon"/>
  </div>
</template>

<script>
export default {
    inheritAttrs:false,
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    getIcon() {
      this.$emit("focus");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  input {
    width: 100%;
    height: 45px;
    background-color: #f4fafb;
    text-indent: 2em;
    outline: none;
  }
}
</style>