import { combineReducers } from "redux";
import cars from "./CarList/carListReducer";
import filters from "./Filters/filterReducer";
import pagination from './Paginator/paginatorReducer';
import sorter from './Sorter/sorterReducer';

export default combineReducers({
  cars,
  filters,
  pagination,
  sorter
});
