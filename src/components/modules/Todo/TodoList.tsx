import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodosItems,
  getTodosStatus,
  fetchTodos,
  todoProps,
  getTodosError,
  selectTodo,
  deleteTodos,
} from "../../../store/todosSlice";
import { useEffect } from "react";
import { removeAuth } from "../../../store/authSlice";
import { REQUEST_STATUS } from "../../../utils/constants";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(getTodosItems);
  const todosStatus = useSelector(getTodosStatus);
  const todosError = useSelector(getTodosError);

  const selectTask = (todo) => {
    dispatch(selectTodo(todo));
  };

  const deleteTask = (todo) => {
    if (confirm(`Do you want to delete ${todo.title}?`)) {
      dispatch(deleteTodos(todo.id));
    }
  };

  useEffect(() => {
    if (todosStatus === REQUEST_STATUS.IDDLE) {
      dispatch(fetchTodos());
    }
    if (todosStatus === REQUEST_STATUS.FAIL && todosError.indexOf("401")) {
      dispatch(removeAuth());
      console.log("todo request status", REQUEST_STATUS.FAIL);
    }
    return () => {};
  }, [todosStatus, dispatch]);

  return (
    <ul className="tasks-list overflow-y-auto" role="list">
      {todos.map((todo: todoProps, index: number) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          key={todo.id}
          onSelect={() => selectTask(todo)}
          onDelete={() => deleteTask(todo)}
          data-testid={`item-${index}`}
        />
      ))}
    </ul>
  );
};

export default TodoList;
