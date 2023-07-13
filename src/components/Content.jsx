import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Content = ({ addTodo }) => {
  const [todo, setTodo] = useState([])

  let handleSubmit = (e) =>{
    e.preventDefault()

    if(!todo) return

    let newTodo = {todo, id: Date.now(), done:false}

    // console.log(newTodo)

    addTodo(newTodo)

    setTodo("")
  }

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="content text-center pt-5">
            <div className="row">
              <div className="col-lg-12 pt-5 pb-5 mt-5 bg-dark-subtle">
                <form action="" onSubmit={handleSubmit} >
                  <input type="text" id="item" value={todo} className="form-control text-center fw-bold text-dark" placeholder="enter todo" onChange={(e) => setTodo(e.target.value)} />
                  <button className="btn btn-success btn-lg text-capitalize mt-4" id="submit-btn">submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;