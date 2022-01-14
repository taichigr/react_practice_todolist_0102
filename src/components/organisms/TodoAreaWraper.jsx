import styled from "styled-components";

export const TodoAreaWraper = (props) => {
  const { title } = props;

  console.log(title)
  return (
    <STodoAreaWraper className="todoAreaWraper">
        <h3>{ title }</h3>
        {props.children}
    </STodoAreaWraper>
  )
}

const STodoAreaWraper = styled.div`
  background-color: #54486e;
  padding: 20px;
  margin-top: 32px;
  border-radius: 8px;
`