import cacheReducer from "./cacheReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cacheReducer,
  cartReducer,
});

export default rootReducer;
