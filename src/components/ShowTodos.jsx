/* eslint-disable react/prop-types */
import List from "./List";


const ShowTodos = ({todos}) => {

  let list = todos  

  return (
    <>
      <section className="show-todos mt-5">
        <div className="container">
          <div className="content text-center">

            <h4 className="text-capitalize mb-5">Your todos</h4>

            <div className="row">
              {
                list.map((e, index) => (
                  <List todo={e} key={index} />
                ))
              }
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTodos;