import { SET_FILTER } from "./filterActions";

const initialState = {
  color: '',
  manufacturer: ''
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        color: action.payload.color,
        manufacturer: action.payload.manufacturer
      };

    default:
      return state;
  }
}
