<template>
  <div class="w-screen h-screen bg-white custom-scrollbar">
    <Header />
    <div
      class="relative flex justify-center items-center w-full h-full pt-[50px]"
    >
      <LeftMenu />
      <div
        class="flex relative left-0 w-full h-full overflow-x-hidden"
        :style="{
          paddingLeft: store.isSmallScreen ? '0' : '300px',
        }"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
import { store } from "./store";
</script>

<style scoped></style>
