import { useState } from "react";
import cellStyles from "../CommonRow/CommonRow.module.scss";
import inputStyles from "./EditableRow.module.scss";
import { ActionsCell } from "../ActionsCell/ActionsCell";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";
import { wordTableInputProps } from "../../../common/constants/constants";
import { CustomInput } from "../../UI/CustomInput/CustomInput";

export const EditableRow = ({ index, word, onCancel, onSave }) => {
  //states
  const [inputValues, setinputValues] = useState({
    transcription: word.transcription || "",
    translation: word.translation || "",
    theme: word.theme || "",
  });

  const [errors, setErrors] = useState({
    transcription: false,
    translation: false,
    theme: false,
  });

  //input handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    setinputValues((previousInputValues) => ({
      ...previousInputValues,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: value.trim() === "",
    }));
  };

  const areAllInputsValid = () => {
    return Object.values(errors).every((error) => error === false);
  };

  const saveHandler = () => {
    if (areAllInputsValid()) {
      const trimmedInputs = Object.fromEntries(
        Object.entries(inputValues).map(([key, val]) => [key, val.trim()])
      );
      onSave(word.id, trimmedInputs);
    }
  };

  return (
    <tr className={cellStyles.table__row}>
      <td className={cellStyles.table__cell}>{index + 1}</td>
      <td className={cellStyles.table__cell}>{capitalizeStr(word.word)}</td>
      {wordTableInputProps.map((input) => (
        <td className={cellStyles.table__cell} key={input.id}>
          <CustomInput
            type="text"
            classInput={inputStyles.table__input}
            classMsg={inputStyles["table__err-msg"]}
            name={input.name}
            placeholder={input.placeholder}
            value={inputValues[input.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            showError={errors[input.name]}
            required
          />
        </td>
      ))}
      <td className={cellStyles.table__cell}>
        <ActionsCell
          actions={[
            {
              variant: BTN_VARIANTS.SUCCESS,
              content: "Сохранить",
              onClick: saveHandler,
              disabled: !areAllInputsValid(),
            },
            {
              variant: BTN_VARIANTS.DANGER,
              content: "Отменить",
              onClick: onCancel,
            },
          ]}
        />
      </td>
    </tr>
  );
};
