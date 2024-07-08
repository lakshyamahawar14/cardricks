import { reactive } from 'vue';

interface Store {
  activeChapter: string;
  activeChapterName: string;
  activeLink: string;
  activeLinkName: string;
  isSmallScreen: boolean,
  isMenuOpen: boolean,
}

export const store = reactive<Store>({
  activeChapter: '',
  activeChapterName: '',
  activeLink: '',
  activeLinkName:'',
  isSmallScreen: window.innerWidth <= 640,
  isMenuOpen: false,
});

interface Chapter {
  title: string;
  links: { text: string; id: string }[];
  path: string;
  expanded: boolean;
}

const chapters = <Chapter[]>([
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

export const setActiveLink = (chapter: string, link: string) => {
  store.activeChapter = chapter;
  store.activeLink = link;
  chapters.forEach((currChapter) => {
    if(currChapter.path == chapter){
      store.activeChapterName = currChapter.title;
      currChapter.links.forEach((currLink) => {
        if(currLink.id == link){
          store.activeLinkName = currLink.text;
        }
      })
      return;
    }
  })
};

export const toggleMenuOpen = () => {
  store.isMenuOpen = !store.isMenuOpen
}

