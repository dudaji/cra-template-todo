import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./counterSlice";

// eslint-disable-next-line import/prefer-default-export
export function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    preloadedState,
  });

  return store;
}
