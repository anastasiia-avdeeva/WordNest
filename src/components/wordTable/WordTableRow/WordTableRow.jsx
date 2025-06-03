import { ActionsCell } from "../ActionsCell/ActionsCell";
import styles from "./WordTableRow.module.scss";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";

export const WordTableRow = ({ index, word }) => {
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

// export const TableRow = ({ array }) => {
//   return (
//     <tr className="table__row">
//       {array.map((value, index) => (
//         <td key={index} className="table__cell">
//           {typeof value === "number" ? value : capitalizeStr(value)}
//         </td>
//       ))}
//       <td className={styles.table__cell}>
//         <ActionsCell
//           btnVariant1={BTN_VARIANTS.PRIMARY}
//           btnVariant2={BTN_VARIANTS.DANGER}
//           btnText1="Редактировать"
//           btnText2="Удалить"
//         />
//       </td>
//     </tr>
//   );
// };
