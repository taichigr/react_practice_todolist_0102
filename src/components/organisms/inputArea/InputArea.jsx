import React from "react";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { InputText } from "../../atoms/forms/InputText";

export const InputArea = (props) => {
  const {value, onChangeInput, onClickAdd, buttonText} = props;
  return (
    <>
      <div className="inputArea">
            <InputText 
              value={value} 
              onChange={onChangeInput} 
            />
            <PrimaryButton onClick={onClickAdd}>{buttonText}</PrimaryButton>
          </div>
    </>
  )
}