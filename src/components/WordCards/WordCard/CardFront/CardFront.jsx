import { capitalizeStr } from "../../../../common/utils/stringUtils";
import { TextBtn } from "../../../UI/TextBtn/TextBtn";
import { BTN_VARIANTS } from "../../../../common/constants/classConst";
import cardStyles from "../WordCard.module.scss";

export const CardFront = ({ word, onFlip }) => {
  return (
    <div className={cardStyles.card__front}>
      <div className={cardStyles.card__content}>
        <h2 className={`${cardStyles.card__title}`}>
          {capitalizeStr(word.word)}
        </h2>
        <p
          className={`${cardStyles.card__par} ${cardStyles["card__par--light"]}`}
        >
          {capitalizeStr(word.transcription)}
        </p>
      </div>
      <div className={cardStyles.card__action}>
        <TextBtn variant={BTN_VARIANTS.PRIMARY} onClick={onFlip}>
          Показать перевод
        </TextBtn>
      </div>
    </div>
  );
};
