import {
  FETCH_CARS_BEGIN,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  SET_RECORDS_INFO
} from "./carListActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
  totalPages: 0,
  totalRecords: 0
};

export default function carListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.cars
      };

    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        list: []
      };

    case SET_RECORDS_INFO:
      console.log('SET_TOTAL_PAGES', action)
      return {
        ...state,
        totalPages: action.payload.recordsInfo.totalPages,
        totalRecords: action.payload.recordsInfo.totalRecords
      };

    default:
      return state;
  }
}
