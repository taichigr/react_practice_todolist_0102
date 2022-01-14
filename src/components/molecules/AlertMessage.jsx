import styled from "styled-components"

export const AlertMessage = (props) => {
  const {message} = props
  return (
    <>
      <SMessage>{message}</SMessage>
    </>
  )
}

const SMessage = styled.p`
font-size: 16px;
color: red;
`