<template>
  <div class="">
    <div
      class="relative mt-6 border-[3px] border-[rgb(30,41,59)] p-4 h-[100vh] flex justify-center items-center z-[10] overflow-hidden"
    >
      <button
        class="absolute top-[10px] right-[10px] bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        @click="resetPlayground"
      >
        Reset
      </button>
      <Card character="A" :icon="faHeart" color="red" :size="2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card.vue";

const resetPlayground = () => {};
</script>

<style scoped></style>
