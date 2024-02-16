import { configureStore } from "@reduxjs/toolkit";
import productSclice from "./slice/productReducer";
import blogSlice from "./slice/blogReducer";
import contactSclice from "./slice/contactReducer";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";

const store = configureStore({
  reducer: {
    product: productSclice,
    blog: blogSlice,
    contacts: contactSclice,
  },
});

export default store;
