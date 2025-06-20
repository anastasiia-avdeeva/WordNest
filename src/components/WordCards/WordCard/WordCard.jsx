import { useState } from "react";
import { CardBack } from "./CardBack/CardBack";
import { CardFront } from "./CardFront/CardFront";
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
        <CardFront word={word} onFlip={handleClick} />
        <CardBack word={word} onFlip={handleClick} />
      </div>
    </div>
  );
};
