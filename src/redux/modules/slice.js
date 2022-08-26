import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      title: "리액트 학습",
      body: "이번 주는 프론트 협업이다!",
      writer: "8조 조장",
      isDone: false,
    },
    {
      id: 2,
      title: "저녁 먹기",
      body: "저녁 뭐먹지..?",
      writer: "8조 조원",
      isDone: true,
    },
  ],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
  },
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {},
});
