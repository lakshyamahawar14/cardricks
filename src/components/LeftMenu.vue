<template>
  <div
    class="fixed left-0 top-[50px] lg:w-[300px] md:w-[250px] w-[300px] h-[calc(100vh-50px)] bg-slate-800 flex flex-col items-start p-4 overflow-hidden z-[20]"
  >
    <div class="text-white flex flex-col">
      <div v-for="chapter in chapters" :key="chapter.title" class="mb-4">
        <div
          class="flex items-center cursor-pointer text-[1rem]"
          @click="toggleChapter(chapter)"
        >
          <font-awesome-icon
            :icon="chapter.expanded ? 'chevron-down' : 'chevron-right'"
            class="pr-[10px]"
          />
          <p>{{ chapter.title }}</p>
        </div>
        <div v-if="chapter.expanded" class="flex flex-col">
          <div
            v-for="link in chapter.links"
            :key="link.text"
            class="flex items-start pl-[25px] pt-1 cursor-pointer"
            @click="handleLinkClick(chapter, link)"
          >
            <div class="h-full mt-[10px]">
              <div
                v-if="isActiveLink(chapter.path, link.id)"
                class="w-[5px] h-[5px] bg-green-500 rounded-full mr-[10px]"
              ></div>
            </div>
            <span
              :class="{ 'font-bold': isActiveLink(chapter.path, link.id) }"
              class="text-[0.9rem]"
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
      { text: "Mind Reading Card Trick", id: "1" },
      { text: "The Impossible Three Card Trick", id: "2" },
      { text: "The Upside Down Card Trick", id: "3" },
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
