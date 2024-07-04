<template>
  <div class="w-full h-screen bg-white custom-scrollbar">
    <Header />
    <div class="flex justify-center items-center">
      <LeftMenu />
      <div
        class="flex absolute top-[50px] left-[250px] flex-col h-[calc(100vh-50px)] w-[calc(100vw-250px)] overflow-x-hidden p-4"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
</script>

<style scoped></style>
