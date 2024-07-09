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

const chapters = <Chapter[]>[
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
];

interface Link {
  id: string;
  text: string;
  description: string;
  steps: string[];
}

const basicTricksLinks = <Link[]>[
  {
    id: "1",
    text: "The Mind Reading Card Trick",
    description:
      "A prediction in a sealed envelope matches a card chosen by your spectator.",
    steps: [
      "Before you begin, write down a prediction on a piece of paper (i.e. 10 of Hearts) and seal it in an envelope.",
      "Take your deck of cards and secretly place the 10 of Hearts on top.",
      "Hand the envelope to an audience member and instruct them not to open it.",
      "Fan the playing cards in your hand and show the audience they're all mixed up.",
      "If someone asks to shuffle the deck, don't panic! Once they've shuffled, fan through the cards again to verify they're properly shuffled.",
      "While you do this, locate the 10 of Hearts and cut it back to the top of the deck.",
      "Use the Cross Cut Force to have the spectator select the 10 of Hearts.",
      "Place the deck face down on the table and invite an audience member to cut the deck in half and place the cards to their right.",
      "You then immediately pick up the original bottom half on the left, turn it sideways and place it on top of the cards to the right.",
      "Let a few moments pass so your audience forgets which half came from where.",
      "Look up from the deck of cards and begin recapping how you used a regular deck of cards that was fairly shuffled.",
      "Remind your volunteer that they could have cut anywhere but chose to “cut here.” As you say “cut here” pick up the sideways top half and then point to the top card of the bottom half (the Ten of Hearts) and say “and you selected this card.”",
      "Have the volunteer turn over the selected card and then reveal it matches your prediction!",
    ],
  },
  {
    id: "2",
    text: "The Impossible Three Card Trick",
    description:
      "Mind reading time! Read your spectator's mind and name a card they were merely thinking of.",
    steps: [
      "Remove the Ace of Spades, Queen of Hearts and Ace of Clubs from a deck of cards and place them on the table in that order left to right.",
      "Turn your back and tell your spectator to simply think of 1 of the 3 cards.",
      "To secretly tell the other audience members what card they mentally selected, instruct them to pick up the 2 cards they DIDN'T select and swap their positions. (i.e. If they chose the Ace of Clubs, they would swap the Queen of Hearts and Ace of Spades).",
      "Once this is complete, have your spectator turn all 3 cards face down.",
      "Turn back around and have them mix all 3 cards on the table casino style.",
      "Carefully follow the center card as they shuffle.",
      "Once they're done shuffling, flip over the card you followed. If this card is the Queen of Hearts (the original center card), then this was their selected card.",
      "If it is an Ace of Spades, then their mental selection was the Ace of Clubs. And, if it's an Ace of Clubs, then they selected the Ace of Spades.",
      "Flip over the other 2 cards and tell them to think about their card.",
      "After pretending to read their mind, push their selected card forward.",
    ],
  },
  {
    id: "3",
    text: "The Upside Down Card",
    description:
      "A spectator's selected card magically turns over in the deck.",
    steps: [
      "Before you begin, secretly turn over the bottom card of your deck so it's the only card facing up.",
      "Spread the deck and allow the spectator to select a card (being careful not to expose the face up bottom card).",
      "Tell them to remember the card and show everyone without letting you see.",
      "While they do this, casually turn the deck over in your hands.",
      "This leaves all of the deck face up in your left hand, except the top card.",
      "Keeping the deck tight to avoid exposing the fact the cards are reversed, place the spectator's selected card face down into the middle of the deck.",
      "Put the cards behind your back and exclaim you're going to find their card without looking.",
      "Secretly turn over the top card so it's facing up.",
      "Bring out the face up deck and fan through until you come across the only face down card.",
      "Slowly reveal it is the selected card.",
    ],
  },
  {
    id: "4",
    text: "Mind Reading With Friends",
    description:
      "This is a fun mind reading card trick you can do with an assistant or a secret accomplice. With a bit of practice, this is an incredibly deceptive, easy-to-do magic trick.",
    steps: [
      "Lay down 3 rows of 3 cards. They can be any cards. However, we would suggest placing a 5 of Diamonds in the upper left corner for reasons that will become clearer later.",
      "Tell your audience that you're going to leave the room and instruct them to all agree on one of the playing cards while you're gone.",
      "Once you return to the room, explain that you are going to magically discover what card they selected.",
      "Your assistant will then slowly point to each card with a pencil in front of anyone without saying anything out loud.",
      "The secret to this trick lies in how the first card (the 5 of Diamonds in this case) is touched.",
      "Imagine it's broken up into a 3 x 3 grid.",
      "For example, if they point to the top right of the card (right on the top right pip), that means the selected card was the right card of the top row (Ace of Clubs in the pictured example).",
      "Or, if they point to the middle of the bottom ? of the card (below the middle pip and in-between the two outer pips), then the selected card is the middle card of the bottom row (6 of Spades).",
      "Once the first card has been touched, you'll know which card the audience selected and the rest is just showmanship.",
      "Your assistant can touch the other cards anywhere.",
      "Once all the cards have been touched, dramatically reveal the selected card.",
    ],
  },
];

const siSebastianStackLinks = <Link[]>[
  {
    id: "1",
    text: "Arranging Cards",
    description: "Learn the steps to arrange cards in the Si Sebastian Stack.",
    steps: [
      "Arrange all the cards in numerical order by suit.",
      "Separate the deck into two piles by alternating suits.",
      "Shuffle each pile separately while keeping the order.",
      "Interlace the two piles to form the stack.",
    ],
  },
  {
    id: "2",
    text: "Process",
    description: "The process of performing the Si Sebastian Stack.",
    steps: [
      "Present the deck to the audience.",
      "Perform the false shuffle to maintain order.",
      "Execute the stack trick to amaze the audience.",
    ],
  },
];

export const getLinks = (chapter: string) => {
  if(chapter == "basic-tricks") return basicTricksLinks;
  if(chapter == "si-sebastian-stack") return siSebastianStackLinks;
}

export const getChapters = () => {
  return chapters;
};

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

export const isActiveLink = (chapterPath: string, linkId: string) => {
  return store.activeChapter === chapterPath && store.activeLink === linkId;
};

export const toggleMenuOpen = () => {
  store.isMenuOpen = !store.isMenuOpen
}

