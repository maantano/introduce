import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./feature/counterSlice";
import naviReducer from "./feature/navSlice";
import inputReducer from "./feature/inputSlice";
import currentReducer from "./feature/currentSlice";
import chatbotReducer from "./feature/chatbotSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counterReducer,
    naviReducer,
    inputReducer,
    currentReducer,
    chatbotReducer,

    // [userApi.reducerPath]: userApi.reducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({}).concat([userApi.middleware]),
});
setupListeners(store.dispatch);
export default store;
