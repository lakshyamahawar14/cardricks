<template>
  <div>
    <div
      class="border-[1px] border-black p-4 h-[100vh] mt-4 flex justify-center items-center z-[10]"
    >
      <Card character="A" :icon="faHeart" color="red" :size="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card.vue";
</script>

<style scoped></style>
