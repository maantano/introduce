import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const inputShow = createSlice({
  name: "inputShow",
  initialState,
  reducers: {
    reset: () => initialState,
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { reset, toggle } = inputShow.actions;
export default inputShow.reducer;
