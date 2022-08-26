import {createSlice} from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    ADD: (state, action) => {
      console.log("hello");
    },
  },
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {},
});
