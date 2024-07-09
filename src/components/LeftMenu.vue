<template>
  <div
    class="fixed flex w-full md:flex lg:flex left-0 top-[60px] md:w-[325px] lg:w-[325px] h-[calc(100vh-60px)] bg-slate-900 border-r-[1px] border-slate-700 flex-col items-start p-6 lg:pl-16 overflow-hidden z-[20]"
    :style="{
      display: store.isSmallScreen && !store.isMenuOpen ? 'none' : 'flex',
    }"
  >
    <div class="text-slate-400 flex flex-col w-full">
      <div
        v-for="chapter in chapters"
        :key="chapter.title"
        class="flex items-center justify-center cursor-pointer flex-col w-full mb-4"
      >
        <div
          class="flex justify-start items-center text-[0.9rem] w-full text-slate-200 font-bold"
          @click="() => toggleChapter(chapter)"
        >
          <FontAwesomeIcon
            :icon="chapter.expanded ? faChevronDown : faChevronRight"
            class="w-4 pr-1"
          />
          <p>{{ chapter.title }}</p>
        </div>
        <div
          v-if="chapter.expanded"
          class="flex justify-center items-center flex-col py-2 w-full"
        >
          <div
            v-for="link in chapter.links"
            :key="link.text"
            class="relative flex justify-start items-center py-2 cursor-pointer hover:text-slate-200 w-full"
            :class="{
              activeLink: isActiveLink(chapter.path, link.id),
            }"
            @click="() => handleLinkClick(chapter, link)"
          >
            <span class="text-[0.9rem] font-medium">
              {{ link.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  store,
  getChapters,
  getLinks,
  setActiveLink,
  isActiveLink,
} from "../store";

interface Chapter {
  title: string;
  links: { text: string; id: string }[];
  path: string;
  expanded: boolean;
}

library.add(faChevronRight, faChevronDown);

const chapters = ref(getChapters());

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
  if (currentLink.value) {
    setActiveLink(currentPath.value, currentLink.value.id);
  }
};

if (currentLink.value) {
  setActiveLink(currentPath.value, currentLink.value.id);
}

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
  },
  { immediate: true }
);

const handleLinkClick = (
  chapter: Chapter,
  link: { text: string; id: string }
) => {
  router.push(`/tricks/${chapter.path}/${link.id}`);
};

const toggleChapter = (chapter: Chapter) => {
  const index = chapters.value.findIndex((c) => c.title === chapter.title);
  if (index !== -1) {
    chapters.value[index].expanded = !chapters.value[index].expanded;
  }
};
</script>

<style scoped>
.activeLink {
  padding-left: 1rem;
  color: rgb(56 189 248);
  pointer-events: none;
  border-radius: none;
  border-left-width: 3px;
  border-left-color: rgb(56 189 248);
}
</style>
