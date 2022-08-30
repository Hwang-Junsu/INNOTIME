import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      console.log(123);
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(321);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __deleteTodos = createAsyncThunk(
//   "todos/deleteTodos",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.delete(`http://localhost:3001/todos/${payload}`);
//       return thunkAPI.fulfillWithValue(data.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos = [...state.todos, action.payload];
    // },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, body: action.payload.body }
          : todo
      );
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
          ? { ...comment, body: action.payload.body }
          : comment
      );
    },
  },
});

// export const { addTodo, deleteTodo, editTodo } = toDoSlice.actions;
export const { addComment, deleteComment, updateComment } =
  commentSlice.actions;
export default toDoSlice.reducer;
