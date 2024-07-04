import { reactive } from 'vue';

interface Chapter {
  title: string;
  links: string[];
  path: string;
  expanded: boolean;
}

interface Store {
  activeChapter: string;
  activeLink: string;
}

export const store = reactive<Store>({
  activeChapter: '',
  activeLink: ''
});

export const setActiveLink = (chapterTitle: string, link: string) => {
  store.activeChapter = chapterTitle;
  store.activeLink = link;
};

export const setActiveLinkByPath = (path: string, chapters: Chapter[]) => {
  for (const chapter of chapters) {
    if (chapter.path === path) {
      store.activeChapter = chapter.title;
      store.activeLink = chapter.links[0];
      break;
    }
  }
};
