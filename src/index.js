import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
// if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
//   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
