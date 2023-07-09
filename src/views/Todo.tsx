import AddTodo from "../components/modules/Todo/AddTodo";
import TodoList from "../components/modules/Todo/TodoList";

const TodoPage = () => {
  return (
    <div className="max-w-lg m-auto shadow-md h-screen">
      <h1 className="p-5 bg-teal-700 text-white text-3xl font-serif">My Tasks</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
