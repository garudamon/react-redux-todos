import { Icon } from "@iconify/react";

const TodoItem = (props) => {
  const { title, onSelect, onDelete, ...rest } = props;
  return (
    <li
      className="flex gap-3 justify-between px-5 py-3 border-b border-b-gray-200 hover:bg-gray-100"
      {...rest}
    >
      <div onClick={() => onSelect} data-testid="todo-title">
        {title}
      </div>
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="update-task-button opacity-40 hover:opacity-100 text-gray-600"
          onClick={(e) => onSelect()}
          data-testid="todo-edit"
        >
          <Icon icon={"circum:edit"} height={14} />
        </button>
        <button
          type="button"
          className="remove-task-button opacity-40 hover:opacity-100 text-red-600"
          onClick={(e) => onDelete(e)}
          data-testid="todo-delete"
        >
          <Icon icon={"uiw:delete"} height={14} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
