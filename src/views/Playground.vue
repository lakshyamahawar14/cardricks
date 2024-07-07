<template>
  <div
    class="relative bg-white h-full w-full flex justify-center items-center z-[10] overflow-hidden"
  >
    <div class="absolute top-2">
      <PlaygroundTools
        @toggle-fullscreen="togglePlayground"
        @clear-playground="clearPlayground"
        @spawn-cards="initializeSuits"
      />
    </div>
    <div
      class="absolute h-[30vh] w-full bottom-0 left-0 flex justify-evenly bg-slate-800"
    >
      <div
        v-for="(suit, suitIndex) in suits"
        :key="suitIndex"
        class="flex flex-col items-center justify-center"
      >
        <Card
          v-for="(card, cardIndex) in suit.cards"
          :key="cardIndex"
          :character="card.character"
          :image="card.imageName"
          :color="card.color"
          :size="card.size"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import PlaygroundTools from "../components/PlaygroundTools.vue";

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
