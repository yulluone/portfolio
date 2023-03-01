<template>
  <nav menuisOpen :class="nav">
    <div id="nav-links" :class="navLinks">
      <a class="nav-link" href="#">
        <div
          class="nav-card aspect-video flex justify-center items-center scale bg-gray-700 shadow-2xl rounded-lg"
        >
          <h2 class="text-white">About</h2>
        </div>
      </a>
      <a class="nav-link" href="#">
        <div
          class="nav-card aspect-video flex justify-center items-center bg-gray-700 shadow-2xl rounded-lg"
        >
          <h2 class="text-white">Work</h2>
        </div>
      </a>
      <a class="nav-link" href="#">
        <div
          class="nav-card aspect-video flex justify-center items-center bg-gray-700 shadow-2xl scale rounded-lg"
        >
          <h2 class="text-white">Contact</h2>
        </div>
      </a>
      <a class="nav-link" href="#">
        <div
          class="nav-card aspect-video flex justify-center items-center bg-gray-700 shadow-2xl rounded-lg"
        >
          <h2 class="text-white">Hire Me</h2>
        </div>
      </a>
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
export default {
  name: "Nav",
  props: ["menuIsOpen", "nav", "navLinks"],
};
</script>
