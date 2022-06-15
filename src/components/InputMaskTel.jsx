import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <InputMask className = {props.tag} mask="(99) 99999 9999" />
      <p className="error">{props.error}</p>
    </div>
  );
};

export default MaskedInput;
