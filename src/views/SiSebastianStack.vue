<template>
  <div class="p-10 flex flex-col justify-between">
    <div class="flex justify-center items-start flex-col lg:flex-row gap-4">
      <div class="flex flex-col w-full">
        <div class="flex justify-start flex-col items-start w-full">
          <h2 class="font-medium text-sky-400">
            {{ store.activeChapterName }}
          </h2>
          <h1
            class="text-[1.7rem] py-4 font-extrabold text-slate-200"
            :id="currentLinkId"
          >
            {{ currentLink?.text }}
          </h1>
          <h2 class="text-[1.2rem]">{{ currentLink?.description }}</h2>
        </div>
        <div class="w-full py-8">
          <p
            v-for="(step, index) in currentLink?.steps"
            :key="step"
            class="text-justify text-[1rem] p-2 border-l-[3px] border-slate-600 shadow-slate-800 hover:text-sky-400 hover:border-sky-400 cursor-pointer"
          >
            {{ index + 1 }}. {{ step }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-center flex-col items-start">
      <h2 class="text-[1.7rem] font-bold py-4 text-slate-200">
        Practice in Playground
      </h2>
      <button
        type="submit"
        class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 rounded text-[0.8rem]"
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
import { store } from "../store";

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
