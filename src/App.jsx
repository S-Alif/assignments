import { useState } from 'react'
import { useEffect } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import ShowTodos from './components/ShowTodos'

function App() {

  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem("tasks")){
      return JSON.parse(localStorage.getItem('tasks'))
    }else{
      return []
    }
  })

  let addTodos = (todo) => {
    setTodos((todos) => [...todos, todo])
  }
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos));
  })

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks)
    if (tasks) {
      setTodos(tasks);
    }
  }, []);

  return (
    <>
      <Header appName={"basic react todo APP"} />
      <Content addTodo={addTodos} />

      <ShowTodos todos={todos} />
    </>
  )
}

export default App
