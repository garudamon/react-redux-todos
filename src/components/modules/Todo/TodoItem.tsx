import { Icon } from "@iconify/react";

const TodoItem = (props) => {
  const { id, title, complete, onSelect, toggleComple, onDelete, ...rest } = props;
  return (
    <li
      className="flex gap-3 justify-between px-5 py-3 border-b border-b-gray-200 hover:bg-gray-100"
      {...rest}
    >
      <label onClick={() => toggleComple()} data-testid="todo-title" className="relative" htmlFor={id}>
        <input id={id} type="checkbox" defaultChecked={complete} className="w-5 h-5 peer opacity-0 peer absolute z-10" />
        <div className="flex gap-2 items-center peer-checked:line-through peer-checked:text-gray-400">
          <div className="bg-white border-2 rounded-md border-teal-600 w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-teal-700 ">
            {complete && <Icon icon={'iconamoon:check-bold'} className="text-teal-600"></Icon>}
          </div>
          <span className="peer-checked:line-through peer-checked:text-gray-400">{title}</span>
        </div>
      </label>
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
