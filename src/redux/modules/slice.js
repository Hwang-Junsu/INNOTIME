import {createSlice} from "@reduxjs/toolkit";

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
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
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
  reducers: {
    addComment: (state, action) => {
      state.push(action.payload);
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
    updateComment: (state, action) => {
      return state.map((comment) =>
        action.payload.id === comment.id
          ? {...comment, body: action.payload.body}
          : comment
      );
    },
  },
});
export const {addTodo, deleteTodo} = toDoSlice.actions;
export const {addComment, deleteComment, updateComment} = commentSlice.actions;
