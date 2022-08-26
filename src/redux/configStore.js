import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice, commentSlice } from "./modules/slice";
import todo from "./modules/slice";

const store = configureStore({
  reducer: { todo: todo, comment: commentSlice.reducer },
});

export default store;
