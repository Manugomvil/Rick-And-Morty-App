import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./routes/App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./Reducers";
import { createRoot } from "react-dom/client";

const initialState = {
  data: [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
