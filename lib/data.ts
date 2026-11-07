export interface LessonFile {
  label: string;
  path: string;
}

export interface Lesson {
  id: string;
  title: string;
  level: string;
  duration: string;
  summary: string;
  files: LessonFile[];
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  language: string;
  theme: string;
  tagline: string;
  level: string;
  duration: string;
  summary: string;
  accents: string[];
  objectives: string[];
  lessons: Lesson[];
}

const ukLessons: Lesson[] = [
  {
    id: "uk-l1",
    title: "Four Nations, One Identity",
    level: "B1",
    duration: "50 min",
    summary: "England, Scotland, Wales and Northern Ireland — how four nations shape one British identity.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/uk/uk-lesson-1-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/uk/uk-lesson-1-presentation.pdf" },
    ],
  },
  {
    id: "uk-l2",
    title: "Multicultural Britain — A Melting Pot or a Salad Bowl?",
    level: "B1–B2",
    duration: "50 min",
    summary: "Exploring British multiculturalism through real voices and debate.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/uk/uk-lesson-2-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/uk/uk-lesson-2-presentation.pdf" },
    ],
  },
  {
    id: "uk-l3",
    title: "The Myth of British Politeness",
    level: "B1–B2",
    duration: "50 min",
    summary: "Politeness, humour and small talk — decoding the social codes of British English.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/uk/uk-lesson-3-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/uk/uk-lesson-3-presentation.pdf" },
    ],
  },
];

const usLessons: Lesson[] = [
  {
    id: "us-l1",
    title: "California vs Texas",
    level: "A2–B1",
    duration: "50 min",
    summary: "Two American states, two ways of life — comparing culture, climate and values.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/usa/usa-lesson-1-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/usa/usa-lesson-1-presentation.pdf" },
    ],
  },
  {
    id: "us-l2",
    title: "Thanksgiving — Celebration or Controversy?",
    level: "B1–B2",
    duration: "50 min",
    summary: "A national holiday with two stories — listening, discussion and debate.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/usa/usa-lesson-2-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/usa/usa-lesson-2-presentation.pdf" },
    ],
  },
  {
    id: "us-l3",
    title: "The American Dream — A Broken Promise?",
    level: "B1–B2",
    duration: "50 min",
    summary: "The promise of America — real voices, critical thinking and persuasive speaking.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/usa/usa-lesson-3-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/usa/usa-lesson-3-presentation.pdf" },
    ],
  },
];

const caLessons: Lesson[] = [
  {
    id: "ca-l1",
    title: "Canada — A Mosaic, Not a Melting Pot",
    level: "B1",
    duration: "50 min",
    summary: "How Canada celebrates difference — culture, immigration and identity.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/canada/canada-lesson-1-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/canada/canada-lesson-1-presentation.pdf" },
    ],
  },
  {
    id: "ca-l2",
    title: "Hockey — Canada's Religion or Just a Game?",
    level: "B1–B2",
    duration: "50 min",
    summary: "The sport that unites a nation — vocabulary, opinion and discussion.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/canada/canada-lesson-2-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/canada/canada-lesson-2-presentation.pdf" },
    ],
  },
  {
    id: "ca-l3",
    title: "Indigenous Peoples of Canada",
    level: "B1–B2",
    duration: "50 min",
    summary: "First Nations, Métis and Inuit — heritage, rights and modern voices.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/canada/canada-lesson-3-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/canada/canada-lesson-3-presentation.pdf" },
    ],
  },
];

const nzLessons: Lesson[] = [
  {
    id: "nz-l1",
    title: "Aotearoa — Two Cultures, One Nation",
    level: "B1",
    duration: "50 min",
    summary: "Māori and Pākehā cultures meeting in New Zealand — a case study in co-existence.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/new-zealand/new-zealand-lesson-1-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/new-zealand/new-zealand-lesson-1-presentation.pdf" },
    ],
  },
  {
    id: "nz-l2",
    title: "How New Zealand Protects Its Nature",
    level: "B1–B2",
    duration: "50 min",
    summary: "Conservation, kiwi birds and a 'clean green' image — listening and presentation.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/new-zealand/new-zealand-lesson-2-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/new-zealand/new-zealand-lesson-2-presentation.pdf" },
    ],
  },
  {
    id: "nz-l3",
    title: "The Kiwi Identity",
    level: "B1–B2",
    duration: "50 min",
    summary: "What it means to be a 'Kiwi' — values, humour and national symbols.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/new-zealand/new-zealand-lesson-3-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/new-zealand/new-zealand-lesson-3-presentation.pdf" },
    ],
  },
];

const auLessons: Lesson[] = [
  {
    id: "au-l1",
    title: "Aboriginal Culture — The Oldest Living Culture",
    level: "B1",
    duration: "50 min",
    summary: "Tens of thousands of years of culture — stories, art and connection to land.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/australia/australia-lesson-1-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/australia/australia-lesson-1-presentation.pdf" },
    ],
  },
  {
    id: "au-l2",
    title: "Australia Day — A Celebration or a Day of Mourning?",
    level: "B1–B2",
    duration: "50 min",
    summary: "Two perspectives on a national day — discussion and critical thinking.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/australia/australia-lesson-2-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/australia/australia-lesson-2-presentation.pdf" },
    ],
  },
  {
    id: "au-l3",
    title: "How Nature Shapes the Australian Character",
    level: "B1–B2",
    duration: "50 min",
    summary: "From the bush to the beach — how landscape shapes identity and language.",
    files: [
      { label: "Lesson plan", path: "/lesson-plans/australia/australia-lesson-3-plan.pdf" },
      { label: "Presentation", path: "/lesson-plans/australia/australia-lesson-3-presentation.pdf" },
    ],
  },
];

export const countries: Country[] = [
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    language: "English",
    theme: "The American Dream",
    tagline: "Big, fast and full of contradictions",
    level: "A2–B2",
    duration: "3 × 50 min",
    summary:
      "From California to Texas, Thanksgiving to the American Dream — explore the stories, debates and real voices behind one of the world's most influential cultures.",
    accents: ["American English", "Pop culture", "Debate", "Critical thinking"],
    objectives: [
      "Follow authentic American speech at natural speed",
      "Discuss cultural topics with opinion and evidence",
      "Compare American culture with your own",
    ],
    lessons: usLessons,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    language: "English",
    theme: "A Mosaic, Not a Melting Pot",
    tagline: "Two languages, many voices",
    level: "B1–B2",
    duration: "3 × 50 min",
    summary:
      "A mosaic of cultures, a national sport, and Indigenous voices — three lessons on what makes Canada quietly, distinctively itself.",
    accents: ["Canadian English", "Indigenous voices", "Discussion", "Listening"],
    objectives: [
      "Understand Canadian attitudes to identity and diversity",
      "Follow extended listening on cultural topics",
      "Express and justify opinions clearly",
    ],
    lessons: caLessons,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    language: "English",
    theme: "Aotearoa — Two Cultures",
    tagline: "Where Māori and Pākehā meet",
    level: "B1–B2",
    duration: "3 × 50 min",
    summary:
      "Two cultures, one nation — from Māori heritage to the 'clean green' spirit and the modern Kiwi identity.",
    accents: ["New Zealand English", "Māori culture", "Nature", "Presentation"],
    objectives: [
      "Learn about Māori–Pākehā co-existence",
      "Discuss identity and values with nuance",
      "Deliver a short presentation on a cultural topic",
    ],
    lessons: nzLessons,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    language: "English",
    theme: "Down Under",
    tagline: "Sun, slang and storytelling",
    level: "B1–B2",
    duration: "3 × 50 min",
    summary:
      "The world's oldest living culture, a contested national day, and a landscape that shapes the national character — three journeys into Australia.",
    accents: ["Australian English", "Aboriginal culture", "Debate", "Storytelling"],
    objectives: [
      "Follow authentic Australian voices",
      "Discuss complex cultural questions with empathy",
      "Recognise Australian English features",
    ],
    lessons: auLessons,
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    language: "English",
    theme: "Four Nations, One Identity",
    tagline: "Tradition and change",
    level: "B1–B2",
    duration: "3 × 50 min",
    summary:
      "Four nations, multicultural Britain, and the myth of British politeness — three lessons on identity and social codes across the UK.",
    accents: ["British English", "Multiculturalism", "Politeness", "Humour"],
    objectives: [
      "Understand British identity and social codes",
      "Recognise politeness and humour in spoken English",
      "Discuss multicultural society with balance",
    ],
    lessons: ukLessons,
  },
];

export interface Article {
  slug: string;
  title: string;
  country: string;
  flag: string;
  readTime: string;
  excerpt: string;
  body: string[];
  links: { label: string; url: string }[];
  tasks: string[];
  quiz: Question[];
}

export const articles: Article[] = [
  {
    slug: "thanksgiving-two-stories",
    title: "Thanksgiving: A Holiday with Two Stories",
    country: "United States",
    flag: "🇺🇸",
    readTime: "6 min read",
    excerpt:
      "Turkey, parades and family — but also a story many Americans were not taught in school. The history and traditions behind the most American of holidays.",
    body: [
      "Every fourth Thursday in November, millions of Americans sit down to a meal of roast turkey, cranberry sauce and pumpkin pie. For many families, Thanksgiving is the biggest holiday of the year — a time for travel, football on the TV and the famous Macy's parade in New York.",
      "The story usually told in schools begins in 1621, when English settlers in Plymouth shared a harvest feast with the Wampanoag people who had helped them survive the harsh winter. For more than two hundred years the holiday was celebrated only in some regions, until President Abraham Lincoln made it a national holiday in 1863 — in the middle of the Civil War.",
      "Yet there is another, quieter story. For many Native Americans, Thanksgiving is remembered as a National Day of Mourning, marking the start of centuries of colonisation and loss. Historians point out that the 1621 'first Thanksgiving' was a rare moment of peace between two peoples who were already in conflict, and that the friendship did not last.",
      "Today the holiday lives somewhere between these two stories: a warm family tradition for most, and for some a reminder of a painful past. Both versions are part of what makes Thanksgiving so unmistakably American.",
    ],
    links: [
      { label: "BBC News — US & Canada", url: "https://www.bbc.com/news/world/us_and_canada" },
      { label: "BBC Learning English", url: "https://www.bbclearningenglish.org/" },
    ],
    tasks: [
      "In your own words, explain the two 'stories' of Thanksgiving described in the article.",
      "List four Thanksgiving traditions and say which one you would most like to experience.",
      "Why do you think Thanksgiving became a national holiday in 1863? Discuss.",
      "Compare Thanksgiving with a holiday in your own culture — how are they similar and different?",
      "Write a short diary entry as if you were attending your first Thanksgiving dinner.",
    ],
    quiz: [
      {
        q: "When is Thanksgiving celebrated?",
        options: ["The first Monday of November", "The fourth Thursday of November", "25 December", "1 January"],
        answer: 1,
        explain: "Thanksgiving falls on the fourth Thursday of November.",
      },
      {
        q: "The 1621 harvest feast was shared with which people?",
        options: ["The Cherokee", "The Wampanoag", "The Inuit", "The Sioux"],
        answer: 1,
        explain: "English settlers in Plymouth shared the feast with the Wampanoag.",
      },
      {
        q: "Which president made Thanksgiving a national holiday?",
        options: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "John Kennedy"],
        answer: 1,
        explain: "Abraham Lincoln made it a national holiday in 1863.",
      },
      {
        q: "For many Native Americans, Thanksgiving is remembered as…",
        options: ["a National Day of Mourning", "a day of shopping", "a harvest race", "a sports final"],
        answer: 0,
        explain: "It marks the start of colonisation and loss for many Indigenous people.",
      },
      {
        q: "Which dish is traditional at Thanksgiving?",
        options: ["Sushi", "Roast turkey", "Fish and chips", "Pasta"],
        answer: 1,
        explain: "Roast turkey is the classic centrepiece of the meal.",
      },
    ],
  },
  {
    slug: "myth-of-british-politeness",
    title: "The Myth of British Politeness",
    country: "United Kingdom",
    flag: "🇬🇧",
    readTime: "6 min read",
    excerpt:
      "The British are famous for saying 'sorry' too much and queueing patiently. But how much of the stereotype is true — and what does it really reveal?",
    body: [
      "Ask anyone to name a British trait and you will hear the same words: polite, reserved, apologetic. There is even a joke that the first thing a British person learns to say is 'sorry'. Visitors often note how people apologise when someone else bumps into them, and how calmly everyone waits in a queue.",
      "Scholars who study politeness in Britain have found there is some truth to the image. Research into everyday speech shows that British speakers soften requests with phrases like 'would you mind…' and use small talk about the weather as a safe way to begin a conversation. Saying 'sorry' is often not a real apology at all but a polite way to get someone's attention or pass by.",
      "Yet the stereotype can hide a more complicated reality. British politeness is closely tied to understatement and irony — sometimes the most polite thing is to say the opposite of what you mean. And regional, class and generational differences matter enormously: the manners of a London office are not those of a small Scottish town.",
      "So the 'myth' is half-true. Politeness in Britain is real, but it is a social language with its own rules, humour and contradictions — a fascinating subject for anyone learning the culture, not just the grammar.",
    ],
    links: [
      { label: "BBC News — UK", url: "https://www.bbc.com/news/uk" },
      { label: "BBC Learning English — The English We Speak", url: "https://www.bbclearningenglish.org/" },
    ],
    tasks: [
      "List three examples of British politeness mentioned in the article.",
      "Why does the author call politeness a 'social language'? Explain in your own words.",
      "Find and share an example of British understatement or irony from a film or series.",
      "Compare politeness in Britain with politeness in your own culture — give two similarities and two differences.",
      "Do you think the stereotype of the 'polite Brit' is fair? Write a short argument for or against.",
    ],
    quiz: [
      {
        q: "Visitors often notice that the British say '___' very often.",
        options: ["please", "sorry", "thanks", "cheers"],
        answer: 1,
        explain: "The article says 'sorry' is heard constantly in Britain.",
      },
      {
        q: "'Would you mind…' is an example of…",
        options: ["shouting", "softening a request", "ending a call", "a grammar error"],
        answer: 1,
        explain: "It is a polite way to make a request less direct.",
      },
      {
        q: "A classic safe British small-talk topic is…",
        options: ["the weather", "salary", "religion", "politics"],
        answer: 0,
        explain: "Talking about the weather is a safe conversation starter.",
      },
      {
        q: "British politeness is closely linked to…",
        options: ["understatement and irony", "loud laughter", "shouting", "mime"],
        answer: 0,
        explain: "Understatement and irony are key to British social language.",
      },
      {
        q: "Saying 'sorry' while passing someone usually means…",
        options: [
          "a genuine apology",
          "a polite way to get attention or pass by",
          "you are angry",
          "you are leaving forever",
        ],
        answer: 1,
        explain: "Often 'sorry' is just a polite way to pass or get someone's attention.",
      },
    ],
  },
  {
    slug: "australia-day",
    title: "Australia Day: Celebration or a Day of Mourning?",
    country: "Australia",
    flag: "🇦🇺",
    readTime: "6 min read",
    excerpt:
      "Barbecues, beaches and citizenship ceremonies — and for many Aboriginal Australians, grief. The debate over 26 January divides a nation.",
    body: [
      "On 26 January every year, Australians celebrate their national day with family barbecues, trips to the beach, concerts and the moving ceremony in which new citizens are welcomed. For many, it is simply a joyful public holiday in the middle of summer.",
      "But the date has a specific meaning. On 26 January 1788, the First Fleet of British ships arrived in Sydney Cove and began the colonisation of the continent. For Aboriginal and Torres Strait Islander peoples, this same date marks the beginning of invasion, the loss of land and generations of suffering.",
      "For decades, many Indigenous Australians have marked the day as 'Invasion Day' or a 'Day of Mourning'. Each year the debate grows louder: should a nation that prides itself on fairness celebrate its national day on a date that hurts so many of its people?",
      "Supporters of the date say it is an opportunity to reflect and to move forward together. Others argue the date should be changed to one that unites rather than divides. Either way, the conversation itself has become part of what it means to be Australian today — a nation still learning to tell all of its history.",
    ],
    links: [
      { label: "BBC News — Australia", url: "https://www.bbc.com/news/world/australia" },
      { label: "BBC Learning English — 6 Minute English", url: "https://www.bbclearningenglish.org/" },
    ],
    tasks: [
      "Explain in your own words why 26 January is meaningful to two different groups of Australians.",
      "Write a balanced summary: give one argument for keeping the date and one for changing it.",
      "How does this debate connect with the story of Australia's First Peoples? Discuss.",
      "Do you think a national day should be a date everyone can celebrate? Why or why not?",
      "Research and share one tradition of an Australian national celebration, such as a citizenship ceremony.",
    ],
    quiz: [
      {
        q: "Australia Day is celebrated on…",
        options: ["26 January", "25 April", "1 January", "6 July"],
        answer: 0,
        explain: "It falls on 26 January every year.",
      },
      {
        q: "The First Fleet arrived in Sydney Cove in…",
        options: ["1688", "1788", "1888", "1988"],
        answer: 1,
        explain: "The First Fleet of British ships arrived in 1788.",
      },
      {
        q: "Many Aboriginal Australians call 26 January…",
        options: ["Invasion Day or a Day of Mourning", "Founders' Day", "Unity Day", "Family Day"],
        answer: 0,
        explain: "For many First Nations people, it marks the start of invasion and loss.",
      },
      {
        q: "The date 26 January marks the beginning of…",
        options: ["colonisation", "the railway", "the gold rush", "independence"],
        answer: 0,
        explain: "It marks the beginning of British colonisation of the continent.",
      },
      {
        q: "A common Australia Day celebration is…",
        options: ["a family barbecue", "a formal parade", "a silent protest", "a costume ball"],
        answer: 0,
        explain: "Barbecues, beaches and citizenship ceremonies are typical celebrations.",
      },
    ],
  },
  {
    slug: "haka-new-zealand",
    title: "The Haka: A Dance of Many Meanings",
    country: "New Zealand",
    flag: "🇳🇿",
    readTime: "6 min read",
    excerpt:
      "From ancient Māori war dances to the rugby field and the halls of parliament — the story of New Zealand's most famous tradition.",
    body: [
      "To most of the world, the haka is the terrifying war dance performed by New Zealand's rugby team, the All Blacks, before every match. Faces are distorted, tongues stick out, eyes bulge and the ground shakes — it is a moment that has become one of sport's greatest spectacles.",
      "But the haka is far older and richer than sport. It is a traditional Māori performance combining dance, song and shouted rhythm, used for centuries to welcome guests, honour the dead, celebrate victories and, yes, prepare for battle. Every haka has a story, and performing it is both a privilege and a responsibility.",
      "The haka has travelled far beyond the stadium. In 2024, Māori members of New Zealand's parliament performed a haka to protest a bill they felt threatened the rights of their people. Across the country, it is used to greet foreign leaders, open events and give young people a sense of pride and belonging.",
      "For many New Zealanders, the haka is a symbol of what makes their country special: a culture that honours its past and shares it with everyone. It is a reminder that tradition can be both ancient and alive.",
    ],
    links: [
      { label: "BBC News — New Zealand", url: "https://www.bbc.com/news/world/australia" },
      { label: "BBC Bitesize — Culture", url: "https://www.bbc.co.uk/bitesize" },
    ],
    tasks: [
      "Describe three different situations in which the haka is performed.",
      "Why is the haka called 'a dance of many meanings'? Explain.",
      "The article mentions the haka in parliament. What does this tell you about Māori culture today?",
      "Compare the haka with a traditional dance or ceremony from your own culture.",
      "Write a short caption for a photo of a haka performance for a magazine or textbook.",
    ],
    quiz: [
      {
        q: "The All Blacks perform the haka before…",
        options: ["rugby matches", "elections", "concerts", "exams"],
        answer: 0,
        explain: "New Zealand's rugby team performs the haka before matches.",
      },
      {
        q: "The haka is a traditional…",
        options: ["Māori performance", "cooking dish", "weather forecast", "voting ritual"],
        answer: 0,
        explain: "It is a Māori performance combining dance, song and rhythm.",
      },
      {
        q: "Traditionally, the haka was used to…",
        options: [
          "prepare for battle and welcome guests",
          "write poetry",
          "plant crops",
          "predict the weather",
        ],
        answer: 0,
        explain: "It was used for battle, ceremonies and welcoming guests.",
      },
      {
        q: "In 2024, Māori members of parliament performed a haka to…",
        options: ["protest a bill", "celebrate a birthday", "open a shop", "end a debate"],
        answer: 0,
        explain: "They performed a haka to protest a bill affecting Māori rights.",
      },
      {
        q: "For many New Zealanders, the haka is a symbol of…",
        options: ["Māori culture and pride", "the stock market", "the railway", "the climate"],
        answer: 0,
        explain: "It symbolises cultural pride and a connection to the past.",
      },
    ],
  },
  {
    slug: "canada-mosaic-reconciliation",
    title: "Canada's Mosaic and the Road to Reconciliation",
    country: "Canada",
    flag: "🇨🇦",
    readTime: "7 min read",
    excerpt:
      "Canada describes itself as a 'mosaic' where cultures keep their colour — but its relationship with Indigenous Peoples tells a harder, more honest story.",
    body: [
      "For generations Canadians have described their country not as a melting pot but as a mosaic. The idea is that immigrants do not have to abandon their culture to belong; instead, each community keeps its own colours, and together they form one picture. Canada's official policy of multiculturalism, introduced in 1971, makes this idea part of national identity.",
      "This mosaic has deep roots. Canada has two founding European languages — English and French — and welcomes people from almost every country on earth. Walking through a city like Toronto, it is possible to hear dozens of languages in a single street.",
      "Yet the mosaic has a darker side. Canada's Indigenous Peoples — First Nations, Métis and Inuit — lived on this land for thousands of years before colonisation. For much of the 20th century, thousands of Indigenous children were taken from their families and sent to residential schools designed to erase their languages and cultures. It is a history that Canada is only now fully facing.",
      "The journey of 'Truth and Reconciliation' is about acknowledging this past and building a more honest future — one in which the mosaic truly includes everyone, and in which Indigenous cultures are not just tolerated but honoured. For Canada, reconciliation is not a finished story but a work in progress.",
    ],
    links: [
      { label: "BBC News — US & Canada", url: "https://www.bbc.com/news/world/us_and_canada" },
      { label: "BBC Learning English", url: "https://www.bbclearningenglish.org/" },
    ],
    tasks: [
      "Explain the difference between a 'melting pot' and a 'mosaic' in your own words.",
      "What happened at residential schools, and why is it significant for Canada today?",
      "List the three Indigenous groups named in the article and one fact about each.",
      "Why is the reconciliation process described as 'a work in progress'?",
      "Write a short paragraph about how a country can both celebrate diversity and confront its history.",
    ],
    quiz: [
      {
        q: "Canada describes itself as a…",
        options: ["melting pot", "mosaic", "tapestry", "sandwich"],
        answer: 1,
        explain: "Canada is described as a mosaic where cultures keep their identity.",
      },
      {
        q: "Canada's official policy of multiculturalism was introduced in…",
        options: ["1921", "1971", "2001", "1948"],
        answer: 1,
        explain: "Multiculturalism became official policy in 1971.",
      },
      {
        q: "The three Indigenous groups named in the article are…",
        options: [
          "First Nations, Métis and Inuit",
          "Aboriginal, Torres and Strait",
          "Māori, Pākehā and Melanesian",
          "Celts, Gaels and Picts",
        ],
        answer: 0,
        explain: "First Nations, Métis and Inuit are the three recognised groups.",
      },
      {
        q: "Residential schools were designed to…",
        options: [
          "erase Indigenous languages and cultures",
          "build new cities",
          "train teachers",
          "open libraries",
        ],
        answer: 0,
        explain: "They were intended to erase Indigenous languages and cultures.",
      },
      {
        q: "'Truth and Reconciliation' aims to…",
        options: [
          "acknowledge the past and build a fairer future",
          "change the currency",
          "build more roads",
          "rename provinces",
        ],
        answer: 0,
        explain: "It is about facing the past and building a more honest future.",
      },
    ],
  },
  {
    slug: "nhs-britain-health",
    title: "The NHS: How Britain Learned to Love Its Health Service",
    country: "United Kingdom",
    flag: "🇬🇧",
    readTime: "6 min read",
    excerpt:
      "Free at the point of use, funded by taxpayers, and fiercely defended. The story of Britain's National Health Service and why it matters to people's health and identity.",
    body: [
      "On 5 July 1948, the British government launched the National Health Service. For the first time, healthcare in Britain was free at the point of use for everyone, paid for out of general taxation. Its founder, politician Aneurin Bevan, called it 'a great and novel undertaking' — and he was right.",
      "Before the NHS, seeing a doctor usually meant paying for it, and many families simply could not afford treatment. The new service changed everything: hospitals, doctors, dentists and medicines were available to all regardless of income. It was a radical idea born in the hardship of the Second World War and the desire to build a fairer country.",
      "Within a few years, the NHS had become something more than a health system — it became a national institution. It has been the birthplace of world-famous breakthroughs, from the world's first CT scan to IVF babies. When the NHS reaches milestones, its birthday is treated almost like a national holiday, and its staff are celebrated as heroes.",
      "Today the NHS faces huge pressures: an ageing population, long waiting lists and difficult funding decisions. Yet polls repeatedly show that it is one of the things Britons are proudest of. For all its struggles, the NHS remains a powerful symbol of what a country can achieve when it decides that health is a right, not a privilege.",
    ],
    links: [
      { label: "BBC — NHS at 60: your stories", url: "https://www.bbc.co.uk/manchester/content/articles/2008/06/17/nhs_60_your_stories_feature.shtml" },
      { label: "BBC News — Health", url: "https://www.bbc.com/news/health" },
    ],
    tasks: [
      "When and why was the NHS created? Summarise in two or three sentences.",
      "What does 'free at the point of use' mean? Explain it to a friend who has never heard of the NHS.",
      "List two famous medical breakthroughs connected to the NHS mentioned in the article.",
      "Why do you think the NHS is so important to British identity? Give your opinion.",
      "Compare how healthcare is organised in the UK with healthcare in your own country.",
    ],
    quiz: [
      {
        q: "The NHS was founded in…",
        options: ["1928", "1948", "1968", "1998"],
        answer: 1,
        explain: "The National Health Service was launched on 5 July 1948.",
      },
      {
        q: "The NHS is free…",
        options: ["at the point of use", "only for the rich", "only at night", "for foreigners only"],
        answer: 0,
        explain: "Healthcare is free at the point of use, paid for through taxation.",
      },
      {
        q: "Who is often called the founder of the NHS?",
        options: ["Winston Churchill", "Aneurin Bevan", "Neville Chamberlain", "Margaret Thatcher"],
        answer: 1,
        explain: "Aneurin Bevan launched the NHS in 1948.",
      },
      {
        q: "The NHS quickly became…",
        options: ["a national institution", "a private company", "a school", "a charity"],
        answer: 0,
        explain: "It became a beloved national institution.",
      },
      {
        q: "Today the NHS faces…",
        options: [
          "an ageing population and funding pressures",
          "a shortage of parks",
          "too many railways",
          "a lack of weather",
        ],
        answer: 0,
        explain: "It faces pressures from an ageing population and funding decisions.",
      },
    ],
  },
];

export interface Question {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export interface Video {
  slug: string;
  title: string;
  source: string;
  country: string;
  flag: string;
  accent: string;
  level: string;
  duration: string;
  url: string; // YouTube video ID
  description: string;
  quiz: Question[];
}

export const videos: Video[] = [
  {
    slug: "bbc-pronunciation",
    title: "Improve Your Pronunciation — Introduction",
    source: "BBC Learning English",
    country: "United Kingdom",
    flag: "🇬🇧",
    accent: "British",
    level: "A2",
    duration: "3:00",
    url: "fdRmGvmeY1U",
    description:
      "A gentle introduction to the sounds of British English — perfect for building a solid foundation before tackling longer clips.",
    quiz: [
      {
        q: "The video focuses on which aspect of English?",
        options: ["Writing essays", "Pronunciation", "Grammar tables", "Spelling rules"],
        answer: 1,
        explain: "This BBC introduction is all about pronunciation and the sounds of English.",
      },
      {
        q: "British English has approximately how many speech sounds?",
        options: ["12", "44", "26", "100"],
        answer: 1,
        explain: "BBC Learning English teaches the 44 sounds of standard British English.",
      },
      {
        q: "Which is the best first step for a beginner?",
        options: [
          "Learning individual sounds first",
          "Memorising idioms first",
          "Reading long novels",
          "Avoiding speaking",
        ],
        answer: 0,
        explain: "Start with individual sounds, then combine them into words and sentences.",
      },
      {
        q: "RP stands for…",
        options: [
          "Received Pronunciation",
          "Real Practice",
          "Royal Press",
          "Rapid Pattern",
        ],
        answer: 0,
        explain: "RP is the standard accent of British English often taught to learners.",
      },
      {
        q: "A 'phoneme' is…",
        options: [
          "a single speech sound",
          "a punctuation mark",
          "a long word",
          "a type of essay",
        ],
        answer: 0,
        explain: "A phoneme is one distinct sound in a language, like /p/ or /iː/.",
      },
      {
        q: "Which activity best helps improve pronunciation?",
        options: [
          "Listening and repeating aloud (shadowing)",
          "Only reading silently",
          "Memorising spelling lists",
          "Writing without speaking",
        ],
        answer: 0,
        explain: "Listening to a model and repeating aloud builds muscle memory for sounds.",
      },
      {
        q: "Minimal pairs (like ship/sheep) help you…",
        options: [
          "hear the difference between similar sounds",
          "memorise new vocabulary",
          "write faster",
          "pass a spelling test",
        ],
        answer: 0,
        explain: "Practising minimal pairs trains your ear to notice small sound differences.",
      },
    ],
  },
  {
    slug: "bbc-scared-to-speak",
    title: "Scared to Speak English? — 6 Minute English",
    source: "BBC Learning English",
    country: "United Kingdom",
    flag: "🇬🇧",
    accent: "British",
    level: "B1",
    duration: "6:48",
    url: "YAsDeXcYyTg",
    description:
      "Why is it so hard to speak a new language? Beth and Pippa discuss the fear of speaking and share useful vocabulary.",
    quiz: [
      {
        q: "The episode is mainly about…",
        options: ["English grammar rules", "The fear of speaking English", "British food", "Pronunciation of vowels"],
        answer: 1,
        explain: "The episode explores why many people feel anxious about speaking a new language.",
      },
      {
        q: "A key tip to reduce the fear of speaking is…",
        options: [
          "Never speak to natives",
          "Practise speaking regularly and accept mistakes",
          "Only memorise grammar",
          "Avoid listening",
        ],
        answer: 1,
        explain: "Regular practice with a focus on communication — not perfection — builds confidence.",
      },
      {
        q: "Which phrase best fits 'to feel very nervous about something'?",
        options: ["To be over the moon", "To get cold feet", "To be on cloud nine", "To bite your tongue"],
        answer: 1,
        explain: "'To get cold feet' means to suddenly feel nervous before doing something.",
      },
      {
        q: "A common reason people fear speaking English is…",
        options: ["the fear of making mistakes", "the weather", "the cost of lessons", "the alphabet"],
        answer: 0,
        explain: "Fear of making mistakes is one of the biggest barriers to speaking.",
      },
      {
        q: "Which is a useful strategy for nervous speakers?",
        options: [
          "Speak even if your English is not perfect",
          "Only speak in writing",
          "Avoid conversations entirely",
          "Memorise whole books",
        ],
        answer: 0,
        explain: "Speaking despite imperfections builds real confidence over time.",
      },
      {
        q: "The more you practise speaking, the…",
        options: ["more confident you become", "fewer words you learn", "more nervous you get", "less you listen"],
        answer: 0,
        explain: "Regular practice gradually reduces anxiety and increases confidence.",
      },
      {
        q: "In the episode, learners should focus mainly on…",
        options: [
          "communication rather than perfection",
          "perfect grammar only",
          "memorising rules",
          "never making any mistake",
        ],
        answer: 0,
        explain: "Communicating ideas matters more than speaking perfectly.",
      },
    ],
  },
  {
    slug: "rachels-american-news",
    title: "American English in Real Life — News Conversation",
    source: "Rachel's English",
    country: "United States",
    flag: "🇺🇸",
    accent: "American",
    level: "B1–B2",
    duration: "14:00",
    url: "NSppwImoW6w",
    description:
      "Follow an American English conversation built around a news topic, with vocabulary training and natural-speed speech.",
    quiz: [
      {
        q: "American speakers often…",
        options: [
          "Pronounce every syllable fully",
          "Use contractions and reduce unstressed sounds",
          "Avoid short forms",
          "Speak very slowly",
        ],
        answer: 1,
        explain: "Connected speech in American English uses contractions and reductions like 'gonna' and 'wanna'.",
      },
      {
        q: "In American English, 'going to' is often reduced to…",
        options: ["gonna", "gotto", "goingta", "gonto"],
        answer: 0,
        explain: "'Gonna' is a common contraction of 'going to' in informal speech.",
      },
      {
        q: "The video trains vocabulary using…",
        options: [
          "Only written texts",
          "Real conversation and news context",
          "Dictionary lists",
          "Grammar drills",
        ],
        answer: 1,
        explain: "Rachel's English teaches vocabulary through real, natural conversation.",
      },
      {
        q: "Rachel's English is a channel for learning…",
        options: [
          "the American accent and conversation",
          "British spelling only",
          "Australian slang",
          "Latin grammar",
        ],
        answer: 0,
        explain: "The channel focuses on American English pronunciation and real conversation.",
      },
      {
        q: "'Wanna' is a contraction of…",
        options: ["want to", "went to", "will not", "would like"],
        answer: 0,
        explain: "'Wanna' is the reduced form of 'want to'.",
      },
      {
        q: "Reductions and contractions make American speech…",
        options: ["faster and more natural", "slower and clearer", "louder", "more formal"],
        answer: 0,
        explain: "Native speakers reduce sounds so that speech flows quickly and naturally.",
      },
      {
        q: "To understand native speakers, you should…",
        options: [
          "listen to natural-speed speech regularly",
          "only read transcripts",
          "avoid real conversations",
          "speak with subtitles only",
        ],
        answer: 0,
        explain: "Regular exposure to natural-speed English trains your ear.",
      },
    ],
  },
  {
    slug: "bbc-news-review-naps",
    title: "Naps: Good for Your Brain? — News Review",
    source: "BBC Learning English",
    country: "United Kingdom",
    flag: "🇬🇧",
    accent: "British",
    level: "B2–C1",
    duration: "8:00",
    url: "Tefu_NvcC0k",
    description:
      "Advanced learners unpack the language of the news: can a nap really boost your brain? Learn high-level vocabulary in context.",
    quiz: [
      {
        q: "News Review helps learners understand…",
        options: [
          "The language used in news reports",
          "How to cook British food",
          "The history of the BBC",
          "Phonetic symbols only",
        ],
        answer: 0,
        explain: "News Review breaks down the real vocabulary and phrases used in news stories.",
      },
      {
        q: "Which word means 'a short sleep during the day'?",
        options: ["A yawn", "A nap", "A snore", "A rest"],
        answer: 1,
        explain: "'A nap' is a short sleep, especially during the day.",
      },
      {
        q: "This episode is best suited for which level?",
        options: ["A1–A2", "B2–C1", "Only native speakers", "Beginners"],
        answer: 1,
        explain: "News Review is designed for upper-intermediate and advanced learners.",
      },
      {
        q: "News Review is a programme from…",
        options: ["BBC Learning English", "NASA", "Netflix", "Harvard"],
        answer: 0,
        explain: "News Review is produced by BBC Learning English.",
      },
      {
        q: "The episode asks whether naps are good for your…",
        options: ["brain", "shoes", "kitchen", "wallet"],
        answer: 0,
        explain: "The title asks if naps can boost your brain.",
      },
      {
        q: "News vocabulary is best learned…",
        options: ["in context", "in alphabetical lists", "by heart without context", "only from dictionaries"],
        answer: 0,
        explain: "Seeing words in real news stories helps you understand how they are used.",
      },
      {
        q: "'To hit the headlines' means…",
        options: [
          "to become widely reported in the news",
          "to break a television",
          "to read quickly",
          "to write an essay",
        ],
        answer: 0,
        explain: "If a story hits the headlines, it appears prominently in the news.",
      },
    ],
  },
  {
    slug: "aussie-accents",
    title: "The 3 Australian Accents",
    source: "Aussie English Podcast",
    country: "Australia",
    flag: "🇦🇺",
    accent: "Australian",
    level: "B2",
    duration: "12:00",
    url: "ZnioDeQNlxQ",
    description:
      "General, cultivated and broad — learn to hear the differences between the main Australian accents with a native host.",
    quiz: [
      {
        q: "How many main Australian accents does the video describe?",
        options: ["One", "Three", "Five", "Ten"],
        answer: 1,
        explain: "The video covers general, cultivated and broad Australian accents.",
      },
      {
        q: "The 'broad' accent is associated with…",
        options: [
          "Very formal speech",
          "A more traditional, rural style",
          "Perfect RP pronunciation",
          "American spelling",
        ],
        answer: 1,
        explain: "The broad accent is the classic 'ocker' style heard in traditional Australian speech.",
      },
      {
        q: "Hearing different accents helps learners because…",
        options: [
          "It makes English harder for no reason",
          "It prepares them for real global English",
          "Accents are not important",
          "It is only about spelling",
        ],
        answer: 1,
        explain: "Recognising different accents builds real-world listening confidence.",
      },
      {
        q: "The most common Australian accent is the…",
        options: ["general accent", "broad accent", "cultivated accent", "American accent"],
        answer: 0,
        explain: "The general accent is spoken by the majority of Australians.",
      },
      {
        q: "The 'cultivated' Australian accent is closest to…",
        options: ["British RP", "American English", "Canadian English", "Irish English"],
        answer: 0,
        explain: "The cultivated accent sounds closest to standard British RP.",
      },
      {
        q: "Australian accents differ mainly in…",
        options: [
          "pronunciation and vowel sounds",
          "the alphabet",
          "punctuation",
          "spelling only",
        ],
        answer: 0,
        explain: "The three accents differ most noticeably in pronunciation and vowel sounds.",
      },
      {
        q: "Listening to several accents prepares you for…",
        options: [
          "meeting English speakers from around the world",
          "only one region of Australia",
          "written exams only",
          "speaking without listening",
        ],
        answer: 0,
        explain: "Real English is global, so flexibility with accents is a huge advantage.",
      },
    ],
  },
  {
    slug: "bbc-lifestyle-mega",
    title: "6 Minute English — Lifestyle Mega-class",
    source: "BBC Learning English",
    country: "United Kingdom",
    flag: "🇬🇧",
    accent: "British",
    level: "B1–B2",
    duration: "60:00",
    url: "b5DOQ7iOzO4",
    description:
      "An hour of new vocabulary across lifestyle topics — a rich library of authentic British English for solid intermediate practice.",
    quiz: [
      {
        q: "A 'mega-class' video is…",
        options: [
          "A long compilation of several lessons",
          "A single very short lesson",
          "A pronunciation drill",
          "A grammar test",
        ],
        answer: 0,
        explain: "It is a one-hour compilation of several 6 Minute English episodes on lifestyle topics.",
      },
      {
        q: "6 Minute English episodes are best for…",
        options: ["Beginners only", "Intermediate learners", "Native speakers", "Children under five"],
        answer: 1,
        explain: "They are designed for learners around B1–B2 level.",
      },
      {
        q: "Using such a compilation is a great way to…",
        options: [
          "Avoid real English",
          "Build vocabulary across many topics",
          "Learn only grammar",
          "Skip listening practice",
        ],
        answer: 1,
        explain: "The variety of topics builds broad, practical vocabulary through listening.",
      },
      {
        q: "6 Minute English comes from…",
        options: ["BBC Learning English", "Netflix", "CNN News", "Oxford University"],
        answer: 0,
        explain: "It is a well-known programme from BBC Learning English.",
      },
      {
        q: "The 'mega-class' covers…",
        options: ["lifestyle topics", "only sports", "cooking recipes", "world capitals"],
        answer: 0,
        explain: "It brings together several episodes on everyday lifestyle topics.",
      },
      {
        q: "A single 6 Minute English episode lasts about…",
        options: ["six minutes", "one hour", "two minutes", "twenty seconds"],
        answer: 0,
        explain: "As the name suggests, each episode is about six minutes long.",
      },
      {
        q: "Watching a long compilation is good for…",
        options: [
          "varied, extended listening practice",
          "avoiding real speech",
          "short-term memory only",
          "learning one word",
        ],
        answer: 0,
        explain: "Extended listening across topics builds stamina and a wide vocabulary.",
      },
    ],
  },
];

export interface AudioTrack {
  slug: string;
  title: string;
  country: string;
  flag: string;
  duration: string;
  level: string;
  kind: "practice" | "radio";
  description: string;
  url?: string; // direct live-stream URL for radio tracks
  link?: string; // official station / podcast page
  quiz?: Question[]; // comprehension quiz for practice tracks
}

// Practice tracks: short comprehension exercises (placeholder players).
export const audioPractice: AudioTrack[] = [
  {
    slug: "tube-gist",
    title: "Tube Announcement — Gist Listening",
    country: "United Kingdom",
    flag: "🇬🇧",
    duration: "2:05",
    level: "B1",
    kind: "practice",
    description: "Identify key information in a London context.",
    quiz: [
      {
        q: "The main skill trained here is…",
        options: ["Spelling", "Listening for gist", "Pronunciation of vowels", "Writing essays"],
        answer: 1,
        explain: "Gist listening means catching the main idea rather than every word.",
      },
      {
        q: "On the London Underground you will hear…",
        options: ["Only music", "Safety announcements", "No announcements", "Only music videos"],
        answer: 1,
        explain: "Tube announcements give safety and route information.",
      },
      {
        q: "Where is this announcement typically heard?",
        options: ["At the airport", "On the train platform", "At a bakery", "In a library"],
        answer: 1,
        explain: "Gist listening about transport happens on platforms and trains.",
      },
      {
        q: "In gist listening, you focus on…",
        options: ["the main idea", "every single word", "spelling", "punctuation"],
        answer: 0,
        explain: "Gist listening is about understanding the overall message.",
      },
      {
        q: "Which is NOT a typical Tube announcement?",
        options: [
          "The next station",
          "Please mind the gap",
          "Today's weather forecast",
          "This train terminates here",
        ],
        answer: 2,
        explain: "Weather forecasts are not part of Tube announcements.",
      },
      {
        q: "'Mind the gap' warns passengers about…",
        options: [
          "the gap between the train and the platform",
          "a closed shop",
          "a gap in the timetable",
          "an empty carriage",
        ],
        answer: 0,
        explain: "It warns about the space between the train door and the platform edge.",
      },
      {
        q: "To listen for gist, you…",
        options: [
          "do not need to understand every word",
          "must translate every word",
          "must pause after each sentence",
          "need subtitles",
        ],
        answer: 0,
        explain: "Gist listening trains you to follow the meaning without catching everything.",
      },
    ],
  },
  {
    slug: "american-smalltalk",
    title: "American Podcast — Small Talk",
    country: "United States",
    flag: "🇺🇸",
    duration: "2:40",
    level: "B1",
    kind: "practice",
    description: "Natural-speed small talk with contractions and reductions.",
    quiz: [
      {
        q: "American small talk often uses…",
        options: ["Formal titles", "Contractions and reductions", "Only written English", "Silence"],
        answer: 1,
        explain: "Everyday American speech is full of contractions like gonna and wanna.",
      },
      {
        q: "'How's it going?' is…",
        options: ["A grammar test", "A friendly greeting", "A goodbye", "A question about work"],
        answer: 1,
        explain: "It is a common informal way to greet someone.",
      },
      {
        q: "Good small talk topics for a stranger include…",
        options: ["Salary details", "The weather", "Bank passwords", "Home addresses"],
        answer: 1,
        explain: "Safe, neutral topics like the weather are classic small talk.",
      },
      {
        q: "'Wanna' is short for…",
        options: ["want to", "will not", "went to", "would like"],
        answer: 0,
        explain: "'Wanna' is a reduction of 'want to'.",
      },
      {
        q: "Which topics are best to AVOID in small talk?",
        options: [
          "Personal or private questions",
          "The weather",
          "Weekend plans",
          "A favourite film",
        ],
        answer: 0,
        explain: "Personal or private questions can make strangers uncomfortable.",
      },
      {
        q: "To keep a conversation going, you should…",
        options: ["ask follow-up questions", "answer with one word", "walk away", "talk about money"],
        answer: 0,
        explain: "Follow-up questions show interest and keep the chat flowing.",
      },
      {
        q: "In American small talk, people often…",
        options: [
          "reduce and link sounds quickly",
          "pause for a long time",
          "avoid contractions",
          "speak very formally",
        ],
        answer: 0,
        explain: "Natural American small talk is fast and full of linked, reduced sounds.",
      },
    ],
  },
  {
    slug: "canadian-interview",
    title: "Canadian Interview — The 'Eh' Factor",
    country: "Canada",
    flag: "🇨🇦",
    duration: "3:10",
    level: "B2",
    kind: "practice",
    description: "Listen for politeness and the characteristic 'eh' tag.",
    quiz: [
      {
        q: "What does 'eh' often signal in Canadian English?",
        options: ["Anger", "Seeking agreement", "A formal request", "An apology"],
        answer: 1,
        explain: "'Eh' is used to seek agreement or confirmation in a friendly way.",
      },
      {
        q: "Canadian speakers are often described as…",
        options: ["Rude", "Very polite", "Silent", "Aggressive"],
        answer: 1,
        explain: "Politeness and softening are common features of Canadian speech.",
      },
      {
        q: "This task mostly trains…",
        options: ["Reading speed", "Listening for politeness and register", "Typing", "Spelling"],
        answer: 1,
        explain: "The focus is noticing politeness, tags and register in spoken English.",
      },
      {
        q: "'Eh' can be added to the end of a…",
        options: ["statement", "silence", "question only", "paragraph"],
        answer: 0,
        explain: "Speakers add 'eh' to a statement to invite agreement.",
      },
      {
        q: "Canadian politeness often includes…",
        options: ["softeners and polite tags", "loud commands", "abrupt answers", "formal titles only"],
        answer: 0,
        explain: "Softeners and tag questions make requests sound more polite.",
      },
      {
        q: "Canadian English sounds closest to…",
        options: ["American English", "Australian English", "Scottish English", "Indian English"],
        answer: 0,
        explain: "Canadian English is very close to American English in pronunciation.",
      },
      {
        q: "Tag questions (like '…, isn't it?') are used to…",
        options: ["invite agreement", "end a call", "show anger", "give an order"],
        answer: 0,
        explain: "Tag questions invite the listener to agree and keep the conversation polite.",
      },
    ],
  },
  {
    slug: "aussie-idioms",
    title: "Idioms Down Under",
    country: "Australia",
    flag: "🇦🇺",
    duration: "2:15",
    level: "B2",
    kind: "practice",
    description: "Common Aussie expressions in short clips.",
    quiz: [
      {
        q: "'G'day' means…",
        options: ["Goodbye", "Hello", "Thank you", "Sorry"],
        answer: 1,
        explain: "'G'day' is the classic Aussie greeting.",
      },
      {
        q: "'Arvo' is short for…",
        options: ["Afternoon", "A car", "A beach", "A relative"],
        answer: 0,
        explain: "Australians love abbreviations: arvo = afternoon.",
      },
      {
        q: "Using slang like 'barbie' makes your English sound…",
        options: ["Very formal", "More informal and natural", "More academic", "Old-fashioned"],
        answer: 1,
        explain: "Informal slang is natural in casual Australian conversation.",
      },
      {
        q: "'Mate' in Australia usually means…",
        options: ["friend", "enemy", "boss", "teacher"],
        answer: 0,
        explain: "'Mate' is a friendly word for a friend or companion.",
      },
      {
        q: "'Brekkie' is short for…",
        options: ["breakfast", "brick", "breakfast and lunch", "a holiday"],
        answer: 0,
        explain: "'Brekkie' is the Aussie abbreviation for breakfast.",
      },
      {
        q: "Australian English is famous for using…",
        options: ["many abbreviations", "very long words", "no slang", "formal titles"],
        answer: 0,
        explain: "Australians shorten many words, especially in casual speech.",
      },
      {
        q: "Aussie slang is most appropriate in…",
        options: ["informal or casual settings", "a formal job interview", "a court of law", "official documents"],
        answer: 0,
        explain: "Slang suits casual conversation, not formal situations.",
      },
    ],
  },
  {
    slug: "bbc-news-vocab",
    title: "News Review — Vocabulary in the News",
    country: "United Kingdom",
    flag: "🇬🇧",
    duration: "3:30",
    level: "B2–C1",
    kind: "practice",
    description: "High-level vocabulary taken from real news stories.",
    quiz: [
      {
        q: "This task focuses on…",
        options: ["News vocabulary in context", "Simple greetings", "Spelling rules", "Punctuation"],
        answer: 0,
        explain: "News Review unpacks high-level vocabulary used in the news.",
      },
      {
        q: "A word meaning 'a short sleep' is…",
        options: ["A yawn", "A nap", "A walk", "A meal"],
        answer: 1,
        explain: "'A nap' is a short sleep during the day.",
      },
      {
        q: "This level of vocabulary is best for…",
        options: ["Complete beginners", "Upper-intermediate and advanced learners", "Children", "Only native speakers"],
        answer: 1,
        explain: "News vocabulary suits B2–C1 learners.",
      },
      {
        q: "News Review vocabulary is most useful for…",
        options: [
          "understanding reports and articles",
          "ordering a coffee",
          "talking to pets",
          "writing poems only",
        ],
        answer: 0,
        explain: "This vocabulary helps you follow and discuss the news.",
      },
      {
        q: "'To make headlines' means…",
        options: [
          "to be reported in the news",
          "to write a title",
          "to draw a picture",
          "to read a paper",
        ],
        answer: 0,
        explain: "A story that makes headlines is widely reported.",
      },
      {
        q: "News vocabulary is best learned…",
        options: ["in context", "in a random list", "without meaning", "by memorising one word"],
        answer: 0,
        explain: "Context shows how and when the words are actually used.",
      },
      {
        q: "The source of this audio is…",
        options: ["BBC Learning English", "Netflix", "NASA", "Wikipedia"],
        answer: 0,
        explain: "It comes from BBC Learning English's News Review.",
      },
    ],
  },
];

// Live radio: real, stable public streams with official links.
export const audioRadio: AudioTrack[] = [
  {
    slug: "bbc-world-service",
    title: "BBC World Service — Live News",
    country: "United Kingdom",
    flag: "🇬🇧",
    duration: "Live",
    level: "B2–C1",
    kind: "radio",
    description: "Live 24/7 world news in clear, authoritative British English.",
    url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    link: "https://www.bbc.co.uk/sounds/play/live:bbc_world_service",
  },
  {
    slug: "npr-news",
    title: "NPR News — Live Talk Radio",
    country: "United States",
    flag: "🇺🇸",
    duration: "Live",
    level: "B2–C1",
    kind: "radio",
    description: "American talk radio and news at natural native speed.",
    url: "https://npr-ice.streamguys1.com/live.mp3",
    link: "https://www.npr.org/",
  },
  {
    slug: "cbc-radio-one",
    title: "CBC Radio One — Canadian Voices",
    country: "Canada",
    flag: "🇨🇦",
    duration: "Live",
    level: "B2–C1",
    kind: "radio",
    description: "Canadian public radio with a famously polite, clear accent.",
    url: "https://cbcradiolive.akamaized.net/hls/live/2041036/ES_R1ETR/master.m3u8",
    link: "https://www.cbc.ca/listen/live-radio",
  },
  {
    slug: "abc-radio-australia",
    title: "ABC Radio Australia — Pacific Voices",
    country: "Australia",
    flag: "🇦🇺",
    duration: "Live",
    level: "B2–C1",
    kind: "radio",
    description: "Australian English, news and culture from ABC International.",
    link: "https://www.abc.net.au/listen/live/radioaustralia",
  },
];

export const audio: AudioTrack[] = [...audioPractice, ...audioRadio];

export interface Quiz {
  id: string;
  title: string;
  country: string;
  flag: string;
  countryKey: string;
  category: "lesson" | "video" | "audio";
  level: string;
  resource?: string;
  questions: Question[];
}

const countryKeyOf = (name: string): string => {
  const map: Record<string, string> = {
    "United States": "usa",
    Canada: "canada",
    "New Zealand": "new-zealand",
    Australia: "australia",
    "United Kingdom": "uk",
  };
  return map[name] ?? "uk";
};

export const lessonQuizzes: Quiz[] = [
  {
    id: "uk-culture",
    title: "British Culture",
    country: "United Kingdom",
    flag: "🇬🇧",
    countryKey: "uk",
    category: "lesson",
    level: "B1–B2",
    questions: [
      {
        q: "How many nations make up the United Kingdom?",
        options: ["Three", "Four", "Five", "Six"],
        answer: 1,
        explain: "The UK is made up of England, Scotland, Wales and Northern Ireland.",
      },
      {
        q: "Which of these is NOT one of the four nations of the UK?",
        options: ["Scotland", "Wales", "Northern Ireland", "The Republic of Ireland"],
        answer: 3,
        explain: "The Republic of Ireland is a separate country; the UK includes Northern Ireland.",
      },
      {
        q: "Multicultural Britain is often described as a…",
        options: ["melting pot", "salad bowl", "soup", "smoothie"],
        answer: 1,
        explain: "The 'salad bowl' image shows cultures keeping their identity while mixing together.",
      },
      {
        q: "When a British person says 'sorry' while passing someone, they usually…",
        options: ["apologise for a mistake", "want to get attention politely", "are angry", "are ending a call"],
        answer: 1,
        explain: "'Sorry' is often just a polite way to get someone's attention or pass by.",
      },
      {
        q: "A classic, safe British small-talk topic is…",
        options: ["the weather", "salary", "politics", "religion"],
        answer: 0,
        explain: "Talking about the weather is a famously safe way to start a British conversation.",
      },
      {
        q: "British humour often relies on…",
        options: ["understatement and irony", "shouting", "mime", "drumming"],
        answer: 0,
        explain: "Understatement and irony are key features of British humour.",
      },
      {
        q: "'Mind the gap' is a famous announcement heard on the…",
        options: ["Underground", "bus", "ferry", "aeroplane"],
        answer: 0,
        explain: "It warns passengers about the gap between the train and the platform.",
      },
    ],
  },
  {
    id: "us-culture",
    title: "American Culture",
    country: "United States",
    flag: "🇺🇸",
    countryKey: "usa",
    category: "lesson",
    level: "A2–B2",
    questions: [
      {
        q: "Thanksgiving is celebrated on the fourth ___ of November.",
        options: ["Thursday", "Friday", "Saturday", "Monday"],
        answer: 0,
        explain: "It falls on the fourth Thursday of November every year.",
      },
      {
        q: "The 1621 harvest feast was shared with which people?",
        options: ["The Cherokee", "The Wampanoag", "The Inuit", "The Māori"],
        answer: 1,
        explain: "English settlers in Plymouth shared the feast with the Wampanoag people.",
      },
      {
        q: "Which two US states are compared in the 'California vs Texas' lesson?",
        options: ["California and New York", "California and Texas", "Texas and Florida", "Texas and Alaska"],
        answer: 1,
        explain: "The lesson compares the cultures and lifestyles of California and Texas.",
      },
      {
        q: "Thanksgiving became a national holiday in 1863 under which president?",
        options: ["Washington", "Lincoln", "Roosevelt", "Kennedy"],
        answer: 1,
        explain: "Abraham Lincoln made Thanksgiving a national holiday during the Civil War.",
      },
      {
        q: "The American Dream is the idea that…",
        options: [
          "success is possible through hard work",
          "only rich people succeed",
          "everyone must live in cities",
          "dreams happen only at night",
        ],
        answer: 0,
        explain: "It is the belief that anyone can achieve success through effort and opportunity.",
      },
      {
        q: "In fast American speech, 'going to' often becomes…",
        options: ["gonna", "goingto", "gotto", "gunna"],
        answer: 0,
        explain: "'Gonna' is a common contraction of 'going to' in spoken American English.",
      },
      {
        q: "A typical friendly American greeting to a stranger is…",
        options: ["How do you do?", "Hey, how's it going?", "Enchanté", "Fare thee well"],
        answer: 1,
        explain: "'How's it going?' is a common, friendly American greeting.",
      },
    ],
  },
  {
    id: "canada-culture",
    title: "Canadian Culture",
    country: "Canada",
    flag: "🇨🇦",
    countryKey: "canada",
    category: "lesson",
    level: "B1–B2",
    questions: [
      {
        q: "Canada is often described as a…",
        options: ["melting pot", "mosaic", "salad plate", "cauldron"],
        answer: 1,
        explain: "Canada calls itself a mosaic, where cultures keep their identity while living together.",
      },
      {
        q: "The tag 'eh' is typically used to…",
        options: ["show anger", "seek agreement or confirmation", "give a formal order", "say goodbye"],
        answer: 1,
        explain: "'Eh' is famously used in Canadian English to seek agreement.",
      },
      {
        q: "Which three Indigenous groups live in Canada?",
        options: [
          "First Nations, Métis and Inuit",
          "Māori, Māori and Māori",
          "Aboriginal, Torres and Strait",
          "Celts, Gaels and Picts",
        ],
        answer: 0,
        explain: "The three recognised groups are First Nations, Métis and Inuit.",
      },
      {
        q: "Which sport is sometimes called 'Canada's religion'?",
        options: ["Soccer", "Hockey", "Baseball", "Cricket"],
        answer: 1,
        explain: "Ice hockey is deeply connected to Canadian identity.",
      },
      {
        q: "Canada's two official languages are…",
        options: ["English and Spanish", "English and French", "French and German", "English and Italian"],
        answer: 1,
        explain: "Canada is officially bilingual in English and French.",
      },
      {
        q: "'Truth and Reconciliation' is about…",
        options: [
          "acknowledging the residential-school history",
          "building more hospitals",
          "changing the national anthem",
          "naming new provinces",
        ],
        answer: 0,
        explain: "It is a national effort to face the past and build a fairer future with Indigenous Peoples.",
      },
      {
        q: "Which spelling does Canada typically use?",
        options: ["color", "colour", "kalor", "koulour"],
        answer: 1,
        explain: "Canada uses British spellings like 'colour'.",
      },
    ],
  },
  {
    id: "australia-culture",
    title: "Australian Culture",
    country: "Australia",
    flag: "🇦🇺",
    countryKey: "australia",
    category: "lesson",
    level: "B1–B2",
    questions: [
      {
        q: "Aboriginal Australians have the world's ___ culture.",
        options: ["newest", "oldest living", "smallest", "most written"],
        answer: 1,
        explain: "Aboriginal culture is recognised as the oldest continuous living culture on earth.",
      },
      {
        q: "Australia Day is celebrated on…",
        options: ["25 December", "26 January", "1 May", "14 February"],
        answer: 1,
        explain: "It falls on 26 January every year.",
      },
      {
        q: "Many Aboriginal Australians call 26 January…",
        options: ["Invasion Day or a Day of Mourning", "Australia's birthday", "Family Day", "New Year's Day"],
        answer: 0,
        explain: "For many First Nations people, the date marks the start of colonisation and loss.",
      },
      {
        q: "The First Fleet arrived in Sydney in…",
        options: ["1688", "1788", "1888", "1988"],
        answer: 1,
        explain: "The First Fleet of British ships arrived in Sydney Cove in 1788.",
      },
      {
        q: "'G'day' means…",
        options: ["Goodbye", "Hello", "Thank you", "Sorry"],
        answer: 1,
        explain: "'G'day' is the classic Aussie greeting for 'good day'.",
      },
      {
        q: "'Arvo' is short for…",
        options: ["Afternoon", "A relative", "A beach", "A car"],
        answer: 0,
        explain: "Australians love abbreviations: arvo = afternoon.",
      },
      {
        q: "Which feature is often linked to the 'Australian character'?",
        options: [
          "The influence of nature and the bush",
          "A love of formal ceremony",
          "Reserved manners",
          "A very cold climate",
        ],
        answer: 0,
        explain: "The landscape — from the bush to the beach — shapes how Australians see themselves.",
      },
    ],
  },
  {
    id: "new-zealand-culture",
    title: "New Zealand Culture",
    country: "New Zealand",
    flag: "🇳🇿",
    countryKey: "new-zealand",
    category: "lesson",
    level: "B1–B2",
    questions: [
      {
        q: "New Zealand is also known by the Māori name…",
        options: ["Kiwiland", "Aotearoa", "Australasia", "Te Reo"],
        answer: 1,
        explain: "'Aotearoa' is the Māori name for New Zealand, meaning 'land of the long white cloud'.",
      },
      {
        q: "A 'Kiwi' is…",
        options: [
          "only a fruit",
          "a bird and a nickname for New Zealanders",
          "a type of boat",
          "a rugby ball",
        ],
        answer: 1,
        explain: "'Kiwi' refers to the native bird and is also the nickname for New Zealanders.",
      },
      {
        q: "The haka is a traditional…",
        options: ["Māori dance", "cooking dish", "weather forecast", "voting system"],
        answer: 0,
        explain: "The haka is a traditional Māori performance combining dance, song and rhythm.",
      },
      {
        q: "The All Blacks perform the haka before…",
        options: ["elections", "rugby matches", "concerts", "exams"],
        answer: 1,
        explain: "New Zealand's national rugby team performs the haka before matches.",
      },
      {
        q: "In 2024, Māori members of parliament performed a haka to…",
        options: ["celebrate a holiday", "protest a bill", "welcome visitors", "close a session"],
        answer: 1,
        explain: "They performed a haka to protest a bill they felt threatened Māori rights.",
      },
      {
        q: "Māori (te reo Māori) is…",
        options: [
          "an official language of New Zealand",
          "only spoken in Australia",
          "a dead language",
          "the same as Hawaiian",
        ],
        answer: 0,
        explain: "Māori is an official language of New Zealand alongside English.",
      },
      {
        q: "New Zealand is especially famous for protecting its…",
        options: ["nature and wildlife", "car factories", "high-rise cities", "deserts"],
        answer: 0,
        explain: "New Zealand is known for its 'clean green' image and conservation efforts.",
      },
    ],
  },
];

export const videoQuizzes: Quiz[] = videos.map((v) => ({
  id: `video-${v.slug}`,
  title: `Video · ${v.title}`,
  country: v.country,
  flag: v.flag,
  countryKey: countryKeyOf(v.country),
  category: "video" as const,
  level: v.level,
  resource: v.slug,
  questions: v.quiz,
}));

export const audioQuizzes: Quiz[] = audioPractice
  .filter((a) => a.quiz)
  .map((a) => ({
    id: `audio-${a.slug}`,
    title: `Audio · ${a.title}`,
    country: a.country,
    flag: a.flag,
    countryKey: countryKeyOf(a.country),
    category: "audio" as const,
    level: a.level,
    resource: a.slug,
    questions: a.quiz!,
  }));

export const quizzes: Quiz[] = [...lessonQuizzes, ...videoQuizzes, ...audioQuizzes];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lesson-plans", label: "Lesson Plans" },
  { href: "/articles", label: "Articles" },
  { href: "/videos", label: "Videos" },
  { href: "/audio", label: "Audio" },
  { href: "/quizzes", label: "Quizzes" },
  { href: "/support", label: "Support" },
  { href: "/chat", label: "Chat" },
];
