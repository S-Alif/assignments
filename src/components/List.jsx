/* eslint-disable react/prop-types */


const List = ({todo}) => {
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-2">
      <div className="todo-content p-lg-3 p-2">
        <p className="fw-medium text-start">{todo.todo}</p>

        <div className="check-btn text-end pt-3">
          <button className="btn btn-success btn-sm rounded me-1">✔</button>
          <button className="btn btn-danger btn-sm rounded">❌</button>
        </div>
      </div>
    </div>
  );
};

export default List;