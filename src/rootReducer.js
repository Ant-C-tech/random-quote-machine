import { combineReducers } from "redux";
import colorReducer from "./features/random-color/randomColorSlice";

export const rootReducer = combineReducers({
  color: colorReducer,
});
