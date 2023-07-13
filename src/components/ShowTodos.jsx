/* eslint-disable react/prop-types */
import List from "./List";


const ShowTodos = ({todos}) => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="content text-center">

            <h4 className="text-capitalize">Your todos</h4>

            <ol className="mt-5">
              {
                todos.map(e => {
                  <List todo={e} />
                  console.log(e)
                })
              }
            </ol>

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTodos;