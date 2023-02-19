const TodoList = ({
  list,
  onDelete,
  onEdit,
  edit,
  handleSubmit,
  updateEdit,
}) => {
  return (
    <>
      {list.map((i) => {
        return (
          <div className="wrapper">
            {i.id === edit ? (
              <div>
                <input
                  placeholder="Update your todos"
                  onChange={(e) => updateEdit(e.target.value)}
                />
                <button onClick={() => handleSubmit(edit)}>UpdateTodo</button>
              </div>
            ) : (
              <div>
                <h1>{i.text}</h1>
                <div className="button-container">
                  <button onClick={() => onDelete(i.id)}>Delete</button>
                  <button onClick={() => onEdit(i)}>Edit</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default TodoList;
