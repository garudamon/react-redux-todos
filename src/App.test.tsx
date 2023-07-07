import App from './App'
import {render, screen} from './utils/test-utils'

it('render', () => {
    render(<App />);
    const heading = screen.queryByText(/My Tasks/);
    console.log(heading)
    expect(heading).not.toEqual(null);
})