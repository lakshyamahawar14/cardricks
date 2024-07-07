<template>
  <div class="">
    <div class="flex justify-center flex-col lg:flex-row gap-4">
      <div class="flex justify-start flex-col items-start w-full">
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

      <div class="relative w-full lg:w-1/3">
        <h1 class="text-[1.7rem] font-bold text-slate-800">Tips</h1>
        <div class="flex flex-col my-4">
          <p
            class="text-[1.1rem] p-2 border-l-[3px] border-[rgb(30,41,59)] my-2 shadow-md"
          >
            Maximize the Playground before performing the tricks.
          </p>
          <p
            class="text-[1.1rem] p-2 border-l-[3px] border-[rgb(30,41,59)] my-2 shadow-md"
          >
            Click on 'Spawn Cards' to spawn new cards.
          </p>
          <p
            class="text-[1.1rem] p-2 border-l-[3px] border-[rgb(30,41,59)] my-2 shadow-md"
          >
            Reset button clears the Playground.
          </p>
        </div>
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

const basicTricksLinks = [
  {
    id: "1",
    text: "The Mind Reading Card Trick",
    description:
      "A prediction in a sealed envelope matches a card chosen by your spectator.",
    steps: [
      "Before you begin, write down a prediction on a piece of paper (i.e. 10 of Hearts) and seal it in an envelope.",
      "Take your deck of cards and secretly place the 10 of Hearts on top.",
      "Hand the envelope to an audience member and instruct them not to open it.",
      "Fan the playing cards in your hand and show the audience they're all mixed up.",
      "If someone asks to shuffle the deck, don't panic! Once they've shuffled, fan through the cards again to verify they're properly shuffled.",
      "While you do this, locate the 10 of Hearts and cut it back to the top of the deck.",
      "Use the Cross Cut Force to have the spectator select the 10 of Hearts.",
      "Place the deck face down on the table and invite an audience member to cut the deck in half and place the cards to their right.",
      "You then immediately pick up the original bottom half on the left, turn it sideways and place it on top of the cards to the right.",
      "Let a few moments pass so your audience forgets which half came from where.",
      "Look up from the deck of cards and begin recapping how you used a regular deck of cards that was fairly shuffled.",
      "Remind your volunteer that they could have cut anywhere but chose to “cut here.” As you say “cut here” pick up the sideways top half and then point to the top card of the bottom half (the Ten of Hearts) and say “and you selected this card.”",
      "Have the volunteer turn over the selected card and then reveal it matches your prediction!",
    ],
  },
  {
    id: "2",
    text: "The Impossible Three Card Trick",
    description:
      "Mind reading time! Read your spectator's mind and name a card they were merely thinking of.",
    steps: [
      "Remove the Ace of Spades, Queen of Hearts and Ace of Clubs from a deck of cards and place them on the table in that order left to right.",
      "Turn your back and tell your spectator to simply think of 1 of the 3 cards.",
      "To secretly tell the other audience members what card they mentally selected, instruct them to pick up the 2 cards they DIDN'T select and swap their positions. (i.e. If they chose the Ace of Clubs, they would swap the Queen of Hearts and Ace of Spades).",
      "Once this is complete, have your spectator turn all 3 cards face down.",
      "Turn back around and have them mix all 3 cards on the table casino style.",
      "Carefully follow the center card as they shuffle.",
      "Once they're done shuffling, flip over the card you followed. If this card is the Queen of Hearts (the original center card), then this was their selected card.",
      "If it is an Ace of Spades, then their mental selection was the Ace of Clubs. And, if it's an Ace of Clubs, then they selected the Ace of Spades.",
      "Flip over the other 2 cards and tell them to think about their card.",
      "After pretending to read their mind, push their selected card forward.",
    ],
  },
  {
    id: "3",
    text: "The Upside Down Card",
    description:
      "A spectator's selected card magically turns over in the deck.",
    steps: [
      "Before you begin, secretly turn over the bottom card of your deck so it's the only card facing up.",
      "Spread the deck and allow the spectator to select a card (being careful not to expose the face up bottom card).",
      "Tell them to remember the card and show everyone without letting you see.",
      "While they do this, casually turn the deck over in your hands.",
      "This leaves all of the deck face up in your left hand, except the top card.",
      "Keeping the deck tight to avoid exposing the fact the cards are reversed, place the spectator's selected card face down into the middle of the deck.",
      "Put the cards behind your back and exclaim you're going to find their card without looking.",
      "Secretly turn over the top card so it's facing up.",
      "Bring out the face up deck and fan through until you come across the only face down card.",
      "Slowly reveal it is the selected card.",
    ],
  },
  {
    id: "4",
    text: "Mind Reading With Friends",
    description:
      "This is a fun mind reading card trick you can do with an assistant or a secret accomplice. With a bit of practice, this is an incredibly deceptive, easy-to-do magic trick.",
    steps: [
      "Lay down 3 rows of 3 cards. They can be any cards. However, we would suggest placing a 5 of Diamonds in the upper left corner for reasons that will become clearer later.",
      "Tell your audience that you're going to leave the room and instruct them to all agree on one of the playing cards while you're gone.",
      "Once you return to the room, explain that you are going to magically discover what card they selected.",
      "Your assistant will then slowly point to each card with a pencil in front of anyone without saying anything out loud.",
      "The secret to this trick lies in how the first card (the 5 of Diamonds in this case) is touched.",
      "Imagine it's broken up into a 3 x 3 grid.",
      "For example, if they point to the top right of the card (right on the top right pip), that means the selected card was the right card of the top row (Ace of Clubs in the pictured example).",
      "Or, if they point to the middle of the bottom ? of the card (below the middle pip and in-between the two outer pips), then the selected card is the middle card of the bottom row (6 of Spades).",
      "Once the first card has been touched, you'll know which card the audience selected and the rest is just showmanship.",
      "Your assistant can touch the other cards anywhere.",
      "Once all the cards have been touched, dramatically reveal the selected card.",
    ],
  },
];

const currentLink = ref(
  basicTricksLinks.find((link) => link.id === currentLinkId.value)
);

if (currentLink.value) {
  setActiveLink("basic-tricks", currentLink.value.id);
}

watch(
  () => route.params.id,
  (newId) => {
    scrollToElement();
    currentLinkId.value = Array.isArray(newId) ? newId[0] : newId ?? "1";
    currentLink.value = basicTricksLinks.find(
      (link) => link.id === currentLinkId.value
    );
    if (currentLink.value) {
      setActiveLink("basic-tricks", currentLink.value.id);
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
