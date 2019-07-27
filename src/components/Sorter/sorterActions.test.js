import * as actions from "./sorterActions";
import { NO_MILEAGE_SORTING } from "../../common/constants";

describe("sorter actions", () => {
  it("should create action to set sorter in store", () => {
    const expectedAction = {
      type: actions.SET_SORT_ORDER,
      payload: {
        sortOrder: NO_MILEAGE_SORTING
      }
    }
    expect(actions.setSortOrder(NO_MILEAGE_SORTING)).toEqual(expectedAction)
  });
});
