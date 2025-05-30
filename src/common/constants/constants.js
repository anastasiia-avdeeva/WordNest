import { NavLink } from "../../components/navItem/NavItem";

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
];

export const wordTableHeaderCells = [
  "Cлово",
  "Транскрипция",
  "Перевод",
  "Тема",
  "Управление",
];

export const navBarItems = [
  { name: "Главная", href: "/" },
  { name: "Все слова", href: "/all-words" },
  { name: "Выученные слова", href: "/learned-words" },
  { name: "Тренировка", href: "/training" },
];
