import { configureStore } from "@reduxjs/toolkit";
import { commentSlice } from "./modules/commentSlice";
import posts from "./modules/postSlice";

const store = configureStore({
  reducer: { comment: commentSlice.reducer, posts },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
