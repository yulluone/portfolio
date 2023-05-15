<script>
import Card from "./card.vue";

export default {
  name: "Work",
  components: {
    Card,
  },
};
</script>

<template>
  <div
    id="work"
    class="grid justify-center overflow-hidden absolute grid-flow-col grid-rows-3"
  >
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<style>
#work {
  height: 100vh;
  margin: 0;
}
</style>
