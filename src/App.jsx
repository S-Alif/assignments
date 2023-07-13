import { useState } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import ShowTodos from './components/ShowTodos'

function App() {

  const [todos, setTodos] = useState([])

  let addTodos = (todo) => {
    setTodos((todos) => [...todos, todo])
  }

  return (
    <>
      <Header appName={"basic react todo APP"} />
      <Content addTodo={addTodos} />

      <ShowTodos todos={todos} />
    </>
  )
}

export default App
