import TodoItem from "../TodoItem";
import { fireEvent, render, screen } from "utils/test-utils";
import { selectTodo, getTodosSelected } from "store/todosSlice";
import { todos } from "mocks/handlers";

const todoItem = todos[0];

describe("TodoItem.tsx Test", () => {
  test(`it should return "${todoItem.title}" on item`, () => {
    render(<TodoItem title={todoItem.title} id={todoItem.id} />);
    const text = screen.getByText(new RegExp(todoItem.title, "i"));
    expect(text).toBeDefined();
  });

  test("call button delete", () => {
    const deleteCall = vi.fn();
    render(
      <TodoItem title={todoItem.title} id={todoItem.id} onDelete={deleteCall} />
    );
    const deleteButton = screen.getByTestId("todo-delete");
    fireEvent.click(deleteButton);
    expect(deleteCall).toBeCalled();
  });

  test("call button edit", () => {
    render(
      <TodoItem
        title={todoItem.title}
        id={todoItem.id}
        onSelect={() => selectTodo({ ...todoItem })}
      />
    );
    const editButton = screen.getByTestId("todo-edit");
    fireEvent.click(editButton);
    console.log(getTodosSelected);
    expect(getTodosSelected).toMatchObject(getTodosSelected);
  });
});
