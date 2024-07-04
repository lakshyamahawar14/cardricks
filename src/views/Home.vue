<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="flex justify-center flex-col items-center">
      <p class="font-bold font-nova text-[2rem] my-2">Start The Tricks!</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="startTricks"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { setActiveLink } from "../store";

const router = useRouter();

const startTricks = () => {
  setActiveLink("Basic Tricks", "Arranging Cards");
  router.push("/basic-tricks");
};
</script>

<style scoped></style>
