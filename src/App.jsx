import { useState } from 'react';

import Content from './components/Content';
import Header from './components/Header'
import ShowTodos from './components/ShowTodos';
import Footer from './components/Footer';

const App = () => {

  const [todos, setTodos] = useState([])

  let addTodos = (todo) => {
    setTodos((todos) => [...todos, todo])
  }

  return (
    <>
      <Header title={"Basic Todo"} />
      <Content addTodo={addTodos} />
      <ShowTodos todos={todos} />
      <Footer />
      {console.log(todos)}
    </>
  );
};

export default App;