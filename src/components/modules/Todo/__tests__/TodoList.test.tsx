import TodoList from "../TodoList";
import { fireEvent, render, screen, within } from "utils/test-utils";
import { todos } from "mocks/handlers";
import setupStore from "@/store/store";

beforeEach(() => {
  const store = setupStore();
  render(<TodoList />, { store });
});

describe("TodoList.tsx testing", () => {
  test(`render ${todos.length} items`, async () => {
    const listitem = await screen.findAllByRole("listitem");
    expect(listitem).toHaveLength(todos.length);
  });

  test('first item', async () => {
    let items = await screen.findAllByRole("listitem");
    const button = within(items[0]).getByTestId('todo-delete')
    window.confirm = vi.fn(() => true)
    fireEvent.click(button);
  });
});
