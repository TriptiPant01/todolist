import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState("");
  const [edit, setEdit] = useState(null);

  const handleSubmit = (value) => {
    const newValue = [...todos, value];
    setTodos(newValue);
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((i) => i.id !== id);
    setTodos(newTodo);
  };

  const handleEdit = (val) => {
    setEdit(val.id);
  };

  const updatedEdit = (val) => {
    setEditItem(val);
  };

  const updatedEditValue = (id) => {
    const updatedValue = todos.map((i) => {
      if (i.id === id) {
        i.text = editItem;
      }
      return i;
    });
    console.log(updatedValue);
    setTodos(updatedValue);
    setEdit("");
  };

  return (
    <div className="App">
      <TodoForm onsubmit={handleSubmit} />
      <TodoList
        list={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        edit={edit}
        handleSubmit={updatedEditValue}
        updateEdit={updatedEdit}
      />
    </div>
  );
}

export default App;
