import {createSlice} from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 0,
      titie: "테스트입니다.",
      body: "테스트입니다요.",
      writer: "준수",
      isDone: "false",
    },
  ],
  reducers: {
    ADD: (state, action) => {
      console.log("hello");
    },
  },
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: [
    {
      id: "temp",
      todoId: 0,
      writer: "다른사람",
      body: "댓글입니다.",
      date: Date.now(),
    },
  ],
  reducers: {},
});
