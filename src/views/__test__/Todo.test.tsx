import Todo from "../Todo";
import { render, screen, fireEvent, within } from "utils/test-utils";
import { todos } from "mocks/handlers";

describe("Todo Page", () => {
  beforeEach(() => {
    render(<Todo></Todo>);
  });

  test('render "My Tasks" title', async () => {
    const title = await screen.findAllByText("My Tasks");
    expect(title).toBeDefined();
  });

  test('has "Signout" button', async () => {
    const signuot = await screen.findAllByText("Signout");
    expect(signuot).toBeDefined();
  });

  test(`has ${todos.length} todo items`, async () => {
    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBe(todos.length);
  });

  test('click edit button, value goes to input & button text change to "Update"', async () => {
    const items = await screen.findAllByRole("listitem");
    const button = await within(items[0]).findByTestId("todo-edit");
    fireEvent.click(button);

    const input = screen.getByTestId("input-add-todos");
    expect(input).toHaveDisplayValue(todos[0].title);

    const updateButton = screen.getByTestId("button-add-todos");
    expect(updateButton.textContent).toEqual("Update");
  });
});
