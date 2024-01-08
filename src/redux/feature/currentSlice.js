import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 1,
};

export const currentSlice = createSlice({
  name: "currentSlice",
  initialState,
  reducers: {
    navi: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { navi } = currentSlice.actions;
export default currentSlice.reducer;
