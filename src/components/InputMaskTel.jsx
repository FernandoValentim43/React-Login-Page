import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <InputMask mask="(99) 99999 9999" />
      <p className="error">{props.error}</p>
    </>
  );
};

export default MaskedInput;
