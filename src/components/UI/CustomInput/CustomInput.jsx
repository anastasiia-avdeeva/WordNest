import React from "react";

export const CustomInput = ({ classInput, classMsg, ...rest }) => {
  return (
    <>
      <input className={classInput} {...rest} />
      <p className={classMsg}>Invalid input</p>
    </>
  );
};
