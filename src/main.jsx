import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import Mantine from "./Mantine";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Mantine />
    </Provider>
  </React.StrictMode>,
);
