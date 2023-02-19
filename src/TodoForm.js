import { useState } from "react";

const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onsubmit({
      id: Math.floor(Math.random() * 10000),
      text: value,
    });
    setValue("");
  };
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        placeholder="Please enter your list"
        value={value}
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoForm;
