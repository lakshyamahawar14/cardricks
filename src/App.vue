<template>
  <div class="w-auto h-screen bg-white overflow-hidden">
    <Header />
    <LeftMenu />
    <div
      class="flex relative w-full top-[50px] h-[calc(100vh-50px)] justify-start items-start overflow-auto"
      :style="{
        paddingLeft: store.isSmallScreen ? '0' : '300px',
      }"
    >
      <router-view class="w-full min-h-[calc(100vh-50px)]" id="mainApp" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftMenu from "./components/LeftMenu.vue";
import { store } from "./store";
</script>

<style scoped></style>
