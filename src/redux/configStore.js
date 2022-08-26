import {configureStore} from "@reduxjs/toolkit";
import {toDoSlice, commentSlice} from "./modules/slice";

const store = configureStore({
  reducer: {todo: toDoSlice.reducer, comment: commentSlice.reducer},
});

export default store;
