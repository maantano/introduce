import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  selectIndex: 0,
};

export const currentSlice = createSlice({
  name: "currentSlice",
  initialState,
  reducers: {
    navi: (state, action) => {
      console.log("action.payload ===>", action.payload);
      state.index = action.payload;
      state.selectIndex = action.payload;
    },
  },
});

export const { navi } = currentSlice.actions;
export default currentSlice.reducer;
