import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:{
        items: [],
        selected: {}
    },
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date().getTime(),
                name: action.payload.task
            }
            state.items.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.items.filter((item) => item.id !== action.payload.id);
        },
        selectTask: (state, action) => {
            state.selected = {...action.payload}
        }
    }
});

export const {addTask, deleteTask, selectTask} = tasksSlice.actions;

export default tasksSlice.reducer;