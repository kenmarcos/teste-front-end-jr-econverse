import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import queryClient from "./services/queryClient.ts";

import { QueryClientProvider } from "@tanstack/react-query";

import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
