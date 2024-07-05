<template>
  <div class="">
    <div class="mb-4 p-4" id="ch1link1">
      <h1 class="font-nova text-[1.7rem] font-bold">
        1. The Mind Reading Card Trick
      </h1>
      <h2 class="text-[1.5rem] my-2">
        A prediction in a sealed envelope matches a card chosen by your
        spectator.
      </h2>
      <p class="text-[1.2rem] p-2">
        1. Before you begin, write down a prediction on a piece of paper (i.e.
        10 of Hearts) and seal it in an envelope. Then, take your deck of cards
        and secretly place the 10 of Hearts on top.
      </p>
      <p class="text-[1.2rem] p-2">
        2. Hand the envelope to an audience member and instruct them not to open
        it.
      </p>
      <p class="text-[1.2rem] p-2">
        3. Fan the playing cards in your hand and show the audience they're all
        mixed up. If someone asks to shuffle the deck. Don't panic! Once they've
        shuffled, fan through the cards again to verify they're properly
        shuffled. While you do this, locate the 10 of Hearts and cut it back to
        the top of the deck.
      </p>
      <p class="text-[1.2rem] p-2">
        4. Now, you will get them to select the 10 of Hearts using a super easy
        self-working card force known as the Cross Cut Force.
      </p>
      <p class="text-[1.2rem] p-2">
        5. Place the deck face down on the table and invite an audience member
        to cut the deck in half and place the cards to their right.
      </p>
      <p class="text-[1.2rem] p-2">
        6. You then immediately pick up the original bottom half on the left,
        turn it sideways and place it on top of the cards to the right.
      </p>
      <p class="text-[1.2rem] p-2">
        7. For this force to be effective, you'll now need to let a few moments
        pass so your audience forgets which half came from where.
      </p>
      <p class="text-[1.2rem] p-2">
        8. To do this, look up from the deck of cards and begin recapping how
        you used a regular deck of cards that was fairly shuffled. Remind your
        volunteer that they could have cut anywhere but chose to "cut here."
      </p>
      <p class="text-[1.2rem] p-2">
        9. As you say “cut here” pick up the sideways top half and then point to
        the top card of the bottom half (the Ten of Hearts) and say “and you
        selected this card.”
      </p>
      <p class="text-[1.2rem] p-2">
        10. Have the volunteer turn over the selected card and then reveal it
        matches your prediction!
      </p>
      <div
        class="border-[1px] border-black p-4 h-[100vh] my-4 flex justify-center items-center z-[10]"
      >
        <Card character="A" :icon="faHeart" color="red" :size="1" />
      </div>
    </div>
    <div class="mb-4 p-4" id="ch1link2">
      <h1 class="font-nova text-[1.7rem] font-bold">
        2. The Impossible Three Card Trick
      </h1>
      <h2 class="text-[1.5rem] my-2">
        A prediction in a sealed envelope matches a card chosen by your
        spectator.
      </h2>
      <p class="text-[1.2rem] p-2">
        1. Before you begin, write down a prediction on a piece of paper (i.e.
        10 of Hearts) and seal it in an envelope. Then, take your deck of cards
        and secretly place the 10 of Hearts on top.
      </p>
      <p class="text-[1.2rem] p-2">
        2. Hand the envelope to an audience member and instruct them not to open
        it.
      </p>
      <p class="text-[1.2rem] p-2">
        3. Fan the playing cards in your hand and show the audience they're all
        mixed up. If someone asks to shuffle the deck. Don't panic! Once they've
        shuffled, fan through the cards again to verify they're properly
        shuffled. While you do this, locate the 10 of Hearts and cut it back to
        the top of the deck.
      </p>
    </div>

    <div class="mb-4 p-4" id="ch1link3">
      <h1 class="font-nova text-[1.7rem] font-bold">
        2. The Impossible Three Card Trick
      </h1>
      <h2 class="text-[1.5rem] my-2">
        A prediction in a sealed envelope matches a card chosen by your
        spectator.
      </h2>
      <p class="text-[1.2rem] p-2">
        1. Before you begin, write down a prediction on a piece of paper (i.e.
        10 of Hearts) and seal it in an envelope. Then, take your deck of cards
        and secretly place the 10 of Hearts on top.
      </p>
      <p class="text-[1.2rem] p-2">
        2. Hand the envelope to an audience member and instruct them not to open
        it.
      </p>
      <p class="text-[1.2rem] p-2">
        3. Fan the playing cards in your hand and show the audience they're all
        mixed up. If someone asks to shuffle the deck. Don't panic! Once they've
        shuffled, fan through the cards again to verify they're properly
        shuffled. While you do this, locate the 10 of Hearts and cut it back to
        the top of the deck.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card.vue";

const route = useRoute();

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  const scrollTo = route.query.scrollTo as string | undefined;
  if (scrollTo) {
    scrollToElement(scrollTo);
  }

  document.addEventListener("scrollToElement", (event: Event) => {
    const customEvent = event as CustomEvent<{ elementId: string }>;
    const { elementId } = customEvent.detail;
    scrollToElement(elementId);
  });
});
</script>

<style scoped></style>
