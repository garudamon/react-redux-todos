import Button from "../ButtonControl";
import { fireEvent, render, screen } from "utils/test-utils";

describe('ButtonControl.tsx Test', () => {
  test('it should return "Save Data"', () => {
    render(<Button type="button" className="h-1">Save Data</Button>)
    const text = screen.getByText(/Save Data/i);
    expect(text).toBeDefined();
  });
  test('it should be clickable', () => {
    const onClick = vi.fn();
    render(<Button type="button" className="h-1" data-testid="should-click" onClick={onClick}>Click Me</Button>)
    fireEvent.click(screen.queryByTestId('should-click') as Element);
    expect(onClick).toBeCalled();
  })
})
