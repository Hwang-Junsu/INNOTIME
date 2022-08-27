import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      title: "리액트 학습",
      body: "팀 프로젝트",
      writer: "8조 조장",
      isDone: false,
    },
  ],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
  },
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {},
});

export const { addTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
