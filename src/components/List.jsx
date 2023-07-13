const List = (todo) => {
  return (
    <>
      <li className="mb-3 fs-4" id={todo.id}>
        <span style={todo.done ? { color: "green", textDecoration: "line-through"} : {}}>
          {todo.todo}
        </span>
      </li>
    </>
  );
};

export default List;