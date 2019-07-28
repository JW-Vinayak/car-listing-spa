import { SET_FILTER } from "./filterActions";

const initialState = {
  color: '',
  manufacturer: ''
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      console.log("manf is now", action.payload.color);
      return {
        ...state,
        color: action.payload.color,
        manufacturer: action.payload.manufacturer
      };

    default:
      return state;
  }
}
