import { WordTableRow } from "../WordTableRow/WordTableRow";
import { EditTableRow } from "../EditTableRow/EditTableRow";
import styles from "./WordTableBody.module.scss";

export const WordTableBody = ({ array, itemOnEdit }) => {
  return (
    <tbody className={styles.table__body}>
      {array.map(({ id, ...rest }, index) =>
        id === itemOnEdit ? (
          <EditTableRow key={id} word={rest} index={index} />
        ) : (
          <WordTableRow key={id} word={rest} index={index} />
        )
      )}
    </tbody>
  );
};
