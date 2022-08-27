import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 학습",
      body: "팀 프로젝트",
      writer: "8조 조장",
      isDone: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
