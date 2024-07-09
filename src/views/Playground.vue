<template>
  <div
    class="flex h-full justify-start flex-col items-center bg-slate-900 overflow-hidden"
  >
    <div class="absolute top-4 z-[15]">
      <PlaygroundTools
        :isFullscreen="isFullscreen"
        @toggle-fullscreen="togglePlayground"
        @clear-playground="clearPlayground"
        @spawn-cards="initializeSuits"
      />
    </div>

    <div class="relative h-full w-full flex p-2 bg-slate-900 overflow-auto">
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

    <!-- <div
      class="absolute h-[20vh] w-full bottom-0 left-0 flex justify-between bg-slate-800 overflow-x-auto"
    >
      <div
        v-for="(suit, suitIndex) in suits"
        :key="suitIndex"
        class="flex items-center justify-center px-4"
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
    </div> -->
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
  z-index: 100000;
}
</style>
