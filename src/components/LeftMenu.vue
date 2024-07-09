<template>
  <div
    class="fixed flex w-[100%] md:flex lg:flex left-0 top-[60px] md:w-[325px] lg:w-[325px] h-[calc(100vh-60px)] bg-slate-900 border-r-[1px] border-slate-700 flex-col items-start p-4 pl-10 overflow-hidden z-[20]"
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
          class="flex justify-center items-center flex-col py-2"
        >
          <div
            v-for="link in chapter.links"
            :key="link.text"
            class="relative flex items-center mx-3 p-2 cursor-pointer rounded hover:text-slate-200 w-[260px] lg:w-[260px]"
            :class="{
              'pl-6': isActiveLink(chapter.path, link.id),
              'text-sky-400': isActiveLink(chapter.path, link.id),
              'pointer-events-none': isActiveLink(chapter.path, link.id),
            }"
            @click="handleLinkClick(chapter, link)"
          >
            <div class="absolute top-[0.95rem] left-2">
              <div
                v-if="isActiveLink(chapter.path, link.id)"
                class="w-2 h-2 bg-sky-400 rounded-full mr-[8px]"
              ></div>
            </div>
            <span
              class="text-[0.9rem] font-medium"
              :class="{ 'font-semibold': isActiveLink(chapter.path, link.id) }"
            >
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
import { store, getChapters } from "../store";

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

const isActiveLink = (chapterPath: string, linkId: string) => {
  return store.activeChapter === chapterPath && store.activeLink === linkId;
};
</script>

<style scoped></style>
