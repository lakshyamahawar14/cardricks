<template>
  <div
    class="fixed h-[50px] top-[60px] left-0 flex items-center justify-center w-full px-6 text-[0.9rem] border-b-[1px] border-slate-700 backdrop-blur-lg cursor-text"
  >
    <button
      class="block md:hidden lg:hidden pr-4 items-center justify-center"
      @click="toggleMenu"
    >
      <FontAwesomeIcon
        :icon="store.isMenuOpen ? faXmark : faBars"
        class="text-[1rem] text-end text-slate-300 w-4"
      />
    </button>
    <p
      class="pr-4 min-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {{ store.activeChapterName }}
    </p>
    <p class="pr-4">></p>
    <p
      class="pr-4 text-slate-200 overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {{ store.activeLinkName }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { store, toggleMenuOpen } from "../store";

const toggleMenu = () => {
  toggleMenuOpen();
};
</script>

<style scoped></style>
