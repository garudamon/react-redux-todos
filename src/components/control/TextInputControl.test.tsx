import TextInput from "./TextInputControl";
import { act, fireEvent, render, screen } from "../../utils/test-utils";
import { createRef } from "react";

describe("Text Input Control Test", () => {
  test("render label correctly", () => {
    render(<TextInput label="Username" />);
    expect(screen.getByText("Username")).toBeDefined();
  });
  test("render placeholder correctly", () => {
    render(<TextInput label="Username" />);
    expect(screen.getByPlaceholderText("Type username here...")).toBeDefined();
  });
  test('change value to "New todo"', () => {
    const refInput = createRef();
    render(<TextInput ref={refInput} data-testid="input" />);
    act(() => (refInput.current.value = "New todo"));
    expect(refInput.current.value).toEqual("New todo");
  });
});
