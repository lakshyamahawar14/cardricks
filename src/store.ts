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
  {
    title: "Advanced Tricks",
    links: [
      { text: "The Invisible Card Trick", id: "1" },
      { text: "The Disappearing Deck", id: "2" },
      { text: "The Floating Card", id: "3" },
      { text: "Predicting the Future", id: "4" },
    ],
    path: "advanced-tricks",
    expanded: true,
  },
  {
    title: "Expert Techniques",
    links: [
      { text: "Sleight of Hand", id: "1" },
      { text: "The Perfect Shuffle", id: "2" },
      { text: "Card Palming", id: "3" },
      { text: "The Double Lift", id: "4" },
    ],
    path: "expert-techniques",
    expanded: true,
  },
  {
    title: "Card Flourishes",
    links: [
      { text: "The Fan", id: "1" },
      { text: "The Spring", id: "2" },
      { text: "The Spread", id: "3" },
      { text: "The Sybil Cut", id: "4" },
    ],
    path: "card-flourishes",
    expanded: true,
  },
  {
    title: "Psychological Tricks",
    links: [
      { text: "Cold Reading", id: "1" },
      { text: "The Power of Suggestion", id: "2" },
      { text: "Reading Microexpressions", id: "3" },
      { text: "The Barnum Effect", id: "4" },
    ],
    path: "psychological-tricks",
    expanded: true,
  },
  {
    title: "Mathematical Tricks",
    links: [
      { text: "The 21 Card Trick", id: "1" },
      { text: "Magic Squares", id: "2" },
      { text: "The Fibonacci Sequence Trick", id: "3" },
      { text: "The Monte Hall Problem", id: "4" },
    ],
    path: "mathematical-tricks",
    expanded: true,
  },
  {
    title: "Classic Tricks",
    links: [
      { text: "The French Drop", id: "1" },
      { text: "The Cups and Balls", id: "2" },
      { text: "The Linking Rings", id: "3" },
      { text: "The Zig Zag Girl", id: "4" },
    ],
    path: "classic-tricks",
    expanded: true,
  },
];


interface Link {
  id: string;
  text: string;
  description: string;
  steps: string[];
}

const LinksMap: Record<string, Link[]> = {
  "basic-tricks": [
    {
      id: "1",
      text: "The Mind Reading Card Trick",
      description: "A prediction in a sealed envelope matches a card chosen by your spectator.",
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
      description: "Mind reading time! Read your spectator's mind and name a card they were merely thinking of.",
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
      description: "A spectator's selected card magically turns over in the deck.",
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
      description: "This is a fun mind reading card trick you can do with an assistant or a secret accomplice. With a bit of practice, this is an incredibly deceptive, easy-to-do magic trick.",
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
  ],
  "si-sebastian-stack": [
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
  ],
  "advanced-tricks": [
    {
      id: "1",
      text: "The Invisible Card Trick",
      description: "A card seemingly vanishes from the deck and reappears elsewhere.",
      steps: [
        "Prepare by palming a duplicate card.",
        "Force the duplicate on the spectator.",
        "Perform a false shuffle keeping the card in place.",
        "Make the card vanish using sleight of hand.",
        "Reveal the palmed card from a surprising location.",
      ],
    },
    {
      id: "2",
      text: "The Disappearing Deck",
      description: "The entire deck vanishes except for the spectator's card.",
      steps: [
        "Palm a single card before starting.",
        "Have the spectator choose a card and control it to the top.",
        "Perform a false shuffle, keeping their card on top.",
        "Place the deck in a box and secretly palm it out.",
        "Open the box to reveal only the spectator's card remains.",
      ],
    },
    {
      id: "3",
      text: "The Floating Card",
      description: "A card floats above the deck.",
      steps: [
        "Use invisible thread to create the illusion.",
        "Anchor the thread to a stationary object.",
        "Practice the movements to keep the thread hidden.",
        "Reveal the floating card to your audience.",
      ],
    },
    {
      id: "4",
      text: "Predicting the Future",
      description: "A prediction card matches the spectator's freely chosen card.",
      steps: [
        "Write a prediction and place it in an envelope.",
        "Force the predicted card on the spectator.",
        "Have the spectator reveal their chosen card.",
        "Open the envelope to show the matching prediction.",
      ],
    },
  ],
  "expert-techniques": [
    {
      id: "1",
      text: "Sleight of Hand",
      description: "Mastering the art of sleight of hand for card magic.",
      steps: [
        "Practice basic sleight moves like the palm and pass.",
        "Incorporate misdirection to enhance the illusion.",
        "Perfect your timing and hand movements.",
        "Perform in front of a mirror to catch any mistakes.",
      ],
    },
    {
      id: "2",
      text: "The Perfect Shuffle",
      description: "Executing a perfect shuffle to maintain card order.",
      steps: [
        "Divide the deck into two equal halves.",
        "Hold each half in a specific grip.",
        "Interlace the cards perfectly with precision.",
        "Square up the deck to complete the shuffle.",
      ],
    },
    {
      id: "3",
      text: "Card Palming",
      description: "Hiding a card in your palm without detection.",
      steps: [
        "Hold the card in the natural grip.",
        "Practice the movements to avoid flashing.",
        "Use misdirection to draw attention away.",
        "Release the card smoothly when needed.",
      ],
    },
    {
      id: "4",
      text: "The Double Lift",
      description: "Turning over two cards as one.",
      steps: [
        "Practice the grip and lift to keep the cards aligned.",
        "Use natural movements to disguise the double lift.",
        "Perfect your angles to avoid detection.",
        "Incorporate the double lift into various tricks.",
      ],
    },
  ],
  "card-flourishes": [
    {
      id: "1",
      text: "The Fan",
      description: "Creating a beautiful fan with the deck of cards.",
      steps: [
        "Hold the deck in a specific grip.",
        "Apply pressure with your thumb to fan out the cards.",
        "Practice smooth and even spreading.",
        "Use the fan as a flourish or part of a trick.",
      ],
    },
    {
      id: "2",
      text: "The Spring",
      description: "Cascading cards from one hand to the other.",
      steps: [
        "Hold the deck in a specific grip.",
        "Apply pressure to the cards with your fingers.",
        "Release the cards in a controlled manner.",
        "Practice to achieve a smooth and consistent spring.",
      ],
    },
    {
      id: "3",
      text: "The Spread",
      description: "Spreading the cards smoothly across a surface.",
      steps: [
        "Hold the deck in a specific grip.",
        "Apply pressure with your thumb to spread the cards.",
        "Practice smooth and even spreading.",
        "Use the spread for reveals or as a flourish.",
      ],
    },
    {
      id: "4",
      text: "The Sybil Cut",
      description: "An advanced cut with multiple packets.",
      steps: [
        "Learn the basic mechanics of the cut.",
        "Practice the movements to achieve fluidity.",
        "Incorporate the Sybil Cut into routines.",
        "Use the cut to impress and add complexity.",
      ],
    },
  ],
  "psychological-tricks": [
    {
      id: "1",
      text: "Cold Reading",
      description: "Reading a spectator's mind using psychological techniques.",
      steps: [
        "Learn to read body language and facial expressions.",
        "Use general statements to gauge reactions.",
        "Refine your statements based on feedback.",
        "Practice to improve accuracy and believability.",
      ],
    },
    {
      id: "2",
      text: "The Power of Suggestion",
      description: "Influencing a spectator's thoughts and actions.",
      steps: [
        "Learn techniques of verbal and non-verbal suggestion.",
        "Practice subtle cues to guide choices.",
        "Use misdirection to enhance the effect.",
        "Refine your skills through practice and performance.",
      ],
    },
    {
      id: "3",
      text: "Reading Microexpressions",
      description: "Using microexpressions to read thoughts and emotions.",
      steps: [
        "Study the different types of microexpressions.",
        "Practice recognizing them in real-time.",
        "Incorporate your observations into your routine.",
        "Use microexpressions to enhance your tricks.",
      ],
    },
    {
      id: "4",
      text: "The Barnum Effect",
      description: "Using vague statements to appear highly accurate.",
      steps: [
        "Learn to craft Barnum statements.",
        "Incorporate them into your readings.",
        "Gauge spectator reactions and adjust accordingly.",
        "Use the Barnum Effect to enhance believability.",
      ],
    },
  ],
  "mathematical-tricks": [
    {
      id: "1",
      text: "The 21 Card Trick",
      description: "A classic mathematical card trick.",
      steps: [
        "Deal out 21 cards in three rows of seven.",
        "Ask the spectator to pick a card and remember its column.",
        "Gather the cards with the selected column in the middle.",
        "Repeat the process twice more.",
        "Reveal the spectator's card at the end.",
      ],
    },
    {
      id: "2",
      text: "Magic Squares",
      description: "Creating a magic square with selected numbers.",
      steps: [
        "Ask the spectator to choose a number.",
        "Create a 4x4 grid with the chosen number.",
        "Fill in the grid to ensure all rows, columns, and diagonals add up to the chosen number.",
        "Reveal the magic square to the audience.",
      ],
    },
    {
      id: "3",
      text: "The Fibonacci Sequence Trick",
      description: "Using the Fibonacci sequence to perform a trick.",
      steps: [
        "Explain the Fibonacci sequence to the audience.",
        "Ask the spectator to pick two starting numbers.",
        "Generate the sequence based on their choices.",
        "Reveal a surprising mathematical property or prediction.",
      ],
    },
    {
      id: "4",
      text: "The Monte Hall Problem",
      description: "Explaining and demonstrating the Monte Hall problem.",
      steps: [
        "Explain the premise of the Monte Hall problem.",
        "Set up a similar scenario with three cards.",
        "Guide the spectator through the choices.",
        "Reveal the mathematical advantage of switching choices.",
      ],
    },
  ],
  "classic-tricks": [
    {
      id: "1",
      text: "The French Drop",
      description: "A classic coin vanish using sleight of hand.",
      steps: [
        "Hold the coin between your thumb and fingers.",
        "Pretend to transfer the coin to your other hand.",
        "Secretly retain the coin in your original hand.",
        "Open your other hand to show the coin has vanished.",
      ],
    },
    {
      id: "2",
      text: "The Cups and Balls",
      description: "A traditional cups and balls routine.",
      steps: [
        "Place three cups on the table.",
        "Perform various moves to make the balls appear and disappear.",
        "Use misdirection to enhance the effect.",
        "Finish with a surprising reveal or climax.",
      ],
    },
    {
      id: "3",
      text: "The Linking Rings",
      description: "Linking and unlinking metal rings.",
      steps: [
        "Hold two rings in a specific grip.",
        "Use a secret move to link them together.",
        "Show the linked rings to the audience.",
        "Unlink the rings using another secret move.",
      ],
    },
    {
      id: "4",
      text: "The Zig Zag Girl",
      description: "A classic stage illusion.",
      steps: [
        "Place a volunteer in the Zig Zag box.",
        "Slide the middle section to create the illusion.",
        "Show the separated sections to the audience.",
        "Restore the box to its original state.",
        "Open the box to reveal the volunteer unharmed.",
      ],
    },
  ],
};

export const getLinks = (chapter: string): Link[] => {
  return LinksMap[chapter] || [];
};


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

