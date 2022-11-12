import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
//import uuidv4 from "uuid/v4"

const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: 0, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
