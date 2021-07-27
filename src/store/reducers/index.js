import cacheReducer from "./cacheReducer";
import cartReducer from "./cartReducer";
import toastReducer from "./toastReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cacheReducer,
  cartReducer,
  toastReducer,
});

export default rootReducer;
