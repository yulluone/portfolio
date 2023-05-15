<script>
import Nav from "./components/nav.vue";
import Home from "./components/home.vue";
import NavToggle from "./components/navToggle.vue";
import Work from "./components/work.vue";
import About from "./components/about.vue";
import Contact from "./components/contact.vue";
import Blog from "./components/blog.vue";

export default {
  components: {
    Nav,
    Home,
    Work,
    About,
    Contact,
    Blog,
    NavToggle,
  },
  data: () => {
    return {
      leftSide:
        "side grid place-items-center overflow-hidden absolute bg-blue-900 shadow-md shadow-black ",
      title: "title text-black ",
      title2: "title text-white ",
      nav: "fixed bottom-0 h-1/3 w-full left-0",
      navLinks: " flex scale-90 hover:scale-100 items-center justify-center",
      wrapper: "wrapper",
      side: "side",
      menuIsOpen: false,
      where: "Home",
      leftSideStyle: "",
      navItems: ["Work", "About", "Contact", "Blog"],
    };
  },
  methods: {
    handleOnMove(e) {
      const mouseTrailer = document.getElementById("mouse-trailer");
      const x = e.clientX - mouseTrailer.offsetWidth / 2,
        y = e.clientY - mouseTrailer.offsetHeight / 2;
      if (this.menuIsOpen == false) {
        const leftSideWidth = (e.clientX / window.innerWidth) * 100;
        this.leftSideStyle = `width: ${leftSideWidth}%`;
      }

      const trailerKeyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };
      mouseTrailer.animate(trailerKeyframes, {
        duration: 1000,
        fill: "forwards",
      });
    },
    handleToggleMenu() {
      console.log("menu toggle");
      this.menuIsOpen = !this.menuIsOpen;
      console.log("menu open is:", this.menuIsOpen);
      const navToggle = document.getElementById("nav-toggle");
      const navigation = document.getElementById("nav");
      const stage = document.getElementById("stage");

      if (this.menuIsOpen == true) {
        this.leftSideStyle = "width: 50%";
        this.leftSide =
          "side half grid place-items-center overflow-hidden absolute bg-blue-900 shadow-md shadow-black ";
        this.side = "side top-menu";
        this.wrapper = "wrapper ";
        this.title = "title text-blue-900 menu-title";
        this.title2 = "title text-yellow-300 menu-title2";
        this.nav = "fixed bottom-0 h-1/3 w-full left-0";
        this.navLinks = "flex scale-100 items-center justify-center";

        const stageKeyFrames = {
          transform: "translateY(-15vw)",
          opacity: "0.5",
        };
        const navKeyframes = {
          opacity: "1",
          transform: "translate(0, -12.5vw)",
          // transform: "scale(100%)",
          // backgroundColor: "rgb(29 78 216 / var(--tw-border-opacity))",
          // border: "8px solid rgb(234 179 8 / var(--tw-bg-opacity))",
        };

        const keyframes = {
          transform: "translate(0, 270%)",
          backgroundColor: "rgb(29 78 216 / var(--tw-border-opacity))",
          border: " 8px solid rgb(234 179 8 / var(--tw-bg-opacity))",
          opacity: "0.5",
          scale: "0.5",
        };

        stage.animate(stageKeyFrames, {
          duration: 500,
          fill: "forwards",
        });

        navigation.animate(navKeyframes, {
          duration: 500,
          delay: 100,
          fill: "forwards",
        });

        navToggle.animate(keyframes, {
          duration: 500,
          fill: "forwards",
        });

        //nav menu
      } else {
        this.leftSide =
          "side grid place-items-center overflow-hidden absolute bg-blue-900 shadow-md shadow-black  ";
        this.wrapper = "wrapper";
        this.side = "side";
        this.title = "title text-black";
        this.title2 = "title text-white";
        this.nav = "fixed  scale-0 bottom-0 h-1/3 w-full left-0";
        this.navLinks = "flex scale-90  items-center justify-center";
        const keyframes = {
          transform: "translate(0, -30%)",
          backgroundColor: "rgb(234 179 8 / var(--tw-bg-opacity))",
          border: " 8px solid rgb(29 78 216 / var(--tw-border-opacity)) ",
          opacity: "1",
          scale: "1",
        };
        const navKeyframes = {
          opacity: "0",
          transform: "translate(0, 80%)",
        };
        nav.animate(navKeyframes, {
          duration: 1,
          fill: "forwards",
        });

        navToggle.animate(keyframes, {
          duration: 200,

          fill: "forwards",
        });
      }
    },
    handleToggleEnter() {
      const stage = document.getElementById("stage");
      const navigation = document.getElementById("nav");
      if (this.menuIsOpen == false) {
        const stageKeyFrames = {
          transform: "translate(0, -40px)",
        };
        //trying to get the nav to move a bit for a preview
        // const navKeyframes = {
        //   opacity: "1",
        //   transform: "translate(0, -5.5vw)",
        // };

        // navigation.animate(navKeyframes, {
        //   duration: 500,
        //   delay: 200,
        //   fill: "forwards",
        // });

        stage.animate(stageKeyFrames, {
          duration: 500,
          fill: "forwards",
        });
      }
    },

    handleToggleLeave() {
      const stage = document.getElementById("stage");

      const stageKeyFrames = {
        transform: "translate(0, 0px)",
      };

      stage.animate(stageKeyFrames, {
        duration: 500,
        fill: "forwards",
      });
    },
    handleNavHover(navItem) {
      this.where = navItem;
    },
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
    @pointermove="(e) => handleOnMove(e)"
    id="app"
    class="body m-0 bg-gray-900 cursor-default"
  >
    <div
      id="mouse-trailer"
      class="text-xs font-bold h-5 w-5 bg-white rounded-3xl fixed left-0 top-0 dela pointer-events-none opacity-0 transition-opacity duration-500 ease-in-out"
    ></div>
    <div id="stage" class="stage">
      <Home
        v-if="where == 'Home'"
        :menuIsOpen="menuIsOpen"
        :side="side"
        :wrapper="wrapper"
        :title="title"
        :title2="title2"
        :leftSide="leftSide"
        :leftSideStyle="leftSideStyle"
      />

      <Work v-if="where == 'Work'" />
      <About v-if="where == 'About'" />
      <Contact v-if="where == 'Contact'" />
      <Blog v-if="where == 'Blog'" />
    </div>

    <!-- NOTE: move all events to child, use emits -->
    <div
      class="fixed bg-yellow-500 rounded-full w-14 h-14 left-1/2 bottom-12 border-8 border-blue-700 shadow-md shadow-black cursor-pointer hover:scale-125 active:scale-75 ease-in-out duration-300"
      id="nav-toggle"
      @click="handleToggleMenu"
      @mouseenter="handleToggleEnter"
      @mouseleave=""
    >
      <NavToggle />
    </div>

    <div id="nav" :class="nav">
      <Nav
        v-if="menuIsOpen"
        :menuIsOpen="menuIsOpen"
        :nav="nav"
        :navLinks="navLinks"
        :navItems="navItems"
        @navHover="(navItem) => handleNavHover(navItem)"
      />
    </div>
  </div>
</template>

<style>
.body {
  height: 100vh;
}
.body:hover > #mouse-trailer {
  opacity: 0.5;
}
#mouse-trailer {
  z-index: 1000;
}

#nav-toggle {
  left: 50%;
  translate: -1.8rem 0;
}

.z-1000 {
  z-index: 1000;
}

.nav {
  z-index: 100;
  opacity: 0;
}

.stage {
  z-index: 200;
}
</style>
