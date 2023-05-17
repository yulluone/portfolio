<script>
export default {
  name: "NavItem",
  props: ["text", "href", "id"],
  emits: ["itemHover", "itemClick"],
  methods: {
    handleNavItemClick(e) {
      console.log("nav Item clicked", e.target.id);
      this.$emit("itemClick", e.target.id);
    },
    handleNavItemHover(e) {
      this.$emit("itemHover", e.target.id);
    },
  },
};
</script>

<template>
  <a class="min-w-min" :id="id" :href="href">
    <div
      @click=""
      @mouseover=""
      :id="id"
      class="nav-card scale-90 hover:scale-100 text-white hover:opacity-30 transition-all duration-500 hover:bg-gray-900 hover:border-blue-500 border-4 border-gray-700 aspect-video flex justify-center items-center scale shadow-2xl rounded-lg"
    >
      <slot />
    </div>
  </a>
</template>

<style>
.nav-card {
  width: max(20vw);
  min-width: 10vh;
  --gradient: linear-gradient(45deg, rgb(234 179 8), rgb(29 78 216));
  background-image: var(--linear-gradient);
}

.nav-card {
  font-size: 2.5vw;
}
</style>
