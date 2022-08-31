import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./modules/commentSlice";
import todos from "./modules/todosSlice";

const store = configureStore({
  reducer: {comment: commentSlice.reducer, todos},
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
