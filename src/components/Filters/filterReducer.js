import { SET_COLOR, SET_MANUFACTURER, SET_FILTER } from "./filterActions";

const initialState = {
  color: null,
  manufacturer: null
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MANUFACTURER:
      return {
        ...state,
        manufacturer: action.payload.manufacturer
      };

    case SET_COLOR:
      console.log("color is now", action.payload.color);
      return {
        ...state,
        current: action.payload.color
      };

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
