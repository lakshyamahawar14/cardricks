<template>
  <div class="flex justify-center items-center">
    <router-link to="/" class="flex items-center" @click="resetActiveLink">
      <h1 class="text-white font-bold italic text-[1.1rem] pl-4 font-nova">
        Cardricks
      </h1>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { setActiveLink } from "../store";

const resetActiveLink = () => {
  setActiveLink("", "");
};
</script>

<style scoped></style>
