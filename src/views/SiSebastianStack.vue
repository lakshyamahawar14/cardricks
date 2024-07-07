<template>
  <div class="p-4" id="mainApp">
    <div class="flex justify-center flex-col items-start">
      <h1 class="text-[1.7rem] font-bold text-slate-800" :id="currentLinkId">
        {{ currentLink?.text }}
      </h1>
      <h2 class="text-[1.25rem] my-4">{{ currentLink?.description }}</h2>
      <div class="">
        <p
          v-for="(step, index) in currentLink?.steps"
          :key="step"
          class="text-[1.1rem] p-2 border-l-[3px] border-[rgb(30,41,59)] my-2 shadow-md"
        >
          {{ index + 1 }}. {{ step }}
        </p>
      </div>
    </div>

    <div class="flex justify-center flex-col items-start py-4">
      <h2 class="text-[1.5rem] font-bold py-4">
        Follow the steps given above and learn this trick!
      </h2>
      <button
        type="submit"
        class="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        @click="goToPlayground"
      >
        Go To Playground
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { setActiveLink } from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

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

const goToPlayground = () => {
  router.push({ path: "/playground" });
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
