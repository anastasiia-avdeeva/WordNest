import { CommonTableRow } from "../CommonTableRow/CommonTableRow";
import { EditTableRow } from "../EditTableRow/EditTableRow";

export const WordTableRow = ({
  word,
  index,
  editedRowId,
  handleEdit,
  handleCancel,
  handleDelete,
  handleSave,
}) => {
  return editedRowId !== word.id ? (
    <CommonTableRow
      word={word}
      index={index}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  ) : (
    <EditTableRow
      word={word}
      index={index}
      handleCancel={handleCancel}
      handleSave={handleSave}
    />
  );
};
