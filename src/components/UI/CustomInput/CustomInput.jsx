import React from "react";

export const CustomInput = ({ classInput, classMsg, showError, ...rest }) => {
  return (
    <>
      <input className={classInput} {...rest} />
      {showError && (
        <p className={classMsg}>Пожалуйста, введите новое значение</p>
      )}
    </>
  );
};
