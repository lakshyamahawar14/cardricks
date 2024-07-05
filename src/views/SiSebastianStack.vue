<template>
  <div>
    <div class="mb-4 p-4" :id="currentLinkId">
      <h1 class="text-[1.7rem] font-bold">{{ currentLink?.text }}</h1>
      <h2 class="text-[1.45rem] my-2">{{ currentLink?.description }}</h2>
      <p
        v-for="step in currentLink?.steps"
        :key="step"
        class="text-[1.2rem] p-2 my-2 border-l-[5px] border-[rgb(30,41,59)]"
      >
        {{ step }}
      </p>
      <div
        class="border-[1px] border-black p-4 h-[100vh] mt-4 flex justify-center items-center z-[10]"
      >
        <Card character="A" :icon="faHeart" color="red" :size="1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { setActiveLink } from "../store";

const route = useRoute();

const currentLinkId = ref(
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id ?? "1"
);

const basicTricksLinks = [
  {
    id: "1",
    text: "Arranging Cards",
    description:
      "A prediction in a sealed envelope matches a card chosen by your spectator.",
    steps: [
      "Before you begin, write down a prediction on a piece of paper (i.e. 10 of Hearts) and seal it in an envelope.",
      "Take your deck of cards and secretly place the 10 of Hearts on top.",
      "Hand the envelope to an audience member and instruct them not to open it.",
      "Fan the playing cards in your hand and show the audience they're all mixed up.",
    ],
  },
  {
    id: "2",
    text: "Process",
    description: "Description for the second trick.",
    steps: ["Step 1", "Step 2", "Step 3"],
  },
];

const currentLink = ref(
  basicTricksLinks.find((link) => link.id === currentLinkId.value)
);

if (currentLink.value) {
  setActiveLink("si-sebastian-stack", currentLink.value.id);
}

watch(
  () => route.params.id,
  (newId) => {
    currentLinkId.value = Array.isArray(newId) ? newId[0] : newId ?? "1";
    currentLink.value = basicTricksLinks.find(
      (link) => link.id === currentLinkId.value
    );
    if (currentLink.value) {
      setActiveLink("si-sebastian-stack", currentLink.value.id);
    }
  }
);
</script>

<style scoped></style>
