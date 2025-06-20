import { CommonRow } from "../CommonRow/CommonRow";
import { EditableRow } from "../EditableRow/EditableRow";

export const TableRow = ({
  word,
  index,
  editedRowId,
  onEdit,
  onCancel,
  onDelete,
  onSave,
}) => {
  return editedRowId !== word.id ? (
    <CommonRow word={word} index={index} onEdit={onEdit} onDelete={onDelete} />
  ) : (
    <EditableRow
      word={word}
      index={index}
      onCancel={onCancel}
      onSave={onSave}
    />
  );
};
