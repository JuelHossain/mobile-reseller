import React from "react";
import ReactDOM from "react-dom/client";
import { TokenProvider } from "./context/tokenContext";
import "./index.css";
import Mantine from "./Mantine";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <Mantine />
    </TokenProvider>
  </React.StrictMode>,
);
