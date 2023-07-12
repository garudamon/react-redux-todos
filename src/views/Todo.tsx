import Signout from "components/modules/Auth/Signout";
import AddTodo from "components/modules/Todo/AddTodo";
import TodoList from "components/modules/Todo/TodoList";

const TodoPage = () => {
  return (
    <div className="max-w-lg m-auto shadow-md min-h-screen">
      <div className="flex justify-between items-center p-5 bg-teal-700 text-white">
        <h1 className="text-3xl font-serif">My Tasks</h1>
        <Signout />
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
