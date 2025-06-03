import { ActionsCell } from "../ActionsCell/ActionsCell";
import styles from "./CommonTableRow.module.scss";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";

export const CommonTableRow = ({ index, word }) => {
  return (
    <tr className={styles.table__row}>
      <td className={styles.table__cell}>{index + 1}</td>
      <td className={styles.table__cell}>{capitalizeStr(word.word)}</td>
      <td className={styles.table__cell}>
        {capitalizeStr(word.transcription)}
      </td>
      <td className={styles.table__cell}>{capitalizeStr(word.translation)}</td>
      <td className={styles.table__cell}>{capitalizeStr(word.theme)}</td>
      <td className={styles.table__cell}>
        <ActionsCell
          btnVariant1={BTN_VARIANTS.PRIMARY}
          btnVariant2={BTN_VARIANTS.DANGER}
          btnText1="Редактировать"
          btnText2="Удалить"
        />
      </td>
    </tr>
  );
};
