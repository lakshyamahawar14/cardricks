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
          @click="toggleChapter(chapter)"
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
            @click="handleLinkClick(chapter, link)"
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
import { useRouter } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { store, getChapters, isActiveLink } from "../store";

interface Chapter {
  title: string;
  links: { text: string; id: string }[];
  path: string;
  expanded: boolean;
}

library.add(faChevronRight, faChevronDown);

const chapters = getChapters();

const router = useRouter();

const handleLinkClick = (
  chapter: Chapter,
  link: { text: string; id: string }
) => {
  router.push(`/tricks/${chapter.path}/${link.id}`);
};

const toggleChapter = (chapter: Chapter) => {
  chapter.expanded = !chapter.expanded;
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
