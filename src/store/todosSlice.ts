import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import uuid from "../utils/uuid";
import {REQUEST_STATUS} from '../utils/constants'

export type todoProps = {
  id: string;
  title: string;
  complete: boolean;
};

export const fetchTodos = createAsyncThunk("todos/all", async () => {
  const response = await api.get("/todos");
  return response.data;
});

export const deleteTodos = createAsyncThunk(
  "todos/delete",
  async (uuid: string) => {
    const response = await api.delete(`/todos/${uuid}`);
    if (response.status == 200) {
      return { uuid };
    } else {
      return null;
    }
  }
);

export const addTodos = createAsyncThunk(
  "todos/add",
  async ({ title }: Pick<todoProps, "title">) => {
    const id = uuid();
    const newItem: todoProps = {
      id,
      title,
      complete: false,
    };
    const response = await api.post("/todos", newItem);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async ({ title, id, complete }: todoProps) => {
    const updateItem = {
      title,
      complete,
    };
    const response = await api.patch(`/todos/${id}`, updateItem);
    return response.data;
  }
);

const initialState = {
  items: [],
  selected: {},
  status: REQUEST_STATUS.IDDLE,
  addStatus: REQUEST_STATUS.IDDLE,
  error: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    selectTodo: (state, action) => {
      state.selected = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = REQUEST_STATUS.LOADING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.OK;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = REQUEST_STATUS.FAIL;
        state.error = action.error.message;
      });

    builder
      .addCase(addTodos.pending, (state) => {
        state.addStatus = REQUEST_STATUS.LOADING;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.addStatus = REQUEST_STATUS.OK;
        state.items = [...state.items, action.payload];
      })
      .addCase(addTodos.rejected, (state, action) => {
        state.addStatus = REQUEST_STATUS.FAIL;
        state.error = action.error.message;
      });

    builder
      .addCase(updateTodo.pending, (state) => {
        state.addStatus = REQUEST_STATUS.LOADING;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.addStatus = REQUEST_STATUS.OK;
        state.items = [
          ...state.items.map((v) =>
            v.id === action.payload.id ? { ...action.payload } : v
          ),
        ];
        state.selected = {};
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.addStatus = REQUEST_STATUS.FAIL;
        state.error = action.error.message;
      });

    builder
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.status = REQUEST_STATUS.OK;
        state.items = state.items.filter(
          (val: todoProps) => val.id !== action.payload?.uuid
        );
      })
      .addCase(deleteTodos.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { selectTodo } = todosSlice.actions;

export const getTodosItems = (state) => state.todos.items;
export const getTodosStatus = (state): "loading" | "succeeded" | "failed" =>
  state.todos.status;
export const getTodosAddStatus = (state) => state.todos.addStatus;
export const getTodosError = (state) => state.todos.error;
export const getTodosSelected = (state) => state.todos.selected;

export default todosSlice.reducer;
