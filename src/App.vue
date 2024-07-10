<template>
  <div class="w-auto h-auto overflow-hidden">
    <Header />
    <LeftMenu />
    <div
      class="flex relative w-full min-h-[100vh] top-0 justify-start items-start overflow-auto bg-slate-900"
      :style="{
        paddingLeft: store.isSmallScreen ? '0' : '325px',
      }"
    >
      <router-view
        class="w-full h-full min-h-[100vh] bg-slate-900 text-slate-400 leading-7"
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
