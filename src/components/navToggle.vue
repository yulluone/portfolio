<template>
  <button class="" @click="handleTogglMenu"></button>
</template>

<script>
export default {
  name: "NavToggle",
  methods: {
    handleTogglMenu() {
      console.log("menu toggled");
    },
  },
};
</script>
