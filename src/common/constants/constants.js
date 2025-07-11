export const words = [
  {
    id: 1,
    word: "apple",
    transcription: "['æp.əl]",
    translation: "яблоко",
    theme: "Еда",
  },
  {
    id: 2,
    word: "book",
    transcription: "[bʊk]",
    translation: "книга",
    theme: "Учёба",
  },
  {
    id: 3,
    word: "dog",
    transcription: "[dɒg]",
    translation: "собака",
    theme: "Животные",
  },
  {
    id: 4,
    word: "sun",
    transcription: "[sʌn]",
    translation: "солнце",
    theme: "Природа",
  },
  {
    id: 5,
    word: "butterfly",
    transcription: "[ˈbʌt.ə.flaɪ]",
    translation: "бабочка",
    theme: "Животные",
  },
  {
    id: 6,
    word: "water",
    transcription: "[ˈwɔː.tər]",
    translation: "вода",
    theme: "Природа",
  },
  {
    id: 7,
    word: "carrot",
    transcription: "[ˈkær.ət]",
    translation: "морковь",
    theme: "Еда",
  },
  {
    id: 8,
    word: "school",
    transcription: "[skuːl]",
    translation: "школа",
    theme: "Учёба",
  },
  {
    id: 9,
    word: "cat",
    transcription: "[kæt]",
    translation: "кот",
    theme: "Животные",
  },
  {
    id: 10,
    word: "cloud",
    transcription: "[klaʊd]",
    translation: "облако",
    theme: "Природа",
  },
];

export const WORD_TABLE_HEADER_CELLS = [
  "№",
  "Cлово",
  "Транскрипция",
  "Перевод",
  "Тема",
  "Управление",
];

export const wordTableInputProps = [
  {
    id: 1,
    name: "transcription",
    placeholder: "Транскрипция",
  },
  {
    id: 2,
    name: "translation",
    placeholder: "Перевод",
  },
  {
    id: 3,
    name: "theme",
    placeholder: "Тема",
  },
];

export const navBarItems = [
  { id: 1, name: "Главная", href: "/" },
  { id: 2, name: "Тренировка", href: "/game" },
  { id: 3, name: "Все слова", href: "/all-words" },
  { id: 4, name: "Выученные слова", href: "/learned-words" },
];
