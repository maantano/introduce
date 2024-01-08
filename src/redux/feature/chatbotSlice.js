import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

export const chatbotVisible = createSlice({
  name: "chatbotVisible",
  initialState,
  reducers: {
    chatbotTogle: (state) => {
      state.visible = !state.visible;
    },
    chatbotReset: () => initialState,
  },
});

export const { chatbotTogle, chatbotReset } = chatbotVisible.actions;
export default chatbotVisible.reducer;
