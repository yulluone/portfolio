<script>
export default {
  name: "Card",
  props: ["title", "description"],
};
</script>

<template>
  <div data-image="../assets/workImages/neon.jpg" class="" id="card">
    <h1 slot="header">{{ title }}</h1>
    <p slot="content">
      {{ description }}
    </p>
  </div>
  <!-- <div class="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-500">
    <a href="#">
      <img class="rounded-t-lg" src="../assets/workImages/neon.jpg" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200">
          {{ title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-400">
        {{ description }}
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        View Project
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div> -->
</template>

<style>
#card {
  background-image: image("../assets/workImages/neon.jpg");
}
</style>
