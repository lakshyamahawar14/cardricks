<template>
  <div class="inline-flex text-[0.8rem]">
    <button
      class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 text-[0.8rem] rounded-l-[50px]"
      @click="spawnCards"
    >
      Spawn
    </button>
    <button
      class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 text-[0.8rem]"
    >
      Shuffle
    </button>

    <button
      class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 text-[0.8rem]"
      @click="resetPlayground"
    >
      Reset
    </button>
    <button
      class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 text-[0.8rem] rounded-r-[50px]"
      @click="togglePlayground"
    >
      <FontAwesomeIcon :icon="isFullscreen ? faCompress : faExpand" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits([
  "toggle-fullscreen",
  "clear-playground",
  "spawn-cards",
]);

defineProps({
  isFullscreen: {
    type: Boolean,
    required: true,
  },
});

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
