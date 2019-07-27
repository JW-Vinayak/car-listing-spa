import { SET_CURRENT_PAGE } from "./paginatorActions";

const initialState = {
  currentPage: 1
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.pageNumber
      };
    default:
      return state;
  }
}
