import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { configureAppStore } from "stores";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
const store = configureAppStore({});

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line global-require
  const { worker } = require("./mocks/browser");
  worker.start();
}

render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root"),
);
