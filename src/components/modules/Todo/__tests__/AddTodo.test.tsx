import AddTodo from "../AddTodo";
import { fireEvent, render, screen } from "utils/test-utils";
import {todos} from 'mocks/handlers'
import { selectTodo } from "@/store/todosSlice";
import setupStore, { useAppDispatch } from "@/store/store";

const item = todos[1];

describe('AddTodo.tsx testing', () => {
    test('has "Add" button', () => {
        render(<AddTodo />);
        const btn = screen.getByText(/Add/i);
        expect(btn).toBeDefined();
    });

    test('has input text with "Type here..." placeholder', () => {
        render(<AddTodo />);
        const placeholder = screen.getByPlaceholderText('Type here...')
        expect(placeholder).toBeDefined();
    });
    
    test('[edit state] has "Update" button', () => {
        const store = setupStore()
        store.dispatch(selectTodo(item))
        render(<AddTodo />, {store});
        const btn = screen.getByText(/Update/i);
        expect(btn).toBeDefined();
    });

    test(`[edit state] has input text with "${item.title}" value`, () => {
        const store = setupStore()
        store.dispatch(selectTodo(item))
        render(<AddTodo />, {store});
        const input = screen.getByTestId('input-add-todos')
        expect(input).toHaveDisplayValue(item.title)
    });

    test('[edit state] "Updating" text when click "update" button ', () => {
        const store = setupStore()
        store.dispatch(selectTodo(item))
        render(<AddTodo />, {store});
        const btn = screen.getByText(/Update/i);
        fireEvent.click(btn);
        const btn2 = screen.getByText(/Updating/i);
        expect(btn2).toBeDefined();
    });
})