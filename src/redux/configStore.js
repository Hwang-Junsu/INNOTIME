import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice, commentSlice } from "./modules/slice";
import todos from "./modules/todosSlice";

const store = configureStore({
  reducer: {
    todo: toDoSlice.reducer,
    comment: commentSlice.reducer,
    todos,
  },
});

export default store;
