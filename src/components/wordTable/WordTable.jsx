import {
  words,
  WORD_TABLE_HEADER_CELLS,
} from "../../common/constants/constants";
import { HeaderRow } from "../UI/HeaderRow/HeaderRow";
import { sortByName } from "../../common/utils/stringUtils";
import styles from "./WordTable.module.scss";
import { WordTableBody } from "./WordTableBody/WordTableBody";

export const WordTable = () => {
  const onEdit = 3;
  const sortedWords = sortByName(words);
  return (
    <table className={styles.table}>
      <HeaderRow headerCells={WORD_TABLE_HEADER_CELLS} />
      <WordTableBody array={sortedWords} itemOnEdit={onEdit} />
    </table>
  );
};
