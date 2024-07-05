<template>
  <header
    class="fixed top-0 w-full h-[50px] bg-slate-800 flex justify-between items-center z-[20] overflow-hidden px-9"
  >
    <div class="flex justify-start items-center">
      <Logo />
      <p class="text-slate-200 text-[1rem] pl-2">v1.0</p>
    </div>
    <button
      type="submit"
      class="flex justify-center items-center bg-gray-300 hover:bg-gray-400 text-slate-800 font-bold p-[2px] rounded"
    >
      <FontAwesomeIcon :icon="['fab', 'github']" class="text-[1.5rem]" />
    </button>
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
