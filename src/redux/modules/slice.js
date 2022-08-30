import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {todos: [], isLoading: false, error: null},
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

let initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "loadComment",
  async (payload, thunkAPI) => {
    try {
      const {data} = await axios.get("http://localhost:3001/comment");
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
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
  extraReducer: {
    [__getComments.fulfilled]: (state, action) => {
      state = action.payload;
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
