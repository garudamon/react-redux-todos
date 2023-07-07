import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasksSlice";

const TodoItem = ({ id, title, onSelect }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<li className="task-item">
			<div onClick={onSelect}>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;