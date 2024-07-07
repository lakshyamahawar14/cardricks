<template>
  <div class="inline-flex text-[0.8rem]">
    <button
      class="hover:bg-slate-900 text-white bg-slate-700 font-bold py-2 px-4 rounded-l-[50px]"
      @click="spawnCards"
    >
      Spawn
    </button>
    <button
      class="hover:bg-slate-900 text-white bg-slate-700 font-bold py-2 px-4"
    >
      Shuffle
    </button>

    <button
      class="hover:bg-slate-900 text-white bg-slate-700 font-bold py-2 px-4"
      @click="resetPlayground"
    >
      Reset
    </button>
    <button
      class="hover:bg-slate-900 text-white bg-slate-700 font-bold py-2 px-4 rounded-r-[50px]"
      @click="togglePlayground"
    >
      <FontAwesomeIcon :icon="isFullscreen ? faCompress : faExpand" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import { defineEmits } from "vue";

const emit = defineEmits([
  "toggle-fullscreen",
  "clear-playground",
  "spawn-cards",
]);

const isFullscreen = false;

const togglePlayground = () => {
  emit("toggle-fullscreen");
};

const resetPlayground = () => {
  emit("clear-playground");
};

const spawnCards = () => {
  emit("spawn-cards");
};
</script>

<style scoped></style>
