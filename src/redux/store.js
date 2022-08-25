import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userid';
import markedReducer from './marked';

export default configureStore({
  reducer: {
    userId: userReducer,
    marked: markedReducer,
  }
  
  });