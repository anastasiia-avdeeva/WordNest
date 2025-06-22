import { useState } from "react";
import { CardBack } from "./CardBack/CardBack";
import { CardFront } from "./CardFront/CardFront";
import styles from "./WordCard.module.scss";
import classNames from "classnames";

export const WordCard = ({ word, flipped = false }) => {
  const [isFlipped, setIsFlipped] = useState(flipped);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };
  return (
    <div
      className={classNames(styles.card, isFlipped && styles.flip)}
      onClick={handleClick}
    >
      <div className={styles.card__inner}>
        <CardFront word={word} />
        <CardBack word={word} />
      </div>
    </div>
  );
};
