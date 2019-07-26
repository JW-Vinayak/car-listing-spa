import { combineReducers } from "redux";
import cars from "./CarList/carListReducer";
import filters from "./Filters/filterReducer";

export default combineReducers({
  cars,
  filters
});
