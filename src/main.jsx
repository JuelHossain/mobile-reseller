import React from "react";
import ReactDOM from "react-dom/client";
import AllContextProvider from "./components/shared/AllContextProvider";
import "./index.css";
import Mantine from "./Mantine";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllContextProvider>
      <Mantine />
    </AllContextProvider>
  </React.StrictMode>,
);
