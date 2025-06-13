import { TextBtn } from "../UI/TextBtn/TextBtn";
import { BTN_VARIANTS } from "../../common/constants/classConst";
import { capitalizeStr } from "../../common/utils/stringUtils";
import styles from "./WordCard.module.scss";
import classNames from "classnames";

export const WordCard = ({ word, isTranslated = false, onTranslate }) => {
  const translationPar = isTranslated ? (
    <p className={styles.card__par}>{capitalizeStr(word.translation)}</p>
  ) : null;
  const btnClass = isTranslated ? BTN_VARIANTS.SUCCESS : BTN_VARIANTS.PRIMARY;
  const btnChild = isTranslated ? "Скрыть перевод" : "Показать перевод";

  return (
    <div className={styles.card}>
      <div className={styles.card__main}>
        <h2 className={styles.card__title}>{capitalizeStr(word.word)}</h2>
        <p className={classNames(styles.card__par, styles["card__par--light"])}>
          {capitalizeStr(word.transcription)}
        </p>
      </div>
      <div className={styles.card__optional}>
        {translationPar}
        <TextBtn variant={btnClass} onClick={onTranslate}>
          {btnChild}
        </TextBtn>
      </div>
    </div>
  );
};
