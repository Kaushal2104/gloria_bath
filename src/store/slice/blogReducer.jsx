import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk

export const getBlog = createAsyncThunk("blog/getBlog", async () => {
  try {
    const res = await axios.get("blog/");
    return res.data;
  } catch (e) {
    return e;
  }
});
export const singleBlog = createAsyncThunk("blog/singleBlog", async (id) => {
  try {
    const res = await axios.get(`blog/singleblog/${id}`);
    return res.data;
  } catch (e) {
    return e;
  }
});

const blogSclice = createSlice({
  name: "blog",
  initialState: {
    art: [],
    oneBlog: [],
    status: "",
    error: null,
  },
  reducers: {
    selectBlog: (state, action) => {
      const blg = current(state.art).filter((val) => {
        return val._id === action.payload;
      });
      state.oneBlog = blg;
    },
    deleteBlog: (state, action) => {
      axios.delete(`http://localhost:8000/blog/delete/${action.payload}`);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getBlog.pending, (state, action) => {
      // state.loading = true;
      state.status = "pending";
      // console.log("pending stage");
    });
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.art = action.payload;
      // state.loading = false;
      state.status = "success";
      // console.log("fullfill stage");
    });
    builder.addCase(getBlog.rejected, (state, action) => {
      // Add user to the state array
      // state.loading = false;
      state.status = "rejected";
      // console.log("reject stage");
    });
    // single blog
    builder.addCase(singleBlog.pending, (state, action) => {
      state.status = "pending";
      // console.log("full pending");
    });
    builder.addCase(singleBlog.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.art = action.payload;
      // console.log("full fill");
      // if (state.art.length > 0) {
      //   setTimeout(() => {
      //     state.art = [];
      //   }, 1000);
      // }
    });
    builder.addCase(singleBlog.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      // console.log("full reject");
    });
  },
});

// console.log(blogSclice.actions);

export default blogSclice.reducer;
export const { selectBlog, deleteBlog } = blogSclice.actions;
