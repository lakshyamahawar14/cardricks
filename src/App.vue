<template>
  <div class="w-auto h-screen overflow-hidden">
    <Header />
    <LeftMenu />
    <div
      class="flex relative w-full top-[60px] h-[calc(100vh-60px)] justify-start items-start overflow-auto"
      :style="{
        paddingLeft: store.isSmallScreen ? '0' : '325px',
      }"
    >
      <router-view
        class="w-full min-h-[calc(100vh-60px)] bg-slate-900 text-slate-400 leading-7"
        id="mainApp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
import { store } from "./store";
</script>

<style scoped></style>
