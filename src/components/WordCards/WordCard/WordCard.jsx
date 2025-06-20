import { useState } from "react";
import { WordCardBack } from "./WordCardBack/WordCardBack";
import { WordCardFront } from "./WordCardFront/WordCardFront";

// import { TextBtn } from "../../UI/TextBtn/TextBtn";
// import { BTN_VARIANTS } from "../../../common/constants/classConst";
// import { capitalizeStr } from "../../../common/utils/stringUtils";
import styles from "./WordCard.module.scss";
import classNames from "classnames";

export const WordCard = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };
  return (
    <div className={classNames(styles.card, isFlipped && styles.flip)}>
      <WordCardFront word={word} onFlip={handleClick} />
      <WordCardBack word={word} onFlip={handleClick} />
    </div>
  );
};

// export const WordCard = ({ word }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const onFlip = () => {
//     setIsFlipped((prevState) => !prevState);
//   };

//   const translationPar = isFlipped ? (
//     <p className={styles.card__par}>{capitalizeStr(word.translation)}</p>
//   ) : null;
//   const btnClass = isFlipped ? BTN_VARIANTS.SUCCESS : BTN_VARIANTS.PRIMARY;
//   const btnChild = isFlipped ? "Скрыть перевод" : "Показать перевод";

//   return (
//     <div
//       className={classNames(
//         styles.card,
//         isFlipped ? styles.card__back : styles.card__front
//       )}
//     >
//       <div className={styles.card__content}>
//         <h2 className={styles.card__title}>{capitalizeStr(word.word)}</h2>
//         <p className={classNames(styles.card__par, styles["card__par--light"])}>
//           {capitalizeStr(word.transcription)}
//         </p>
//       </div>
//       <div className={styles.card__action}>
//         {translationPar}
//         <TextBtn variant={btnClass} onClick={onFlip}>
//           {btnChild}
//         </TextBtn>
//       </div>
//     </div>
//   );
// };
