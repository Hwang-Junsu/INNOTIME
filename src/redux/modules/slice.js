import {
  createAsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import client from "../../client";

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
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
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

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await client.get("/comment");
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __addComments = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await client.post("/comment", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteComments = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await client.delete(`/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  "updateComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await client.patch(`/comment/${payload.id}`, {
        body: payload.body,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = false;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      return;
    },
    [__addComments.fulfilled]: (state, action) => {
      state.comments.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      return;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      const newState = state.comments.filter(
        (comment) => comment.id !== action.meta.arg
      );
      state.comments = newState;
      return state;
    },
    [__deleteComments.rejected]: (state, action) => {
      return;
    },
    [__updateComments.fulfilled]: (state, action) => {
      const newState = state.comments.map((comment) =>
        action.payload.id === comment.id
          ? { ...comment, body: action.payload.body }
          : comment
      );
      state.comments = newState;
      return state;
    },
    [__updateComments.rejected]: (state, action) => {
      return;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, loadTodo } = toDoSlice.actions;
export const { addComment, deleteComment, updateComment } =
  commentSlice.actions;
export default toDoSlice.reducer;
