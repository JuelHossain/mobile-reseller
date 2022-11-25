import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { TokenProvider } from "./context/tokenContext";
import "./index.css";
import Mantine from "./Mantine";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <QueryClientProvider client={queryClient}>
        <Mantine />
      </QueryClientProvider>
    </TokenProvider>
  </React.StrictMode>,
);
