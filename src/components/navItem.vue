<template>
  <a class="min-w-min" :id="id" :href="href">
    <div
      @click="(e) => handleNavItemClick(e)"
      @mouseover="(e) => handleNavItemClick(e)"
      :id="id"
      class="nav-card group scale-90 hover:scale-100 text-white hover:opacity-30 transition-all duration-500 hover:bg-gray-900 hover:border-blue-500 border-4 border-gray-700 aspect-video flex justify-center items-center scale bg-gray-700 shadow-2xl rounded-lg"
    >
      <slot />
    </div>
  </a>
</template>

<style>
.nav-card {
  width: max(20vw);
  min-width: 10vh;
}

.nav-card {
  font-size: 2.5vw;
}
</style>

<script>
export default {
  name: "NavItem",
  props: ["text", "href", "id"],
  methods: {
    handleNavItemClick(e) {
      console.log(e.target.id);
    },
  },
};
</script>
