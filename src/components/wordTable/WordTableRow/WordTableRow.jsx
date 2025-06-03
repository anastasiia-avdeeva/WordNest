import { CommonTableRow } from "../CommonTableRow/CommonTableRow";
import { EditTableRow } from "../EditTableRow/EditTableRow";

export const WordTableRow = ({ word, index, isOnEdit }) => {
  return isOnEdit ? (
    <EditTableRow word={word} index={index} />
  ) : (
    <CommonTableRow word={word} index={index} />
  );
};
