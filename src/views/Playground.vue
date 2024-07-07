<template>
  <div
    class="relative bg-white shadow-inner border-[2px] rounded-xl h-full w-full flex justify-center items-center z-[10] overflow-hidden"
  >
    <div class="absolute top-2 right-2 flex space-x-2">
      <button
        class="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        @click="togglePlayground"
      >
        <FontAwesomeIcon :icon="isFullscreen ? faCompress : faExpand" />
      </button>
      <button
        class="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        @click="resetPlayground"
      >
        Reset
      </button>
    </div>

    <Card character="A" :icon="faHeart" color="red" :size="1.5" />
  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHeart,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";

const isFullscreen = ref(false);

const resetPlayground = () => {};

const togglePlayground = () => {
  const el = document.getElementById("mainApp");
  if (el) {
    el.classList.toggle("fullscreen");
    isFullscreen.value = !isFullscreen.value;
  }
};
</script>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
