import { useState } from "react";
import { WordCardBack } from "./WordCardBack/WordCardBack";
import { WordCardFront } from "./WordCardFront/WordCardFront";
import styles from "./WordCard.module.scss";
import classNames from "classnames";

export const WordCard = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };
  return (
    <div className={classNames(styles.card, isFlipped && styles.flip)}>
      <div className={styles.card__inner}>
        <WordCardFront word={word} onFlip={handleClick} />
        <WordCardBack word={word} onFlip={handleClick} />
      </div>
    </div>
  );
};
