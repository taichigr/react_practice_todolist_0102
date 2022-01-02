import React from "react";
import styled from "styled-components";

export const PrimaryButton = (props) => {
  const {onClick} = props;
  return (
    <>
      <SButton className="c-button" onClick={onClick}>{props.children}</SButton>
    </>
  )
}

const SButton = styled.button`
  border: none;
  padding: 8px 16px;
  background-color: #ffc87a;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
}
&:hover {
  cursor: pointer;
  opacity: 0.8;
}
`