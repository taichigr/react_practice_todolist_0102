import React from "react";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { InputText } from "../../atoms/forms/InputText";

export const InputArea = (props) => {
  const {value, onChangeInput, onClickAdd, buttonText, inputFlag} = props;
  return (
    <>
      <div className="inputArea">
            <InputText 
              value={value} 
              onChange={onChangeInput} 
              inputFlag={inputFlag}
            />
            <PrimaryButton onClick={onClickAdd}>{buttonText}</PrimaryButton>
          </div>
    </>
  )
}