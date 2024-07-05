<template>
  <div class="flex justify-center items-center">
    <router-link to="/" class="flex items-center" @click="resetActiveLink">
      <h1 class="text-white font-bold text-[1.1rem]">Cardricks</h1>
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
