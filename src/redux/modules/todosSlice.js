import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/todos", payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state, _) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
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
  },
});

export const { clearTodo } = todosSlice.actions;
export default todosSlice.reducer;
