import { reactive } from 'vue';

interface Store {
  activeChapter: string;
  activeLink: string;
  isSmallScreen: boolean,
  isMenuOpen: boolean,
}

export const store = reactive<Store>({
  activeChapter: '',
  activeLink: '',
  isSmallScreen: window.innerWidth <= 640,
  isMenuOpen: false,
});

export const setActiveLink = (chapter: string, link: string) => {
  store.activeChapter = chapter;
  store.activeLink = link;
};

export const toggleMenuOpen = () => {
  store.isMenuOpen = !store.isMenuOpen
}

