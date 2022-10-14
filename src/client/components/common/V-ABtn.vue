<template>
  <a :href="route" :class="['btn', className]">{{ text }}</a>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>