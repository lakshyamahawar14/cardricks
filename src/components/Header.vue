<template>
  <header
    class="fixed top-0 w-screen h-[60px] bg-slate-900 flex justify-between items-center z-[20] overflow-hidden px-10 border-b-[1px] border-slate-700"
  >
    <div class="flex justify-start items-center">
      <Logo />
      <p class="text-slate-200 text-[1rem] pl-2">v1.0</p>
    </div>
    <div class="flex justify-center items-center">
      <a
        href="https://github.com/lakshyamahawar14/cardricks"
        target="blank"
        class="flex justify-center items-center bg-slate-300 hover:bg-slate-400 font-bold p-[2px] rounded"
      >
        <FontAwesomeIcon
          :icon="['fab', 'github']"
          class="text-[1.5rem] text-slate-800"
        />
      </a>
      <button
        class="block md:hidden lg:hidden ml-2 items-center justify-center"
        @click="toggleMenu"
      >
        <FontAwesomeIcon
          :icon="store.isMenuOpen ? faXmark : faBars"
          class="text-[1.5rem] text-end text-slate-300 w-4"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { store, toggleMenuOpen } from "../store";

library.add(fab);

const toggleMenu = () => {
  toggleMenuOpen();
};
</script>

<style scoped></style>
