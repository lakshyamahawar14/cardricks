<template>
  <div class="p-4">
    <div class="">
      <h1 class="font-nova text-[1.7rem] font-bold">Welcome to Cardricks!</h1>
      <h2 class="text-[1.5rem] my-2">
        At Cardricks, you can learn card tricks and perform their right inside
        your browser.
      </h2>
      <p class="text-[1.2rem] p-2">
        Dive into the learning of some cards magic tricks performed by well
        known magicians all over the world. These tricks are compiled from all
        over the internet. There are playgrounds for each trick where you can
        perform the corresponding trick by following the mentioned process. The
        tricks menu is shown on the left side of the webpage. You can click on
        any trick name in order to expand or shrink it. You can click on any
        sublink inside a trick in order to jump to that.
      </p>
      <p class="text-[1.2rem] p-2">Happy Learning!</p>
    </div>
    <div class="flex justify-center flex-col items-center">
      <p class="font-bold font-nova text-[1.7rem] my-2">Start The Tricks!</p>
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
