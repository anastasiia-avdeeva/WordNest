import {
  words,
  WORD_TABLE_HEADER_CELLS,
} from "../../common/constants/constants";
import { HeaderRow } from "../UI/HeaderRow/HeaderRow";
import { sortByName } from "../../common/utils/stringUtils";
import styles from "./WordTable.module.scss";
import { WordTableRow } from "./WordTableRow/WordTableRow";

export const WordTable = () => {
  const itemOnEdit = 3;
  const sortedWords = sortByName(words);
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderRow headerCells={WORD_TABLE_HEADER_CELLS} />
      </thead>
      <tbody className={styles.table__body}>
        {sortedWords.map(({ id, ...rest }, index) => (
          <WordTableRow
            key={id}
            word={rest}
            index={index}
            isOnEdit={id === itemOnEdit}
          />
        ))}
      </tbody>
    </table>
  );
};
