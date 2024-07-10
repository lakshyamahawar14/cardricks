<template>
  <div
    class="p-6 py-[calc(60px+1.5rem)] lg:py-[calc(60px+2.5rem)] lg:p-10 lg:pr-16 flex flex-col justify-between"
  >
    <div class="flex justify-center items-start flex-col pb-4">
      <div class="flex flex-col w-full">
        <div class="flex justify-start flex-col items-start w-full">
          <h2 class="font-medium text-sky-400">
            {{ store.activeChapterName }}
          </h2>
          <h1
            class="text-[1.7rem] py-4 font-extrabold text-slate-200"
            :id="currentLinkId"
          >
            {{ currentLink?.text }}
          </h1>
          <h2 class="text-[1.2rem]">{{ currentLink?.description }}</h2>
        </div>

        <div class="w-full py-8">
          <p
            v-for="(step, index) in currentLink?.steps"
            :key="step"
            class="text-justify text-[1rem] p-2 border-l-[3px] border-slate-600 shadow-slate-800 hover:text-sky-400 hover:border-sky-400 cursor-pointer"
          >
            {{ index + 1 }}. {{ step }}
          </p>
        </div>
      </div>

      <div class="flex justify-center w-full flex-col items-start mb-8">
        <h2 class="text-[1.7rem] font-bold pb-4 text-slate-200">
          Practice in Playground
        </h2>
        <button
          type="submit"
          class="bg-slate-700 hover:text-sky-400 hover:bg-slate-800 text-slate-200 font-bold py-1 px-4 rounded text-[0.8rem]"
          @click="goToPlayground"
        >
          Go To Playground
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store, getLinks } from "../store";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const currentPath = ref(
  Array.isArray(route.params.path) ? route.params.path[0] : route.params.path
);

const currentLinkId = ref(
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id ?? "1"
);

const tricksLinks = ref(getLinks(currentPath.value));

const currentLink = ref(
  tricksLinks.value?.find((link) => link.id === currentLinkId.value)
);

const updateCurrentLink = () => {
  tricksLinks.value = getLinks(currentPath.value);
  currentLink.value = tricksLinks.value?.find(
    (link) => link.id === currentLinkId.value
  );
};

watch(
  () => route.params,
  (newParams) => {
    currentPath.value = Array.isArray(newParams.path)
      ? newParams.path[0]
      : newParams.path;
    currentLinkId.value = Array.isArray(newParams.id)
      ? newParams.id[0]
      : newParams.id ?? "1";
    updateCurrentLink();
    scrollToElement();
  },
  { immediate: true }
);

const goToPlayground = () => {
  router.push({
    path: `/playground/${currentPath.value}/${currentLinkId.value}`,
  });
};

onMounted(() => {
  scrollToElement();
});

function scrollToElement() {
  const element = document.getElementById("mainApp");
  if (element) {
    element.scrollIntoView();
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped></style>
