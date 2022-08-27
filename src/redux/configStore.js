import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice, commentSlice } from "./modules/slice";
import { todosSlice } from "./modules/todosSlice";

const store = configureStore({
  reducer: {
    todo: toDoSlice.reducer,
    comment: commentSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export default store;
