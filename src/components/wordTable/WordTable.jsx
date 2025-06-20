import { useState } from "react";
import { WORD_TABLE_HEADER_CELLS } from "../../common/constants/constants";
import { HeaderRow } from "../UI/HeaderRow/HeaderRow";
import { sortByName } from "../../common/utils/stringUtils";
import styles from "./WordTable.module.scss";
import { TableRow } from "./TableRow/TableRow";

export const WordTable = ({ words }) => {
  // states
  const [wordsList, setWordsList] = useState(sortByName(words));
  const [editedRowId, setEditedRowId] = useState(null);

  // btn handlers
  const handleEdit = (id) => setEditedRowId(id);
  const handleCancel = () => setEditedRowId(null);
  const handleDelete = (id) =>
    setWordsList((previousWordsLst) =>
      previousWordsLst.filter((word) => word.id !== id)
    );
  const handleSave = (id, updatedWord) => {
    setWordsList((previousWordsLst) =>
      previousWordsLst.map((word) =>
        word.id === id ? { ...word, ...updatedWord } : word
      )
    );
    setEditedRowId(null);
  };

  return (
    <div className="table-wrapper">
      <table className={styles.table}>
        <thead className={styles.table__header}>
          <HeaderRow headerCells={WORD_TABLE_HEADER_CELLS} />
        </thead>
        <tbody className={styles.table__body}>
          {wordsList.map((word, index) => (
            <TableRow
              key={word.id}
              word={word}
              index={index}
              editedRowId={editedRowId}
              onEdit={() => handleEdit(word.id)}
              onCancel={handleCancel}
              onDelete={() => handleDelete(word.id)}
              onSave={handleSave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
