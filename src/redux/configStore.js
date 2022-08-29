import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice, commentSlice } from "./modules/slice";
import todos from "./modules/slice";

const store = configureStore({
  reducer: { todos: todos, comment: commentSlice.reducer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
