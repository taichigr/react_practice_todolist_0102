import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { TodoAreaWraper } from "../TodoAreaWraper";

export const CompleteTodoArea = (props) => {
  const {completeTodos, setCompleteTodos, onClickDelete} = props;
  return (
    <TodoAreaWraper title="complete Todos">
        {completeTodos.map((todo, index) => (
              <ul key={index}>
                <li>{todo}</li>
                <li>
                  <PrimaryButton onClick={() => onClickDelete(index, completeTodos, setCompleteTodos)}>削除</PrimaryButton>
                </li>
              </ul>
        ))}
    </TodoAreaWraper>
  )
}