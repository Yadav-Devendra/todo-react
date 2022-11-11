import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
//import uuidv4 from "uuid/v4"

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    setTodos(prevTodos => {
      return [...prevTodos, {id: 0, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
