import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userid';

export default configureStore({
    reducer: {userId: userReducer},
  });