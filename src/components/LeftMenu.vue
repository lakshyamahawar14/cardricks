<template>
  <div
    class="fixed flex w-[100%] md:flex lg:flex left-0 top-[50px] md:w-[300px] lg:w-[300px] h-[calc(100vh-50px)] bg-slate-800 flex-col items-start p-4 overflow-hidden z-[20]"
    :style="{
      display: store.isSmallScreen && !store.isMenuOpen ? 'none' : 'flex',
    }"
  >
    <div class="text-white flex flex-col">
      <div v-for="chapter in chapters" :key="chapter.title" class="mb-4">
        <div
          class="flex items-center cursor-pointer text-[1rem]"
          @click="toggleChapter(chapter)"
        >
          <FontAwesomeIcon
            :icon="chapter.expanded ? faChevronDown : faChevronRight"
            class="w-4 pr-1"
          />
          <p>{{ chapter.title }}</p>
        </div>
        <div v-if="chapter.expanded" class="flex flex-col mt-2">
          <div
            v-for="link in chapter.links"
            :key="link.text"
            class="relative flex items-center mx-3 p-2 cursor-pointer rounded hover:bg-slate-600 w-[250px] lg:w-[250px]"
            :class="{
              'bg-slate-700': isActiveLink(chapter.path, link.id),
              'pl-6': isActiveLink(chapter.path, link.id),
            }"
            @click="handleLinkClick(chapter, link)"
          >
            <div class="absolute top-[0.95rem] left-2">
              <div
                v-if="isActiveLink(chapter.path, link.id)"
                class="w-2 h-2 bg-green-500 rounded-full mr-[8px]"
              ></div>
            </div>
            <span class="text-[0.9rem]">
              {{ link.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { store, setActiveLink } from "../store";

interface Chapter {
  title: string;
  links: { text: string; id: string }[];
  path: string;
  expanded: boolean;
}

library.add(faChevronRight, faChevronDown);

const chapters = ref<Chapter[]>([
  {
    title: "Basic Tricks",
    links: [
      { text: "The Mind Reading Card Trick", id: "1" },
      { text: "The Impossible Three Card Trick", id: "2" },
      { text: "The Upside Down Card Trick", id: "3" },
      { text: "Mind Reading With Friends", id: "4" },
    ],
    path: "basic-tricks",
    expanded: true,
  },
  {
    title: "Si Sebastian Stack",
    links: [
      { text: "Arranging Cards", id: "1" },
      { text: "Process", id: "2" },
    ],
    path: "si-sebastian-stack",
    expanded: true,
  },
]);

const router = useRouter();

const handleLinkClick = (
  chapter: Chapter,
  link: { text: string; id: string }
) => {
  setActiveLink(chapter.path, link.id);
  router.push(`/${chapter.path}/${link.id}`);
};

const toggleChapter = (chapter: Chapter) => {
  chapter.expanded = !chapter.expanded;
};

const isActiveLink = (chapterPath: string, linkId: string) => {
  return store.activeChapter === chapterPath && store.activeLink === linkId;
};
</script>

<style scoped></style>
