import { useState } from "react";
import cellStyles from "../CommonTableRow/CommonTableRow.module.scss";
import inputStyles from "./EditTableRow.module.scss";
import { ActionsCell } from "../ActionsCell/ActionsCell";
import { capitalizeStr } from "../../../common/utils/stringUtils";
import { BTN_VARIANTS } from "../../../common/constants/classConst";
import { wordTableInputProps } from "../../../common/constants/constants";
import { CustomInput } from "../../UI/CustomInput/CustomInput";

export const EditTableRow = ({ index, word, handleCancel, handleSave }) => {
  //states
  const [inputVals, setInputVals] = useState({
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
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setInputVals((prevInputVals) => ({
      ...prevInputVals,
      [name]: value,
    }));

    // setErrors((prevErrs) => ({
    //   ...prevErrs,
    //   [name]: value.trim() === "",
    // }));
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
    console.log(errors);
  };

  const areAllInputsValid = () => {
    return Object.values(errors).every((err) => err === false);
  };

  const saveHandler = () => {
    if (areAllInputsValid()) {
      const trimmedInputs = Object.fromEntries(
        Object.entries(inputVals).map(([key, val]) => [key, val.trim()])
      );
      handleSave(word.id, trimmedInputs);
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
            value={inputVals[input.name]}
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
              onClick: handleCancel,
            },
          ]}
        />
      </td>
    </tr>
  );
};
