import React from "react";
import { words } from "../../common/constants/constants";
import { WordCard } from "../WordCard/WordCard";
import styles from "./WordCards.module.scss";

export const WordCards = () => {
  const [translatedWords, setTranslatedWords] = React.useState([]);

  const handleClick = (id) => {
    if (translatedWords.includes(id)) {
      setTranslatedWords((prevLst) => prevLst.filter((item) => item !== id));
    } else {
      setTranslatedWords((prevLst) => [...prevLst, id]);
    }
  };
  return (
    <div className={styles.cards}>
      {words.map((word) => (
        <WordCard
          key={word.id}
          word={word}
          isTranslated={translatedWords.includes(word.id)}
          onTranslate={() => handleClick(word.id)}
        />
      ))}
    </div>
  );
};
