import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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
    loadTodo: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id === action.payload.id
          ? {...todo, body: action.payload.body}
          : todo
      );
    },
  },
});

export const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {
    loadComment: (state, action) => {
      return action.payload;
    },
    addComment: (state, action) => {
      state.push(action.payload);
    },
    deleteComment: (state, action) => {
      const newState = state.filter((comment) => comment.id !== action.payload);
      return newState;
    },
    updateComment: (state, action) => {
      const newState = state.map((comment) =>
        action.payload.id === comment.id
          ? {...comment, body: action.payload.body}
          : comment
      );

      return newState;
    },
  },
});

export const loadCommentFromDB = () => {
  return async function (dispatch) {
    const commentsData = await axios.get("http://localhost:3001/comment");
    dispatch(commentSlice.actions.loadComment(commentsData.data));
  };
};

export const loadToDoFromDB = () => {
  return async function (dispatch) {
    const todoData = await (await axios("http://localhost:3001/todos")).data;
    dispatch(toDoSlice.actions.loadTodo(todoData));
  };
};

export const {addTodo, deleteTodo, editTodo, loadTodo} = toDoSlice.actions;
export const {addComment, deleteComment, updateComment, loadComment} =
  commentSlice.actions;
export default toDoSlice.reducer;
