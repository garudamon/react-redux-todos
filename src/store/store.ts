import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todosSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    todos: taskReducer,
    auth: authSlice
  },
});
