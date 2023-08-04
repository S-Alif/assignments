import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { add } from './features/slices/taskSlice';
import List from "./List";

const App = () => {

  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  let value = useSelector((state) => state.manager.todo)

  let createTask = (e) => {
    e.preventDefault()

    let task = {
      task: input,
      id: Date.now(),
      done: false
    }
    dispatch(add(task))
    setInput("")
  }


  return (
    <>
      <section className="main-section">
        <div className="container">
          <h1 className="text-uppercase pt-5 pb-5 fs-3 fw-bolder text-center">redux todo app</h1>

          <div className="data-input shadow rounded-2 mt-4 p-4">
            <form action="" className="row" onSubmit={createTask}>
              <div className="col-12 col-md-9 pt-3">
                <input type="text" className="form-control" placeholder="todo...." required value={input} onChange={(e) => setInput(e.target.value)} />
              </div>
              <div className="col-12 col-md-3 pt-3">
                <button type="submit" className="btn btn-success d-inline-block pe-4 ps-4 fw-bold">Save</button>
              </div>
            </form>
          </div>

          <div className="show-data mt-5 p-4 rounded-2 shadow">
            <div className="row">
              {
                value.map((e, index) => (
                  <List task={e} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;