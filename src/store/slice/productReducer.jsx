import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
// axios.defaults.baseURL = "http://localhost:8000/";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id) => {
    try {
      if (id) {
        // console.log(id);
        const res = await axios.get(`product/?category=${id}`);
        return res.data;
      } else {
        const res = await axios.get(`product/`);
        return res.data;
      }
    } catch (e) {
      throw e;
    }
  }
);

const productSclice = createSlice({
  name: "products",
  initialState: {
    products: [],
    totelItem: "0",
    status: "idle",
    loading: true,
  },
  reducers: {
    deleteProduct: (state, action) => {
      axios.delete(`http://localhost:8000/product/delete/${action.payload}`);
    },
    updateProduct: (state, action) => {
      const updateData = action.payload;
      // axios.put(``);
      console.log(updateData);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
      // console.log("pending");
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.status = "success";
      state.totelItem = action.payload.length;
      // console.log("Fullfilled");
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      // Add user to the state array
      console.log("rejected");
      state.loading = false;
      state.status = "rejected";
    });
  },
});

export const { deleteProduct, updateProduct } = productSclice.actions;

export default productSclice.reducer;
