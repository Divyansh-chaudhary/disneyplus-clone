import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import moviesReducer from "./features/moviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
