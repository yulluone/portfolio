<script>
import Nav from "./components/nav.vue";

export default {
  components: {
    Nav,
  },
  data: () => {
    return {
      title: "title text-black ",
      title2: "title text-white ",
      nav: "h-1/2 w-full left-0 bottom-0",
      navLinks: " flex flex-row scale-90 items-center justify-center",
      wrapper: "wrapper",
      side: "side",
      menuIsOpen: false,
    };
  },

  methods: {
    handleOnMove(e) {
      const left = document.getElementById("left-side");
      const mouseTrailer = document.getElementById("mouse-trailer");
      const x = e.clientX - mouseTrailer.offsetWidth / 2,
        y = e.clientY - mouseTrailer.offsetHeight / 2;
      const trailerKeyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };
      mouseTrailer.animate(trailerKeyframes, {
        duration: 1000,
        fill: "forwards",
      });

      if (this.menuIsOpen == true) {
        left.style.width = "50%";
      } else {
        const navToggle = document.getElementById("nav-toggle");
        const p = (e.clientX / window.innerWidth) * 100;

        left.style.width = `${p}%`;
      }
    },

    //handle toggleMenu button click
    handleToggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
      console.log("menu open is:", this.menuIsOpen);
      const side = document.getElementById("side");

      const navToggle = document.getElementById("nav-toggle");

      if (this.menuIsOpen == true) {
        this.side = "side top-menu";
        this.wrapper = "wrapper ";
        this.title = "title  text-black menu-title";
        this.title2 = "title text-white menu-title2";
        this.nav = "";
        this.navLinks = " flex flex-row items-center justify-center";

        const keyframes = {
          transform: "translate(0, 130%)",
          backgroundColor: "rgb(29 78 216 / var(--tw-border-opacity))",
          border: " 8px solid rgb(234 179 8 / var(--tw-bg-opacity))",
          opacity: "0.5",
        };
        navToggle.animate(keyframes, {
          duration: 500,
          fill: "forwards",
        });

        //nav menu
      } else {
        this.wrapper = "wrapper";
        this.side = "side";
        this.title = "title text-black";
        this.title2 = "title text-white";
        this.nav = "h-1/2 w-full ";
        this.navLinks = " flex flex-row scale-90 items-center justify-center";
        const keyframes = {
          transform: "translate(0, -30%)",
          backgroundColor: "rgb(234 179 8 / var(--tw-bg-opacity))",
          border: " 8px solid rgb(29 78 216 / var(--tw-border-opacity)) ",
          opacity: "1",
        };

        navToggle.animate(keyframes, {
          duration: 200,
          delay: 300,
          fill: "forwards",
        });
      }
    },
    // document.ontouchmove = (e) => handleOnMove(e.touches[0]),
  },

  // computed: {
  //   leftTitleClass: () => {
  //     return "title text-black";
  //   },
  // },
};
</script>

<template>
  <div
    id="app"
    class="body m-0 bg-gray-900 cursor-default"
    @pointermove="(e) => handleOnMove(e)"
    @touchmove="(e) => handleOnMove(e.touches[0])"
  >
    <div
      id="mouse-trailer"
      class="h-5 w-5 bg-white rounded-3xl fixed left-0 top-0 dela pointer-events-none opacity-0 transition-opacity duration-500 ease-in-out"
    ></div>
    <button
      id="nav-toggle"
      class="z-50 fixed bg-yellow-500 rounded-full w-14 h-14 left-1/2 bottom-12 border-8 border-blue-700 shadow-md shadow-black cursor-pointer hover:scale-125 active:scale-75 ease-in-out duration-300"
      @click="handleToggleMenu"
    ></button>

    <div id="side" :class="wrapper">
      <div :class="side">
        <div
          id="left-side"
          class="side grid place-items-center overflow-hidden absolute bg-blue-500 z-40"
        >
          <h2 :class="title2">
            <span v-if="menuIsOpen == false">I am</span>
            <span class="fancy italic font-bold"> Josh Yullu </span>
          </h2>
        </div>
        <div
          id="right-side"
          class="side grid place-items-center overflow-hidden absolute bg-yellow-500 z-20"
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
            <span v-if="menuIsOpen == false" class="fancy italic font-bold">
              Developer
            </span>
          </h2>
        </div>
      </div>
      <Nav
        class="fixed bottom-0 h-1/2 w-full left-0"
        :menuIsOpen="menuIsOpen"
        :nav="nav"
        :navLinks="navLinks"
      />
    </div>
  </div>
</template>

<style>
.body {
  height: 100vh;
}
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

.top-menu {
  transform: translateY(-50%);
  opacity: 0.5;
}

.menu-title {
  transform: translate(52%, 50%);
  scale: 50%;
}
.menu-title2 {
  transform: translate(-11%, 150%);
  scale: 50%;
}

.z-1000 {
  z-index: 1000;
}
</style>
