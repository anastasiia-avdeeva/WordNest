import cellStyles from "../CommonTableRow/CommonTableRow.module.scss";
import inputStyles from "./EditTableRow.module.scss";
import { ActionsCell } from "../ActionsCell/ActionsCell";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";

export const EditTableRow = ({ index, word }) => {
  return (
    <tr className={cellStyles.table__row}>
      <td className={cellStyles.table__cell}>{index + 1}</td>
      <td className={cellStyles.table__cell}>{capitalizeStr(word.word)}</td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTranscription"
          id="wordTranscription"
          className={inputStyles.table__input}
          placeholder="Транскрипция"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTranslation"
          id="wordTranslation"
          className={inputStyles.table__input}
          placeholder="Перевод"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <input
          type="text"
          name="wordTheme"
          id="wordTheme"
          className={inputStyles.table__input}
          placeholder="Тема"
        />
      </td>
      <td className={cellStyles.table__cell}>
        <ActionsCell
          actions={[
            { variant: BTN_VARIANTS.SUCCESS, content: "Сохранить" },
            { variant: BTN_VARIANTS.DANGER, content: "Отменить" },
          ]}
        />
      </td>
    </tr>
  );
};
