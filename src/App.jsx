import { useCallback, useState } from "react";
import { PrimaryButton } from "./components/atom/buttons/PrimaryButton";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);


  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodoList = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodoList)
    setTodoText("");
  }

  const onClickToCompleteList = (index) => {
    const newIncompleteList = [...incompleteTodos]
    newIncompleteList.splice(index, 1)
    const newCompleteList = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteList)
    setCompleteTodos(newCompleteList)
  }

  const onClickDelete = (index, todoList, setTodoList) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }


  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <div className="inputArea">
            <input type="text" value={todoText} placeholder="text" autoFocus onChange={(e) => setTodoText(e.target.value)} />
            <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
          </div>
          <div className="todoAreaWraper">
            <h3>incomplete Todo</h3>
            <div className="inompleteTodo">
                {incompleteTodos.map((todo, index) => (
                  <ul key={index}>
                    <li>{todo}</li>
                    <li>
                      <button className="c-button" onClick={() => onClickToCompleteList(index)}>完了</button>
                    </li>
                    <li>
                      <button className="c-button" onClick={() => onClickDelete(index, incompleteTodos, setIncompleteTodos)}>削除</button>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
          <div className="todoAreaWraper">
            <h3>complete Todo</h3>
            <div className="completeTodo">
            {completeTodos.map((todo, index) => (
                  <ul key={index}>
                    <li>{todo}</li>
                    <li>
                      <button className="c-button" onClick={() => onClickDelete(index, completeTodos, setCompleteTodos)}>削除</button>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
