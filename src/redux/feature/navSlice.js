import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const navi = createSlice({
  name: "navi",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = navi.actions;
export default navi.reducer;
