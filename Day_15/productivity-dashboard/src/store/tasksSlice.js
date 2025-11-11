import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadTasks, saveTasks } from "../utils/persistence";

const initialState = loadTasks();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
        saveTasks(state);
      },
      prepare(title) {
        return { payload: { id: nanoid(), title, done: false } };
      },
    },
    toggleTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.done = !task.done;
      saveTasks(state);
    },
    deleteTask(state, action) {
      const updated = state.filter((t) => t.id !== action.payload);
      saveTasks(updated);
      return updated;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
