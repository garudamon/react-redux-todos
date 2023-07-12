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

});
