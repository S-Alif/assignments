/* eslint-disable react/prop-types */


const List = ({todo}) => {
  console.log(todo)
  return (
    <li className="pt-3">
      {todo.todo}
    </li>
  );
};

export default List;