import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import client from "../../client";

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addNewPost = createAsyncThunk(
  "posts/addPost",
  async (arg, thunkAPI) => {
    try {
      const { data } = await client.post("/posts", arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload) => {
    const { data } = await axios.delete(
      `http://localhost:3001/posts/${payload}`
    );
    return payload;
  }
);

export const __editPosts = createAsyncThunk(
  "posts/editPosts",
  async (payload) => {
    const { data } = await axios.patch(
      `http://localhost:3001/posts/${payload.id}`,
      { body: payload.body }
    );
    return data;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.isSuccess = false;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((todo) => todo.id !== action.payload);
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, body: action.payload.body }
          : todo
      );
    },
  },
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addNewPost.pending]: (state) => {
      state.isLoading = true; // DESC: 네트워크 요청이 시작되면 로딩 상태를 true로 변경!
    },
    [__addNewPost.fulfilled]: (state, action) => {
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.posts.push(action.payload); //DESC: Store에 있는 posts에 새 todo를 추가합니다.
    },
    [__addNewPost.rejected]: (state, action) => {
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.error = action.payload; // DESC: catch된 error 객체를 state.error에 넣습니다.
    },
    [__deletePosts.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.filter((todo) => todo.id !== payload);
    },
    [__editPosts.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map((todo) =>
        todo.id === payload.id ? { ...todo, body: payload.body } : todo
      );
    },
  },
});

export const { clearPost, addPost, deletePost, editPost } = postSlice.actions;
export default postSlice.reducer;
