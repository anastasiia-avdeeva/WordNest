import { useState } from "react";
import {
  words,
  WORD_TABLE_HEADER_CELLS,
} from "../../common/constants/constants";
import { HeaderRow } from "../UI/HeaderRow/HeaderRow";
import { sortByName } from "../../common/utils/stringUtils";
import styles from "./WordTable.module.scss";
import { WordTableRow } from "./WordTableRow/WordTableRow";

export const WordTable = () => {
  const [wordsList, setWordsList] = useState(sortByName(words));
  const [editedRowId, setEditedRowId] = useState(null);

  const handleEdit = (id) => setEditedRowId(id);
  const handleCancel = () => setEditedRowId(null);
  const handleDelete = (id) =>
    setWordsList((prevWordsLst) =>
      prevWordsLst.filter((word) => word.id !== id)
    );

  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <HeaderRow headerCells={WORD_TABLE_HEADER_CELLS} />
      </thead>
      <tbody className={styles.table__body}>
        {wordsList.map((word, index) => (
          <WordTableRow
            key={word.id}
            word={word}
            index={index}
            editedRowId={editedRowId}
            handleEdit={() => handleEdit(word.id)}
            handleCancel={() => handleCancel(word.id)}
            handleDelete={() => handleDelete(word.id)}
          />
        ))}
      </tbody>
    </table>
  );
};
