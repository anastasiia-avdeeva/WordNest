import {
  words,
  WORD_TABLE_HEADER_CELLS,
} from "../../common/constants/constants";
import { HeaderRow } from "../headerRow/HeaderRow";
import { WordTableRow } from "../wordTableRow/WordTableRow";
import { EditTableRow } from "../editTableRow/EditTableRow";
import { sortByName } from "../../common//utils/stringUtils";
import styles from "./WordTable.module.scss";

export const WordTable = () => {
  const onEdit = 3;
  const sortedWords = sortByName(words);
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderRow headerCells={WORD_TABLE_HEADER_CELLS} />
      </thead>
      <tbody className={styles.table__body}>
        {sortedWords.map(({ id, ...rest }, index) =>
          id === onEdit ? (
            <EditTableRow key={id} word={rest} index={index} />
          ) : (
            <WordTableRow key={id} word={rest} index={index} />
          )
        )}
      </tbody>
    </table>
  );
};
