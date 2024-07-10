<template>
  <header
    class="fixed top-0 w-full h-[60px] bg-transparent flex justify-between items-center z-[25] lg:px-16 px-6 border-b-[1px] border-slate-700 backdrop-blur-lg"
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
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
</script>

<style scoped></style>
