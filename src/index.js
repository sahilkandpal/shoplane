import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./store/store";
import { Provider } from "react-redux";

store.subscribe(() => console.log("store", store.getState()));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
