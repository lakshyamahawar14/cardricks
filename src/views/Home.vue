<template>
  <div class="p-4" id="mainApp">
    <div class="flex justify-center flex-col items-start pb-4">
      <h1
        class="text-[2rem] font-bold pl-4 pb-4 border-l-[3px] border-b-[3px] rounded-bl-[10px] border-[rgb(30,41,59)] text-slate-800"
      >
        Welcome to Cardricks!
      </h1>
      <h2 class="text-[1.4rem] my-4 text-center">
        At Cardricks, you can learn card tricks and perform their right inside
        your browser.
      </h2>
      <p class="text-[1.2rem] text-justify my-4">
        Dive into the learning of some cards magic tricks performed by well
        known magicians all over the world. These tricks are compiled from all
        over the internet. There are playgrounds for each trick where you can
        perform the corresponding trick by following the mentioned process. The
        tricks menu is shown on the left side of the webpage. You can click on
        any trick name in order to expand or shrink it. You can click on any
        sublink inside a trick in order to jump to that.
      </p>
      <p class="text-[1.2rem] py-4">Happy Learning!</p>
    </div>
    <div class="flex justify-center flex-col items-center py-4">
      <p class="font-bold text-[1.7rem] my-2 text-slate-800">
        Learn The Tricks!
      </p>
      <button
        type="submit"
        class="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
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
import { onMounted } from "vue";

const router = useRouter();

const startTricks = () => {
  setActiveLink("Basic Tricks", "1");
  router.push({ path: "/basic-tricks/1" });
};

onMounted(() => {
  scrollToElement();
});

function scrollToElement() {
  const element = document.getElementById("mainApp");
  if (element) {
    element.scrollIntoView();
  }
}
</script>

<style scoped></style>
