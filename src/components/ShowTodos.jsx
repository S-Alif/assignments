import { useState } from "react";
import List from "./List";

const ShowTodos = ({ todos }) => {

  // eslint-disable-next-line no-unused-vars
  let [todo, setTodo] = useState([])

  let todoList = todos

  return (
    <section className="show-todos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h4 className="text-center fw-bolder text-capitalize pb-5">your todos</h4>

            <ol className="list">
              {
                todos.map((items, index) => {
                  <List todo={items} key={index} />
                  console.log(items)
                })
              }
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowTodos;