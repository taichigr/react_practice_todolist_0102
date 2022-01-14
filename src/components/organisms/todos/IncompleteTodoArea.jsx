import { PrimaryButton } from "../../atoms/buttons/PrimaryButton"
import { TodoAreaWraper } from "../TodoAreaWraper"

export const IncompleteTodoArea = (props) => {
  const {incompleteTodos,setIncompleteTodos, onClickToCompleteList, onClickDelete} = props
  return (
    <TodoAreaWraper title="incomplete Todos">
                {incompleteTodos.map((todo, index) => (
                  <ul key={index}>
                    <li>{todo}</li>
                    <li>
                      <PrimaryButton 
                        onClick={() => onClickToCompleteList(index)}
                        >完了
                      </PrimaryButton>
                    </li>
                    <li>
                      <PrimaryButton 
                        onClick={() => onClickDelete(index, incompleteTodos, setIncompleteTodos)}
                        >削除
                      </PrimaryButton>
                    </li>
                  </ul>
                ))}
          </TodoAreaWraper>
  )
}