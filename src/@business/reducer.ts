import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/reducer";
import todo from "./todo/reducer";

export const rootReducer = combineReducers({
  auth,
  todo
})
