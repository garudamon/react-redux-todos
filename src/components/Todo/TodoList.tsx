import TodoItem from './TodoItem';
import { useSelector,useDispatch } from "react-redux";
import {selectTask} from '../../store/tasksSlice'

const TodoList = () => {
	const dispatch = useDispatch();

	const todos = useSelector((state)=>{
		return state.tasks.items;
	});

	const select = (todo) => dispatch(
		selectTask(todo)
	)

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} onSelect={select(todo)} />
			))}
		</ul>
	);
};

export default TodoList;