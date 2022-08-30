import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/todos", payload);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (payload) => {
    const { data } = await axios.delete(
      `http://localhost:3001/todos/${payload}`
    );
    return payload;
  }
);

export const __editTodos = createAsyncThunk(
  "todos/editTodos",
  async (payload) => {
    const { data } = await axios.patch(
      `http://localhost:3001/todos/${payload.id}`,
      { body: payload.body }
    );
    return data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state, _) => {
      state.isSuccess = false;
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
    [__addTodoThunk.pending]: (state) => {
      state.isLoading = true; // DESC: 네트워크 요청이 시작되면 로딩 상태를 true로 변경!
    },
    [__addTodoThunk.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.todos.push(action.payload); //DESC: Store에 있는 todos에 새 todo를 추가합니다.
    },
    [__addTodoThunk.rejected]: (state, action) => {
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.error = action.payload; // DESC: catch된 error 객체를 state.error에 넣습니다.
    },
    [__deleteTodos.fulfilled]: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    [__editTodos.fulfilled]: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, body: payload.body } : todo
      );
    },
  },
});

export const { clearTodo, addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
