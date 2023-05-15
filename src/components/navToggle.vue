<template>
  <button class="" @click="$emit('menuToggle')"></button>
</template>

<script>
export default {
  name: "NavToggle",
  emits: ["menuToggle"],
  methods: {
    handleToggleMenu() {
      //
    },
  },
};
</script>
