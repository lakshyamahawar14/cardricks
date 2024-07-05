import { reactive } from 'vue';

interface Store {
  activeChapter: string;
  activeLink: string;
}

export const store = reactive<Store>({
  activeChapter: '',
  activeLink: ''
});

export const setActiveLink = (chapter: string, link: string) => {
  store.activeChapter = chapter;
  store.activeLink = link;
};

