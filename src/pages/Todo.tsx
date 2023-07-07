import AddTodo from "../components/Todo/AddTodo"
import TodoList from "../components/Todo/TodoList"


const TodoPage = () => {
    return (
        <div className="container">
          <h1 className="app-title">My Tasks</h1>
          <AddTodo />
          <TodoList />
        </div>
    )
}

export default TodoPage;