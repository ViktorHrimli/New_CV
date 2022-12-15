import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./slice";
import { userApi } from "../services/postServices";

export const store = configureStore({
  reducer: {
    stateTodo: todoReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
