import { useState } from "react";

export const TodoForm = ({ onTodoEvent }) => {
  const [todoValue, setTodoValue] = useState({});

  const handleButtonChange = (val) => {
    setTodoValue({id: val, content: val, checked: false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onTodoEvent(todoValue)
    setTodoValue({id:'', content:'', checked: false});
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={todoValue.content}
            onChange={(event) => handleButtonChange(event.target.value)}
          />
        </div>
        <div>
          <button className="todo-btn" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
};
