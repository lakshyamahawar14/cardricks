<template>
  <div id="trickdiv" class="flex flex-wrap justify-center items-start gap-4">
    <div class="flex flex-col lg:flex-row gap-4 w-full">
      <div class="p-4 flex-1" :id="currentLinkId">
        <h1 class="text-[1.7rem] font-bold text-slate-800">
          {{ currentLink?.text }}
        </h1>
        <h2 class="text-[1.25rem] my-4">{{ currentLink?.description }}</h2>
        <div class="space-y-4">
          <p
            v-for="(step, index) in currentLink?.steps"
            :key="step"
            class="text-[1.1rem] p-2 border-l-[3px] border-[rgb(30,41,59)] shadow-md"
          >
            {{ index + 1 }}. {{ step }}
          </p>
        </div>
      </div>

      <div
        class="relative flex flex-2 lg:flex-col p-4 justify-center items-center"
      >
        <div
          class="h-full flex justify-center items-start text-[1.7rem] font-bold"
        >
          <p>Advertisement</p>
        </div>
      </div>
    </div>

    <div
      class="flex justify-evenly items-center flex-col w-full lg:w-[calc(100vw-300px)] lg:h-[calc(100vh-50px)] p-4"
    >
      <h2 class="text-[1.25rem] font-bold mb-4">
        Follow the steps given above and learn this trick!
      </h2>
      <Playground />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { setActiveLink } from "../store";
import Playground from "../components/Playground.vue";

const route = useRoute();

const currentLinkId = ref(
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id ?? "1"
);

const siSebastianStackLinks = [
  {
    id: "1",
    text: "Arranging Cards",
    description: "Learn the steps to arrange cards in the Si Sebastian Stack.",
    steps: [
      "Arrange all the cards in numerical order by suit.",
      "Separate the deck into two piles by alternating suits.",
      "Shuffle each pile separately while keeping the order.",
      "Interlace the two piles to form the stack.",
    ],
  },
  {
    id: "2",
    text: "Process",
    description: "The process of performing the Si Sebastian Stack.",
    steps: [
      "Present the deck to the audience.",
      "Perform the false shuffle to maintain order.",
      "Execute the stack trick to amaze the audience.",
    ],
  },
];

const currentLink = ref(
  siSebastianStackLinks.find((link) => link.id === currentLinkId.value)
);

if (currentLink.value) {
  setActiveLink("si-sebastian-stack", currentLink.value.id);
}

watch(
  () => route.params.id,
  (newId) => {
    scrollToElement();
    currentLinkId.value = Array.isArray(newId) ? newId[0] : newId ?? "1";
    currentLink.value = siSebastianStackLinks.find(
      (link) => link.id === currentLinkId.value
    );
    if (currentLink.value) {
      setActiveLink("si-sebastian-stack", currentLink.value.id);
    }
  }
);

onMounted(() => {
  scrollToElement();
});

function scrollToElement() {
  const element = document.getElementById("trickdiv");
  if (element) {
    element.scrollIntoView();
  }
}
</script>
