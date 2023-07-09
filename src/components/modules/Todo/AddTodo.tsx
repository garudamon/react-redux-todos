import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  getTodosAddStatus,
  getTodosSelected,
  updateTodo,
} from "../../../store/todosSlice";
import TextInput from "../../control/TextInput";

type TaskFormProps = {
  title: string | null;
};

const AddTodo = () => {
  const [errors, setErrors] = useState<TaskFormProps>({ title: null });
  const refInputTitle = useRef();

  const addStatus = useSelector(getTodosAddStatus);
  const selectedTodos = useSelector(getTodosSelected);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTodos && selectedTodos.id) {
      title().set(selectedTodos.title);
    } else {
      title().set("");
    }
    title().focus();
    return () => {};
  }, [selectedTodos]);

  const validate = () => {
    if (title().get().trim().length < 1) {
      setErrors({ ...errors, title: "Title is required" });
    } else {
      setErrors({ ...errors, title: null });
    }
  };

  const title = () => {
    return {
      get: () => {
        return refInputTitle.current.value;
      },
      set: (val: string) => {
        refInputTitle.current.value = val;
      },
      focus: () => {
        refInputTitle.current.focus();
      },
      reset: () => {
        title().set("");
        title().focus();
        setErrors({ ...errors, title: null });
      },
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    validate();

    if (errors.title === null) {
      if (addStatus == "loading") return;

      if (selectedTodos && selectedTodos.id) {
        dispatch(updateTodo({ ...selectedTodos, title: title().get() }));
      } else {
        dispatch(addTodos({ title: title().get() }));
      }
      title().reset();
    }
  };

  const getSubmitText = () => {
    if (selectedTodos && selectedTodos.id) {
      return addStatus == "loading" ? "Updating" : "Update";
    } else {
      return addStatus == "loading" ? "Adding" : "Add";
    }
  };

  return (
    <form
      className="flex gap-3 px-5 py-3 border-b"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="w-full">
        <TextInput error={errors.title} ref={refInputTitle} />
      </div>

      <button
        type="submit"
        className="px-3 py-2 rounded hover:bg-teal-500 text-white bg-teal-700"
      >
        {getSubmitText()}
      </button>
    </form>
  );
};

export default AddTodo;
