import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
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
      const data = await client.get("/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "posts/addPost",
  async (arg, thunkAPI) => {
    try {
      const {data} = await client.post("/posts", arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload) => {
    const {data} = await client.delete(`/posts/${payload}`);
    return payload;
  }
);

export const __editPosts = createAsyncThunk(
  "posts/editPosts",
  async (payload) => {
    const {data} = await client.patch(`/posts/${payload.id}`, {
      body: payload.body,
    });
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
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? {...post, body: action.payload.body}
          : post
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
    [__addPost.pending]: (state) => {
      state.isLoading = true; // DESC: 네트워크 요청이 시작되면 로딩 상태를 true로 변경!
    },
    [__addPost.fulfilled]: (state, action) => {
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.posts.push(action.payload); //DESC: Store에 있는 posts에 새 post를 추가합니다.
    },
    [__addPost.rejected]: (state, action) => {
      state.isLoading = false; // DESC: 네트워크 요청이 끝났으니, 로딩 상태를 false로 변경!
      state.error = action.payload; // DESC: catch된 error 객체를 state.error에 넣습니다.
    },
    [__deletePosts.fulfilled]: (state, {payload}) => {
      state.posts = state.posts.filter((post) => post.id !== payload);
    },
    [__editPosts.fulfilled]: (state, {payload}) => {
      state.posts = state.posts.map((post) =>
        post.id === payload.id ? {...post, body: payload.body} : post
      );
    },
  },
});

export const {clearPost, addPost, deletePost, editPost} = postSlice.actions;
export default postSlice.reducer;
