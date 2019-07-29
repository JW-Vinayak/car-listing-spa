import { NO_MILEAGE_SORTING } from '../../common/constants';
import { SET_SORT_ORDER } from './sorterActions';

const initialState = {
  mileage: NO_MILEAGE_SORTING
}

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return {
        ...state,
        mileage: action.payload.sortOrder
      }
    default:
      return {
        ...state
      }

  }
}
