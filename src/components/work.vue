<script>
import Card from "./card.vue";

export default {
  name: "Work",
  props: ["projects"],
  components: {
    Card,
  },
};
</script>

<template>
  <div id="work" class="h-screen">
    <h1 class="text-white text-3xl">My Projects</h1>
    <div
      class="w-full h-full md:h-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4"
    >
      <Card
        v-for="project in projects"
        :title="project.name"
        :description="project.description"
      />
    </div>
  </div>
</template>

<style>
#work {
  height: 100vh;
  margin: 0;
}
</style>
