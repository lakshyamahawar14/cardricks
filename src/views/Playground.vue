<template>
  <div
    class="flex h-full justify-start flex-col items-center bg-slate-900 overflow-hidden"
  >
    <div class="absolute top-[calc(60px+1rem)] z-[15]">
      <PlaygroundTools
        :isFullscreen="isFullscreen"
        @toggle-fullscreen="togglePlayground"
        @clear-playground="clearPlayground"
        @spawn-cards="initializeSuits"
      />
    </div>

    <div
      class="relative h-full w-full flex p-2 pt-[calc(60px+0.5rem)] bg-slate-900 overflow-auto"
    >
      <div
        v-for="(suit, suitIndex) in suits"
        :key="suitIndex"
        class="flex items-end justify-center px-4"
      >
        <Card
          v-for="(card, cardIndex) in suit.cards"
          :key="cardIndex"
          :character="card.character"
          :image="card.imageName"
          :color="card.color"
          :size="card.size"
          :style="{
            marginLeft: cardIndex > 0 ? '-60px' : '0',
            position: 'relative',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import PlaygroundTools from "../components/PlaygroundTools.vue";
import { getLinks } from "../store";
import { useRoute } from "vue-router";

interface CardData {
  character: string;
  imageName: string;
  color: string;
  size: number;
}

interface Suit {
  name: string;
  color: string;
  cards: CardData[];
}

const suitsData: Omit<Suit, "cards">[] = [
  { name: "club", color: "black" },
  { name: "heart", color: "red" },
  { name: "spade", color: "black" },
  { name: "diamond", color: "red" },
];

const characters: string[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const suits = ref<Suit[]>([]);

const initializeSuits = () => {
  suits.value = suitsData.map((suit) => {
    return {
      ...suit,
      cards: characters.map((character) => ({
        character,
        imageName: `${suit.name}`,
        color: suit.color,
        size: 1,
      })),
    };
  });
};

const isFullscreen = ref(false);

const clearPlayground = () => {
  suits.value = [];
};

const togglePlayground = () => {
  const el = document.getElementById("mainApp");
  if (el) {
    el.classList.toggle("fullscreen");
    isFullscreen.value = !isFullscreen.value;
  }
};

const route = useRoute();

const currentPath = ref(
  Array.isArray(route.params.path) ? route.params.path[0] : route.params.path
);

const currentLinkId = ref(
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id ?? "1"
);

const tricksLinks = ref(getLinks(currentPath.value));

const currentLink = ref(
  tricksLinks.value?.find((link) => link.id === currentLinkId.value)
);

const updateCurrentLink = () => {
  tricksLinks.value = getLinks(currentPath.value);
  currentLink.value = tricksLinks.value?.find(
    (link) => link.id === currentLinkId.value
  );
};

watch(
  () => route.params,
  (newParams) => {
    currentPath.value = Array.isArray(newParams.path)
      ? newParams.path[0]
      : newParams.path;
    currentLinkId.value = Array.isArray(newParams.id)
      ? newParams.id[0]
      : newParams.id ?? "1";
    updateCurrentLink();
  },
  { immediate: true }
);
</script>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
}
</style>
