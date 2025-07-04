import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  checked,
  onTodoListCheckedButton,
  data,
  onTodoListDeletButton,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checked" : "unchecked"}>{data}</span>

      <button
        className="check-btn"
        onClick={() => onTodoListCheckedButton(data)}
      >
        <MdCheck />
      </button>

      <button
        className="delete-btn"
        onClick={() => onTodoListDeletButton(data)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
