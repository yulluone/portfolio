<template>
  <nav menuisOpen :class="nav">
    <div id="nav-links" :class="navLinks">
      <NavItem
        v-for="navItem in navItems"
        :id="navItem"
        @itemHover="(navItem) => $emit('navHover', navItem)"
        @itemClick="(navItem) => $emit('navClick', navItem)"
        @mouseleave=""
        >{{ navItem }}</NavItem
      >
    </div>
  </nav>
</template>

<style>
nav {
  font-family: Rubik, "sans-serif";
  font-size: 2vw;
}
.nav-card {
  width: max(20vw);
}
#nav-links {
  gap: clamp(1rem, 3vw, 2rem);
  margin-top: clamp(4rem, 2vw, 3rem);
  padding: 0 clamp(1rem, 2vw, 2rem);
  transition: transform 1000ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
}
</style>
<script>
import NavItem from "./navItem.vue";

export default {
  components: {
    NavItem,
  },
  data() {
    return {
      //
    };
  },
  name: "Nav",
  props: ["menuIsOpen", "nav", "navLinks", "navItems", "where"],
  emits: ["navHover", "update:where", "navClick"],
  methods: {
    handleItemHover(id) {
      console.log(id);
    },
  },
};
</script>
