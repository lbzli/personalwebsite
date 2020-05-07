<template>
  <div class="date">
    <v-date-picker v-model="dates" mode="range" is-inline :attributes="attrs"/>
  </div>
</template>

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
Vue.use(VCalendar, { componentPrefix: "v" });
export default {
  data() {
    return {
      dates: [
        
      ],
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: new Date()
        }
      ]
    };
  },
  watch: {
    dates: function(newVal) {
      console.log(newVal);
    }
  }
};
</script>

