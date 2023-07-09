import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {deleteTodos} from '../../../store/todosSlice'

const TodoItem = ({ id, title, onSelect }) => {
  const dispatch = useDispatch();
  
  return (
    <li className="flex gap-3 justify-between px-5 py-3 border-b border-b-gray-200 hover:bg-gray-100">
      <div onClick={() => onSelect}>{title}</div>
      <div className="flex gap-3 items-center">
      <button
          type="button"
          className="remove-task-button opacity-40 hover:opacity-100 text-gray-600"
          onClick={(e) => onSelect()}
        >
          <Icon icon={"circum:edit"} height={14} />
        </button>
        <button
          type="button"
          className="remove-task-button opacity-40 hover:opacity-100 text-red-600"
          onClick={(e) => {
            if(confirm(`Do you want to delete ${title}?`)) {
              dispatch(deleteTodos(id))
            }
          }}
        >
          <Icon icon={"uiw:delete"} height={14} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
