<template>
  <a class="min-w-min" :href="href">
    <div
      class="nav-card group scale-90 hover:scale-100 hover:opacity-30 transition-all duration-500 hover:bg-gray-900 hover:border-blue-500 border-4 border-gray-700 aspect-video flex justify-center items-center scale bg-gray-700 shadow-2xl rounded-lg"
    >
      <h2
        class="text-white group-hover:text-2xl group-hover: transition-all duration-300"
      >
        <slot />
      </h2>
    </div>
  </a>
</template>

<style>
.nav-card {
  width: max(20vw);
  min-width: 10vh;
}

.nav-card > h2 {
  font-size: 2vw;
}
</style>

<script>
export default {
  name: "NavItem",
  props: ["text", "href"],
  $slots: "",
};
</script>
