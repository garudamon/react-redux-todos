import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodosItems,
  getTodosStatus,
  fetchTodos,
  todoProps,
  getTodosError,
  selectTodo
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
    dispatch(
      selectTodo(todo)
    )
  }

  useEffect(() => {
    if (todosStatus === REQUEST_STATUS.IDDLE) {
      dispatch(fetchTodos());
    }
    if(todosStatus === REQUEST_STATUS.FAIL && todosError.indexOf('401')) {
      console.log('todo request status', REQUEST_STATUS.FAIL)
      dispatch(removeAuth())
    }
    return () => {};
  }, [todosStatus, dispatch]);

  return (
    <ul className="tasks-list">
      {todos.map((todo:todoProps) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          key={todo.id}
          onSelect={() => selectTask(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
