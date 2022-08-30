import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../client";

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

export const { addComment, deleteComment, updateComment } =
  commentSlice.actions;
export default commentSlice.reducer;
