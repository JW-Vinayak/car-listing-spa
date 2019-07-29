import sorterReducer from "../sorterReducer";
import {
  NO_MILEAGE_SORTING,
  ASCENDING_MILEAGE_SORTING
} from "../../../common/constants";
import { SET_SORT_ORDER } from "../sorterActions";

const initialState = {
  mileage: NO_MILEAGE_SORTING
};

describe("sorter reducer", () => {
  it("should return initial state", () => {
    expect(sorterReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_SORT_ORDER", () => {
    expect(
      sorterReducer(initialState, {
        type: SET_SORT_ORDER,
        payload: {
          sortOrder: ASCENDING_MILEAGE_SORTING
        }
      })
    ).toEqual({
      mileage: ASCENDING_MILEAGE_SORTING
    });
  });
});
