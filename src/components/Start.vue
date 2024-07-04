<template>
  <div class="flex w-full flex-col justify-center items-center">
    <p class="font-bold font-nova text-[2rem] my-2">Start The Tricks!</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="startTricks"
    >
      Start
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const startTricks = () => {
  router.push("/si-sebastian");
};
</script>

<style scoped></style>
