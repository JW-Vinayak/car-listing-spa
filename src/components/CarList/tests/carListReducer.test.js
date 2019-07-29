import reducer from "../carListReducer";
import * as actions from "../carListActions";

describe("car list reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      list: [],
      loading: false,
      error: null,
      totalPages: 0,
      totalRecords: 0
    });
  });

  it("should handle FETCH_CARS_BEGIN", () => {
    expect(
      reducer(undefined, {
        type: actions.FETCH_CARS_BEGIN
      })
    ).toEqual({
      list: [],
      loading: true,
      error: null,
      totalPages: 0,
      totalRecords: 0
    });
  });

  it("should handle FETCH_CARS_BEGIN", () => {
    expect(
      reducer(
        {},
        {
          type: actions.FETCH_CARS_FAILURE,
          payload: { error: {} }
        }
      )
    ).toEqual({
      list: [],
      loading: false,
      error: {}
    });
  });

  it("should handle FETCH_CARS_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: actions.FETCH_CARS_SUCCESS,
          payload: { cars: [{ name: "Tesla" }] }
        }
      )
    ).toEqual({
      list: [{ name: "Tesla" }],
      loading: false
    });
  });
});
