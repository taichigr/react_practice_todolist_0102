// TODO リファクタリング　コンポーネント化
// hooks化

import { useCallback, useEffect, useState } from "react";
import { AlertMessage } from "./components/molecules/AlertMessage";
import { InputArea } from "./components/organisms/inputArea/InputArea";
import { CompleteTodoArea } from "./components/organisms/todos/CompleteTodoArea";
import { IncompleteTodoArea } from "./components/organisms/todos/IncompleteTodoArea";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [inputAlertFlag, setInputAlertFlag] = useState(false);

  const onChangeInput = (e) => setTodoText(e.target.value)

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

  useEffect(() => { 
    incompleteTodos.length >= 5 ? setInputAlertFlag(true): setInputAlertFlag(false)
  }, [incompleteTodos])


  return (
    <div className="App">
        <div className="container">
          <InputArea
            value={todoText}
            onChangeInput={onChangeInput}
            onClickAdd={onClickAdd}
            buttonText="追加"
            inputFlag={inputAlertFlag}
          />
          {inputAlertFlag ? (<AlertMessage message="タスクを消化しましょう" />): ("")}
          
          <IncompleteTodoArea 
            incompleteTodos={incompleteTodos} 
            setIncompleteTodos={setIncompleteTodos} 
            onClickToCompleteList={onClickToCompleteList} 
            onClickDelete={onClickDelete} 
          />

          <CompleteTodoArea 
            completeTodos={completeTodos} 
            setCompleteTodos={setCompleteTodos} 
            onClickDelete={onClickDelete} 
          />
        </div>
      
    </div>
  );
}

export default App;
