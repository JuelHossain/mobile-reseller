import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import AllContextProvider from "./components/shared/AllContextProvider";
import { TokenProvider } from "./context/tokenContext";
import "./index.css";
import Mantine from "./Mantine";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
        <AllContextProvider>
          <Mantine />
        </AllContextProvider>
     
  </React.StrictMode>,
);
