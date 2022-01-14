import React from "react";
import styled from "styled-components";

export const InputText = (props) => {
  const {value, onChange, inputFlag} = props;
  console.log(inputFlag)
  return (
    <>
      <SInput 
        type="text" 
        value={value} 
        placeholder="text" 
        autoFocus 
        onChange={onChange} 
        disabled={false}
      />    
    </>
  )
}

const SInput = styled.input`
border: none;
border-radius: 8px;
padding: 8px 16px;
font-size: 16px;
&: active {
  border: none;
}
`

