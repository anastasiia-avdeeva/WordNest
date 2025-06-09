import { ActionsCell } from "../ActionsCell/ActionsCell";
import styles from "./CommonTableRow.module.scss";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";

export const CommonTableRow = ({ index, word, handleEdit, handleDelete }) => {
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
          actions={[
            {
              variant: BTN_VARIANTS.PRIMARY,
              content: "Редактировать",
              onClick: handleEdit,
            },
            {
              variant: BTN_VARIANTS.DANGER,
              content: "Удалить",
              onClick: handleDelete,
            },
          ]}
        />
      </td>
    </tr>
  );
};
