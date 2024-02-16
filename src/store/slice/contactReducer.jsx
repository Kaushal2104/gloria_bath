import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getContact = createAsyncThunk("ContactUs", async () => {
  try {
    const ContactData = await axios.get(`contact/`);
    // console.log("Data is",);
    return ContactData.data;
  } catch (error) {
    return error;
  }
});

const contactSclise = createSlice({
  name: "Contact",
  initialState: {
    loading: true,
    Contact: [],
    Err: null,
  },
  reducers: {
    deleteContact: (state, action) => {
      axios.delete(`contact/delete/${action.payload}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContact.pending, (state, action) => {
      state.loading = true;
      //   console.log("Reques pending");
      //   console.log(action.payload);
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.loading = false;
      state.Err = null;
      state.Contact = action.payload;
      //   console.log(action.payload);
      //   console.log("Reques Fullfil");
    });
    builder.addCase(getContact.rejected, (state, action) => {
      state.loading = false;
      state.Err = action.payload;
      //   console.log(action.payload);
      //   console.log("Reques Rejected");
    });
  },
});

export default contactSclise.reducer;
export const { deleteContact } = contactSclise.actions;
