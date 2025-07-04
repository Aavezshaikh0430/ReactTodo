import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateAndTime } from "./TodoDateAndTime";
import {
  getTodoLocalStorageData,
  setTodoLocalStorageData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [inputValue, setInputValue] = useState(() => setTodoLocalStorageData());
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (todoValue) => {
    const { id, content, checked } = todoValue;

    //to check if the input field is empty or not
    if (!content) return;

    //to check if the data is already existing or not
    // if (inputValue.includes(todoValue)) return;

    const IfDataIsSame = inputValue.find(
      (curentTast) => curentTast.content === content
    );
    if (IfDataIsSame) return;

    setInputValue((pre) => [...pre, { id, content, checked }]);
  };

  //local stroarge funtionality
  getTodoLocalStorageData(inputValue);

  // console.log('hello');

  // delete functionality

  const handleDeletTodo = (val) => {
    // console.log(inputValue);
    console.log(val);

    const updateVal = inputValue.filter(
      (curentTask) => curentTask.content !== val
    );
    setInputValue(updateVal);
  };

  //checked Funtionality

  const handlecheckTodo = (task) => {
    const updatedCheck = inputValue.map((curTask) => {
      if (curTask.content === task) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setInputValue(updatedCheck);
  };

  //Clear All button funtionality
  const handleAllClearButton = () => {
    setInputValue([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* Date and Time  */}
        <TodoDateAndTime date={dateTime} setDate={setDateTime} />
      </header>

      <TodoForm onTodoEvent={handleFormSubmit} />

      <section>
        <section className="myUnOrdList">
          <ul>
            {inputValue.map((elemval) => {
              return (
                <TodoList
                  key={elemval.id}
                  data={elemval.content}
                  checked={elemval.checked}
                  onTodoListDeletButton={handleDeletTodo}
                  onTodoListCheckedButton={handlecheckTodo}
                />
              );
            })}
          </ul>
        </section>
      </section>
      <section>
        <button className="clear-btn" onClick={handleAllClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};
