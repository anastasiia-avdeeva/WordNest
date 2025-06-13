import { CommonTableRow } from "../CommonTableRow/CommonTableRow";
import { EditTableRow } from "../EditTableRow/EditTableRow";

export const WordTableRow = ({
  word,
  index,
  editedRowId,
  onEdit,
  onCancel,
  onDelete,
  onSave,
}) => {
  return editedRowId !== word.id ? (
    <CommonTableRow
      word={word}
      index={index}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  ) : (
    <EditTableRow
      word={word}
      index={index}
      onCancel={onCancel}
      onSave={onSave}
    />
  );
};
