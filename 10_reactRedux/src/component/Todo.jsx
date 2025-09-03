import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { AddTask, DeleteTask, fetchTask } from "../Store";

export const Todo = () => {
  const [task, setTask] = useState("");
  // const state = useSelector((state) => {
  //      return state;
  //     }
  // )
  // console.log(state.isLoading);

  const tasks = useSelector((state) => {
    return state.task;
  });

  const dispatch = useDispatch();

//   handleFormSubmit form submit 

const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTask(task));
    return (setTask(''))
}

// handleTaskDelete functionality

const handleTaskDelete = (id) => {
   return dispatch(DeleteTask(id));
}

//handleFetch Tasks.
const handleFetchTasks = () => {
  return dispatch(fetchTask())
}

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>
          To-do List :
        </h1>

        <div className="row">

          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button disabled={task ? false : true}>Add Task</button>
          </form>
        </div>

        <button onClick={handleFetchTasks}>Fetch Task</button>

        <ul id="list-container">
          {tasks.map((cureElem, index) => {
            return (
              <li key={index}>
                <p>
                  {index}:{cureElem}
                </p>

                <MdDeleteForever
                  className="icon-style"
                  onClick={() => handleTaskDelete(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
