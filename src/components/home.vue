<template>
  <div id="side" :class="wrapper">
    <div :class="side">
      <div id="left-side" :class="leftSide" :style="leftSideStyle">
        <h2 :class="title2">
          <span v-if="menuIsOpen == false">I am </span>
          <span class="fancy italic font-bold text-yellow-500">
            Joshua Yullu
          </span>
        </h2>
      </div>
      <div
        id="right-side"
        class="side grid place-items-center overflow-hidden absolute bg-yellow-500"
      >
        <h2 :class="title">
          <div v-if="menuIsOpen == true" class="fancy italic font-bold">
            Full
          </div>
          <div v-if="menuIsOpen == true" class="fancy italic font-bold">
            Stack
          </div>
          <div v-if="menuIsOpen == true" class="fancy italic font-bold">
            Engineer
          </div>
          <span v-if="menuIsOpen == false">I am a</span>
          <span
            v-if="menuIsOpen == false"
            class="fancy italic font-bold text-blue-900"
          >
            Web Engineer
          </span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  },
  name: "Home",
  props: [
    "menuIsOpen",
    "title",
    "title2",
    "wrapper",
    "side",
    "leftSide",
    "leftSideStyle",
  ],
  data: () => {
    return {
      // title: "title text-black ",
      // title2: "title text-white ",
      // wrapper: "wrapper",
      // side: "side",
    };
  },
  methods: {
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]),
  },
};
</script>

<style>
.body:hover > #mouse-trailer {
  opacity: 1;
}
#mouse-trailer {
  z-index: 1000;
}

#nav-toggle {
  left: 50%;
  translate: -1.8rem 0;
}

.h2 {
  font-size: 5vw;
}
.wrapper {
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.98);
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
}
.side {
  height: 100vh;
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.98);
  z-index: 200;
}
.side .title {
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.98);
  font-family: Rubik, "sans-serif";
  font-size: 8vw;
  margin: 0px 15vw;
  width: 70vw;
}

#nav-toggle {
  z-index: 500;
}

#left-side {
  z-index: 200;
}
#right-side {
  z-index: 150;
}



.menu-title {
  transform: translate(55%, 50%);
  scale: 50%;
}
.menu-title2 {
  transform: translate(-19%, 150%);
  scale: 50%;
}

.z-1000 {
  z-index: 1000;
}

.half {
  width: 50%;
}
</style>
