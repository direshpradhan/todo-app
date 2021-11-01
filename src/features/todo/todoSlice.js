import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const item = state.tasks.find((item) => item.id === action.payload);
      const indexOfItemToBeDeleted = state.tasks.indexOf(item);
      console.log(indexOfItemToBeDeleted);
      state.tasks.splice(indexOfItemToBeDeleted, 1);
    },
    updateTask: (state, action) => {
      const itemToBeUpdated = state.tasks.find(
        (item) => item.id === action.payload.id
      );
      itemToBeUpdated.name = action.payload.name;
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
