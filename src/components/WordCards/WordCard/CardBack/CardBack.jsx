import { capitalizeStr } from "../../../../common/utils/stringUtils";
import { TextBtn } from "../../../UI/TextBtn/TextBtn";
import { BTN_VARIANTS } from "../../../../common/constants/classConst";
import cardStyles from "../WordCard.module.scss";

export const CardBack = ({ word }) => {
  return (
    <div className={cardStyles.card__back}>
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
        <p className={`${cardStyles.card__par}`}>
          {capitalizeStr(word.translation)}
        </p>
        <TextBtn variant={BTN_VARIANTS.SUCCESS}>Скрыть перевод</TextBtn>
      </div>
    </div>
  );
};
