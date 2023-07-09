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
    if (todosStatus === "iddle") {
      dispatch(fetchTodos());
    }
    if(todosStatus === 'failed' && todosError.indexOf('401')) {
      console.log('lhooo')
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
