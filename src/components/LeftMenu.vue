<template>
  <div
    class="fixed left-0 top-[50px] w-[250px] h-[calc(100vh-50px)] bg-slate-800 flex flex-col items-start p-4 overflow-hidden z-10"
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
                v-if="isActiveLink(chapter.title, link.text)"
                class="w-[5px] h-[5px] bg-green-500 rounded-full mr-[10px]"
              ></div>
            </div>
            <span class="text-[0.9rem]">{{ link.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { store, setActiveLink } from "../store";

interface Chapter {
  title: string;
  links: { text: string; id: string }[]; // Updated interface to include id
  path: string;
  expanded: boolean;
}

library.add(faChevronRight, faChevronDown);

const chapters = ref<Chapter[]>([
  {
    title: "Basic Tricks",
    links: [
      { text: "Mind Reading Card Trick", id: "ch1link1" },
      { text: "The Impossible Three Card Trick", id: "ch1link2" },
      { text: "The Upside Down Card Trick", id: "ch1link3" },
    ],
    path: "basic-tricks",
    expanded: false,
  },
  {
    title: "Si Sebastian Stack",
    links: [
      { text: "Arranging Cards", id: "ch2link1" },
      { text: "Process", id: "ch2link2" },
    ],
    path: "si-sebastian-stack",
    expanded: false,
  },
]);

const router = useRouter();
const route = useRoute();

const setActiveChapterByPath = (path: string) => {
  let chapterFound = false;
  chapters.value.forEach((chapter) => {
    if (chapter.path === path) {
      chapter.expanded = true;
      chapterFound = true;
      setActiveLink(chapter.title, chapter.links[0].text); // Set active link by text
    } else {
      chapter.expanded = false;
    }
  });
  if (!chapterFound && path === "") {
    chapters.value[0].expanded = true;
  }
};

onMounted(() => {
  const path = route.path.slice(1);
  setActiveChapterByPath(path);
});

watch(
  () => route.path,
  (newPath) => {
    setActiveChapterByPath(newPath.slice(1));
  },
  { immediate: true }
);

const handleLinkClick = (
  chapter: Chapter,
  link: { text: string; id: string }
) => {
  setActiveLink(chapter.title, link.text);
  router.push(`/${chapter.path}`);

  const event = new CustomEvent("scrollToElement", {
    detail: { elementId: link.id },
  });
  document.dispatchEvent(event);
};

const toggleChapter = (chapter: Chapter) => {
  chapter.expanded = !chapter.expanded;
};

const isActiveLink = (chapterTitle: string, linkText: string) => {
  return store.activeChapter === chapterTitle && store.activeLink === linkText;
};
</script>

<style scoped></style>
