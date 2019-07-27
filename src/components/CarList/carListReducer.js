import {
  FETCH_CARS_BEGIN,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  SET_TOTAL_PAGES
} from "./carListActions";

const initialState = {
  list: [],
  loading: false,
  error: null,
  totalPages: 0
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

    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload.totalPages
      };

    default:
      return state;
  }
}
